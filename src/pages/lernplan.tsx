import React, {useState} from "react"
import {graphql, PageProps} from "gatsby"
import Layout from "../components/layout"
import IntroSection from "../components/Layouts/IntroSection"
import ItemSection from "../components/Layouts/ItemSection"
import Intro from "../components/intro"
import MainContent from "../components/maincontent"
import Filter from "../components/filter"
import SEO from "../components/seo"
import Learnplanlisting from "../components/Listings/learnplan"
import Quadrantlisting from "../components/Listings/quadrants"

type Data = {
    site: {
        siteMetadata: {
            title: string
        }
    }
}

const Lernplan = ({data, location}: PageProps<Data>) => {
    const siteTitle = data.site.siteMetadata.title;
    const technologyPage = data.cockpitTechseiten
    const filterFields = ['query']
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
        let alllernplanItems = data.allCockpitLeanplan.edges || []
        const filteredData = alllernplanItems.filter(post => {
            const title = post.node.title.value
            const subtitle = post.node.subtitle ? post.node.subtitle.value : null
            const teaser = post.node.teaser ? post.node.teaser.value : null
            const bodytext = post.node.bodytext ? post.node.bodytext.value.childMarkdownRemark.html : null
            const quadrant = post.node.quadrant ? post.node.quadrant.value : null
            const level = post.node.level ? post.node.level.value : null
            const status = post.node.status ? post.node.status.value : null
            const area = post.node.area ? post.node.area.value : null
            return (
                (
                    (title !== null ? title.toLowerCase().includes(query['query'].toLowerCase()) : '') ||
                    (teaser !== null ? teaser.toLowerCase().includes(query['query'].toLowerCase()) : '') ||
                    (bodytext !== null ? bodytext.toLowerCase().includes(query['query'].toLowerCase()) : '')
                )
                // quadrant.toLowerCase().includes(query['quadrant'].toLowerCase()) &&
                // level.toLowerCase().includes(query['level'].toLowerCase()) &&
                // status.toLowerCase().includes(query['status'].toLowerCase()) &&
                // area.toLowerCase().includes(query['area'].toLowerCase())
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
    const allLernplanItems = data.allCockpitLeanplan.edges
    const lernplanItems = hasSearchResults ? filteredData : allLernplanItems

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={data.cockpitTechseiten.seotitle.value}
                 description={data.cockpitTechseiten.seodescription.value}/>
            <IntroSection>
                <Intro additionalClass={'text-center mx-auto'} data={technologyPage}/>
            </IntroSection>
            <ItemSection sectionClass={'bg-gray-200 dark:bg-blue-850'}>
                <div className="technology-filter">
                    <Filter placeholder={'Lernplan durchsuchen ...'} label={'Welche Technologie interessiert Sie?'}
                            onChange={handleInputChange} wrapperClass={'snippet'} onlySearchField={true}/>
                </div>
            </ItemSection>
            <ItemSection sectionClass={'bg-gray-100 dark:bg-blue-960 lg:py-10'}>
                <div className="technology-lernplan">
                    {hasSearchResults && filteredData.length === 0 &&
                    <div><strong className="dark:text-white">Es wurden leider keine passenden Lernplan-Einträge
                        gefunden.</strong></div>
                    }
                    <Learnplanlisting learnplan={lernplanItems}/>
                </div>
            </ItemSection>
            <ItemSection sectionClass={'bg-white border-b border-t border-gray-200 dark:bg-blue-980'}>
                <Quadrantlisting quadranten={data.allCockpitQuadrant.edges}
                                 headline={'Mein ❤️ schlägt für freie Software'}
                                 subheadline={'Sehen Sie sich die von mir eingesetzen Technologien an'} />
            </ItemSection>
            <MainContent data={technologyPage} sectionClasses={'bg-white dark:bg-gray-900 lg:py-6'}/>
        </Layout>
    )
}

export default Lernplan
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        cockpitTechseiten(id: {eq: "Cockpit__Techseiten__608dd0addfc53b5a86723601_default"}, lang: {eq: "default"}) {
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
        allCockpitLeanplan(filter: {visible: {value: {eq: true}}, lang: {eq: "default"}}, sort: {fields: title___value, order: ASC}) {
            edges {
                node {
                    id
                    title {
                        value
                        slug
                    }
                    teaser {
                        value
                    }
                    media {
                        value {
                            url
                            childImageSharp {
                                fluid (
                                    maxWidth: 640,
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
                }
            }
        }
    }
`