import React, {useState} from "react"
import {graphql, Link, PageProps} from "gatsby"
import Layout from "../components/layout"
import IntroSection from "../components/Layouts/IntroSection"
import ItemSection from "../components/Layouts/ItemSection"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Hero from "../components/hero"
import MainContent from "../components/maincontent"

type Data = {
    site: {
        siteMetadata: {
            title: string
        }
    }
}

const Index = ({data}: PageProps<Data>) => {
    return (
        <Layout>
            <SEO title={data.cockpitTechseiten.seotitle.value} description={data.cockpitTechseiten.seodescription.value} />
            <IntroSection additionalClass={'dark:bg-yellow-400'}>
                <Hero data={data.cockpitTechseiten.heroimage} heroHeight={500} />
                <Intro additionalClass={'text-center mx-auto lg:py-4'} noHero={true} overrideSectionClass={'bg-white dark:bg-blue-980'} data={data.cockpitTechseiten} />
            </IntroSection>
            <MainContent data={data.cockpitTechseiten} sectionClasses={'bg-gray-100 lg:bg-gray-200 dark:bg-gray-900'} />
        </Layout>
    )
}

export default Index
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        cockpitTechseiten(id: {eq: "Cockpit__Techseiten__608dcfb5ec5e9357184e73e1_default"}, lang: {eq: "default"}) {
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
                            maxWidth: 1000,
                            maxHeight: 400,
                            quality: 85,
                            jpegProgressive: true,
                            webpQuality: 85,
                            jpegQuality: 85
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
                            maxWidth: 2400,
                            quality: 70,
                            jpegProgressive: true,
                            webpQuality: 65,
                            jpegQuality: 65
                        ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`