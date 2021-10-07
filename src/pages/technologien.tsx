import React, {useState} from "react"
import {graphql, PageProps} from "gatsby"
import Layout from "../components/layout"
import IntroSection from "../components/Layouts/IntroSection"
import ItemSection from "../components/Layouts/ItemSection"
import Intro from "../components/intro"
import MainContent from "../components/maincontent"
import Filter from "../components/filter"
import SEO from "../components/seo"
import RadarListing from "../components/Listings/radar"
import Quadrantlisting from "../components/Listings/quadrants"

type Data = {
    site: {
        siteMetadata: {
            title: string
        }
    }
}

const Technologien = ({data, location}: PageProps<Data>) => {
    const siteTitle = data.site.siteMetadata.title;
    const technologyPage = data.cockpitTechseiten
    const filterFields = ['quadrant', 'level', 'status', 'query','area']
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

        let allRadarItems = data.allCockpitTechradar.edges || []
        const filteredData = allRadarItems.filter(post => {
            const title = post.node.title.value
            const subtitle = post.node.subtitle ? post.node.subtitle.value : null
            const teaser = post.node.teaser ? post.node.teaser.value : null
            const bodytext = post.node.bodytext ? post.node.bodytext.value.childMarkdownRemark.html : null
            const bodytext2 = post.node.bodytext2 ? post.node.bodytext2.value.childMarkdownRemark.html : null
            const quadrant = post.node.quadrant ? post.node.quadrant.value : null
            const level = post.node.level ? post.node.level.value : null
            const status = post.node.status ? post.node.status.value : null
            const area = post.node.area ? post.node.area.value : null
            return (
                (
                    (title !== null ? title.toLowerCase().includes(query['query'].toLowerCase()) : '') ||
                    (subtitle !== null ? subtitle.toLowerCase().includes(query['query'].toLowerCase()) : '') ||
                    (teaser !== null ? teaser.toLowerCase().includes(query['query'].toLowerCase()) : '') ||
                    (bodytext !== null ? bodytext.toLowerCase().includes(query['query'].toLowerCase()) : '') ||
                    (bodytext2 !== null ? bodytext2.toLowerCase().includes(query['query'].toLowerCase()) : '')
                ) &&
                quadrant.toLowerCase().includes(query['quadrant'].toLowerCase()) &&
                level.toLowerCase().startsWith(query['level'].toLowerCase()) &&
                status.toLowerCase().includes(query['status'].toLowerCase()) &&
                area.toLowerCase().includes(query['area'].toLowerCase())
                // (subtitle !== null ? subtitle.toLowerCase().includes(query.toLowerCase()) : '') ||
                // (teaser !== null ? teaser.toLowerCase().includes(query.toLowerCase()) : '') ||
                // (bodytext !== null ? bodytext.toLowerCase().includes(query.toLowerCase()) : '')
            )
        })

        setState({
            query,
            filteredData,
        })

    }
    let {filteredData, query} = state
    const hasSearchResults = filteredData && (query !== emptyQuery)
    const allRadarItems = data.allCockpitTechradar.edges
    const radarItems = hasSearchResults ? filteredData : allRadarItems

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={data.cockpitTechseiten.seotitle.value} description={data.cockpitTechseiten.seodescription.value} />
            <IntroSection>
                <Intro additionalClass={'text-center mx-auto lg:max-w-4xl'} data={technologyPage}/>
            </IntroSection>
            <ItemSection sectionClass={'bg-white border-b border-t border-gray-200 dark:bg-blue-980'}>
                <Quadrantlisting quadranten={data.allCockpitQuadrant.edges}/>
            </ItemSection>
            <ItemSection sectionClass={'bg-gray-200 dark:bg-blue-950 border-b'}>
                <div className="technology-filter">
                    <Filter placeholder={'Technologie suchen ...'} onChange={handleInputChange}
                            quadrants={data.allCockpitQuadrant.edges} wrapperClass={'snippet'}/>
                </div>
            </ItemSection>
            <ItemSection sectionClass={'bg-white dark:bg-blue-970 lg:py-10'}>
                <div className="technology-radar">
                    {hasSearchResults && filteredData.length === 0 &&
                        <div><strong className="dark:text-white">Es wurden leider keine passenden Radareinträge gefunden.</strong></div>
                    }
                    <RadarListing radaritems={radarItems} allQuadrants={data.allCockpitQuadrant.edges} />
                </div>
            </ItemSection>
            <MainContent data={technologyPage} sectionClasses={'bg-gray-100 dark:bg-gray-900 lg:py-6'} />
        </Layout>
    )
}

export default Technologien
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allCockpitTechradar(filter: {lang: {eq: "default"}}, sort: {fields: title___value, order: ASC}) {
            edges {
                node {
                    title {
                        value
                        slug
                    }
                    subtitle {
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
                    bodytext {
                        value {
                            childMarkdownRemark {
                                html
                            }
                        }
                    }
                    bodytext2 {
                        value {
                            childMarkdownRemark {
                                html
                            }
                        }
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
                
                }
            }
        }
        allCockpitQuadrant(filter: {lang: {eq: "default"}},sort: {fields: title___value, order: ASC}) {
            edges {
                node {
                    id
                    Identifier {
                        value
                    }
                    title {
                        value
                        slug
                    }
                    icon {
                        value
                    }
                    teaser {
                        value {
                            childMarkdownRemark {
                                html
                            }
                        }
                    }
                }
            }
        }
        cockpitTechseiten(id: {eq: "Cockpit__Techseiten__608dd046d978a53b9c6455c3_default"}, lang: {eq: "default"}) {
            id
            title {
                value
                slug
            }
            subtitle {
                value
            }
            seotitle {
                value
            }
            seodescription {
                value
            }
            pinnwandtitle {
                value
            }
            pinnwandsubtitle {
                value
            }
            teaser {
                value
            }
            markdowntext {
                value {
                    childMarkdownRemark {
                        html
                    }
                }
            }
           
            sidbartitle {
                value
            }
            sidebartext {
                value
            }
            sidebarimage {
                value {
                    url
                    childImageSharp {
                        fluid (
                            maxWidth: 700,
                            maxHeight: 400,
                            quality: 90,
                            jpegProgressive: true,
                            webpQuality: 90,
                            jpegQuality: 90
                        ) {
                            ...GatsbyImageSharpFluid_withWebp
                            ...GatsbyImageSharpFluidLimitPresentationSize
                        }
                    }
                }
            }
            heroimage {
                value {
                    url
                    childImageSharp {
                        fluid (
                            maxWidth: 3400,
                            quality: 90,
                            jpegProgressive: true,
                            webpQuality: 90,
                            jpegQuality: 90
                        ) {
                            ...GatsbyImageSharpFluid_withWebp
                            ...GatsbyImageSharpFluidLimitPresentationSize
                        }
                    }
                }
            }
        }
    }
`