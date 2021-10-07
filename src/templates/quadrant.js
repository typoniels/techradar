import React, {useState} from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import RadarListing from "../components/Listings/radar"
import Filter from "../components/filter";
import ItemSection from "../components/Layouts/ItemSection"

const QuadrantTemplate = ({data, pageContext, location}) => {
    const quadrant = data.cockpitQuadrant
    const {previous, next} = pageContext
    const description = quadrant.teaser !== undefined ? quadrant.teaser.value.childMarkdownRemark.rawMarkdownBody : quadrant.title.value
    const uninplementedItems = data.cockpitQuadrant.uninplemented ? data.cockpitQuadrant.uninplemented.value : null

    const filterFields = ['level', 'status', 'query','area']
    const emptyQuery = []
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery
    })

    const handleInputChange = event => {
        let query = []
        filterFields.forEach(function (field, key) {
            let filterVal = document.getElementById(filterFields[key]).value;
            if (filterVal == '') {
                query[field] = ''
            } else {
                query[field] = document.getElementById(filterFields[key]).value.toString().toLowerCase()
            }
        })


        let allQudrantItems = data.allCockpitTechradar.edges || []
        const filteredData = allQudrantItems.filter(item => {
            const title = item.node.title.value
            const subtitle = item.node.subtitle ? item.node.subtitle.value : null
            const teaser = item.node.teaser ? item.node.teaser.value : null
            const bodytext = item.node.bodytext ? item.node.bodytext.value.childMarkdownRemark.html : null
            const level = item.node.level ? item.node.level.value : null
            const status = item.node.status ? item.node.status.value : null
            const area = item.node.area ? item.node.area.value : null
            return (
                (
                    (title !== null ? title.toLowerCase().includes(query['query'].toLowerCase()) : '') ||
                    (teaser !== null ? teaser.toLowerCase().includes(query['query'].toLowerCase()) : '')
                ) &&
                (level !== null ? level.toLowerCase().startsWith(query['level'].toLowerCase()) : '') &&
                (status !== null ? status.toLowerCase().includes(query['status'].toLowerCase()) : '') &&
                (area !== null ? area.toLowerCase().includes(query['area'].toLowerCase()) : '')
            )
        })

        setState({
            query,
            filteredData,
        })

    }
    let {filteredData, query} = state
    const hasSearchResults = filteredData && (query !== emptyQuery)
    const allQudrantItems = data.allCockpitTechradar.edges
    const quadrantItems = hasSearchResults ? filteredData : allQudrantItems
    const showUninplementedItems = hasSearchResults ? false : true

    return (
        <Layout location={location} title={quadrant.title.value} styleclass={'blog-post-stage'}>
            <SEO title={quadrant.title.value} description={description.substr(0,240)} />
            <div className={"niels-langlotz-blogpost"}>
                <article className="niels-langlotz-blogpost_article">
                    <div className="nl-blogpost-single_article-content">
                        {quadrant.media && (
                            <div className="nl-blogpost-single_article-hero">
                                <Img className={'image-index blog-article-hero'} fluid={quadrant.media.value.childImageSharp.fluid} style={{maxHeight: '400px'}}/>
                            </div>
                        )}
                        <div className="bg-white dark:bg-gray-900 border-bottom border-gray-200 border-t border-b">
                            <div className="container content m-auto p-3">
                                <div className="max-w-4xl mx-auto">
                                    <header className={"text-center py-5" + (quadrant.teaser ? '' : '')}>
                                        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-100 -font mt-0 mb-0 uppercase"
                                            style={{marginTop: ".5rem", marginBottom: 0}}>
                                            {quadrant.title.value}
                                        </h1>
                                        {quadrant.subtitle &&
                                            <h2 className="text-3xl text-gray-900 dark:text-gray-500 opacity-75">{quadrant.subtitle.value}</h2>
                                        }
                                    </header>
                                    {quadrant.teaser &&
                                        <div className="pb-3 text-xl tracking-wide subpixel-antialiased font-light leading-8 text-gray-500 dark:text-gray-400" style={{textAlign: "center"}}>
                                            <div dangerouslySetInnerHTML={{__html: quadrant.teaser.value.childMarkdownRemark.html}} />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <ItemSection sectionClass={'bg-gray-200 dark:bg-blue-850'}>
                            <div className="technology-filter">
                                <Filter placeholder={'Technologie suchen ...'} onChange={handleInputChange}
                                        wrapperClass={'snippet'}/>
                            </div>
                        </ItemSection>
                        <div className="nl-blogpost-single_article-postbody-one bg-gray-50 dark:bg-blue-980 dark:text-white md:p-4 md:py-5">
                            <div className="content m-auto md:p-3">
                                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                                    {hasSearchResults && filteredData.length === 0 &&
                                        <div><strong className="dark:text-white">Es wurden leider keine passenden Radareinträge gefunden.</strong></div>
                                    }
                                    {!showUninplementedItems &&
                                        <RadarListing radaritems={quadrantItems} quadrantpath={'/technologien/' + pageContext.slug} />
                                    }
                                    {showUninplementedItems &&
                                        <RadarListing radaritems={quadrantItems} uninplementedItems={uninplementedItems} quadrantname={quadrant.title.value} quadrantpath={'/technologien/' + pageContext.slug} />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-800">
                            <div className="content m-auto py-5">
                                <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 md:items-center md:justify-between">
                                    <div className="flex flex-col gap-4 sm:grid grid-cols-3 justify-between items-center">
                                        <div className={'col-12 col-sm-4'}>
                                            {previous &&
                                            <div className="flex justify-start justify-content-sm-start hover:text-blue-900 dark:text-blue-100 dark:hover:text-white">
                                                <Link className={'group text-light text-decoration-none flex items-center'}
                                                      to={'/technologien/' + (previous.slugadditional ? previous.title.slug + '-' + previous.slugadditional.slug : previous.title.slug)}>
                                                    <i className={'fa fa-arrow-left text-gray-700 fa-2x mr-2 group-hover:text-blue-900 dark:text-blue-100 dark:group-hover:text-white'}/><span className="font-bold text-center">{previous.title.value}</span>
                                                </Link>
                                            </div>
                                            }
                                        </div>
                                        <div className={'col-12 col-sm-4'}>
                                            <div className="sm:justify-center align-center sm:flex sm:text-center">
                                                <Link className={'bg-gray-700 py-3 px-3 block sm:inline-block btn-block border-0 d-block rounded-0 text-white hover:bg-gray-600 hover:text-white'} to={'/technologien'}>Zurück zur Übersicht <i className="pl-1 far fa-list-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className={'col-12 col-sm-4'}>
                                            {next &&
                                            <div className="flex justify-end justify-content-sm-end">
                                                <Link className={'group text-light text-decoration-none flex items-center hover:text-blue-900 dark:text-blue-100 dark:hover:text-white'} to={'/technologien/' + (next.slugadditional ? next.title.slug + '-' + next.slugadditional.slug : next.title.slug)}>
                                                    <span className="font-bold text-center">{next.title.value}</span><i className={'fa fa-arrow-right text-gray-700 fa-2x ml-2 group-hover:text-blue-900 dark:text-blue-100 dark:group-hover:text-white'}/>
                                                </Link>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export default QuadrantTemplate

export const pageQuery = graphql`
    query QuadrantTemplate($postid: String!, $radarfilter: String) {
        site {
            siteMetadata {
                title
            }
        }

        allCockpitTechradar(filter: {quadrant: {value: {eq: $radarfilter}}, lang: {eq: "default"}},sort: {fields: title___value, order: ASC}) {
            edges {
                node {
                    title {
                        value
                        slug
                    }
                    subtitle {
                        value
                    }
                    quadrant {
                        value
                    }
                    area {
                        value
                    }
                    teaser {
                        value
                    }
                    level {
                        value
                    }
                    status {
                        value
                    }
                    teaser {
                        value
                    }
                    media {
                        value {
                            url
                            childImageSharp {
                                fluid (
                                    maxWidth: 3400,
                                    quality: 80,

                                    jpegProgressive: true,
                                    webpQuality: 80,
                                    jpegQuality: 80
                                ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    ...GatsbyImageSharpFluidLimitPresentationSize
                                }
                            }
                        }
                    }
                }
                
            }
        }
        cockpitQuadrant(id: { eq: $postid } ) {
            id
#            tags {
#                value
#            }
            subtitle {
                value
            }
            uninplemented {
                value
            }
            media {
                value {
                    url
                    childImageSharp {
                        fluid (
                            maxWidth: 3400,
                            quality: 80,

                            jpegProgressive: true,
                            webpQuality: 80,
                            jpegQuality: 80
                        ) {
                            ...GatsbyImageSharpFluid_withWebp
                            ...GatsbyImageSharpFluidLimitPresentationSize
                        }
                    }
                }
            }
            lang
            title {
                slug
                value
            }
#            slugadditional {
#                value
#                slug
#            }
#            subtitle {
#                
#            }
            teaser {
                value {
                    childMarkdownRemark {
                        html
                        rawMarkdownBody
                    }
                }
            }
            cockpitCreated(formatString: "DD MMMM YYYY", locale: "de-DE")
            cockpitModified(formatString: "DD MMMM YYYY", locale: "de-DE")
            cockpitBy
        }
    }
`
