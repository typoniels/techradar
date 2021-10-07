import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import IntroSection from "../components/Layouts/IntroSection"
import SEO from "../components/seo"
import Intro from "../components/intro"
import MainContent from "../components/maincontent"

const NotFoundPage = ({ data }) => {
  return (
      <Layout>
        <SEO title={data.cockpitTechseiten.title.value} description={data.cockpitTechseiten.seodescription.value} />
        <IntroSection>
          <Intro data={data.cockpitTechseiten} heroHeight={'460'} />
        </IntroSection>
        <MainContent data={data.cockpitTechseiten} additionalClass={''} />
        <div className="p-3 bg-gray-100 dark:bg-blue-980 dark:text-gray-200">
          <div className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
            <div className="py-3">
              <h3 className="text-2xl text-blue-900 dark:text-gray-200 font-semibold">Wo geht ihre Reise weiter?</h3>
              <div className={'flex flex-wrap gap-3'}>
                <a href={'/'} className={'inline-flex items-center justify-center px-5 py-3 text-base font-medium shadow shadow-xl text-gray-100 bg-gray-600 hover:bg-yellow-700 dark:bg-gray-700 dark:hover:bg-gray-800 hover:text-gray-50'}>
                  Startseite <i className="pl-2 fas fa-robot"></i>
                </a>
                <a href={'/technologien'} className={'inline-flex items-center justify-center px-5 py-3 text-base font-medium shadow shadow-xl text-gray-100 bg-gray-600 hover:bg-yellow-700 dark:bg-gray-700 dark:hover:bg-gray-800 hover:text-gray-50'}>
                  Technologien <i className="pl-2 fas fa-tachometer-alt"></i>
                </a>
                <a href={'/lernplan'} className={'inline-flex items-center justify-center px-5 py-3 text-base font-medium shadow shadow-xl text-gray-100 bg-gray-600 hover:bg-yellow-700 dark:bg-gray-700 dark:hover:bg-gray-800 hover:text-gray-50'}>
                  Lernplan <i className="pl-2 fas fa-graduation-cap"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    cockpitTechseiten(id: {eq: "Cockpit__Techseiten__608dd67137636970a9039dd5_default"}, lang: {eq: "default"}) {
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
      bodytext {
        value
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