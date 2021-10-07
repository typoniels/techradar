import React from "react"
import {graphql, PageProps, Link} from "gatsby"
import Layout from "../components/layout"
import IntroSection from "../components/Layouts/IntroSection"
import SEO from "../components/seo"
import Intro from "../components/intro"
import MainContent from "../components/maincontent"

type Data = {
    site: {
        siteMetadata: {
            title: string
        }
    }
}

const Impressum = ({data}: PageProps<Data>) => {
    return (
        <Layout>
            <SEO title={data.cockpitTechseiten.title.value} description="Here you will find all relevant information about the operator of this website." />
            <IntroSection>
                <Intro data={data.cockpitTechseiten} noHero={true} />
                <MainContent data={data.cockpitTechseiten} />
            </IntroSection>
        </Layout>
    )
}

export default Impressum
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        cockpitTechseiten(id: {eq: "Cockpit__Techseiten__608dd5eb37636970a9039dd1_default"}, lang: {eq: "default"}) {
            bodytext {
                value
            }
            title {
                value
                slug
            }
            heroimage {
                value {
                    url
                    childImageSharp {
                        fluid (
                            maxWidth: 1180,
                            quality: 90,
                            jpegProgressive: true,
                            webpQuality: 90,
                            jpegQuality: 90
                        ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            sidebarimage {
                value {
                    url
                }
            }
            sidbartitle {
                value
            }
            sidebartext {
                value
            }
            id
        }
    }
`
