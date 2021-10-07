import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

/**
 * Panel for unfinished Content-Types (blogpost/project)
 * @param data
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */
const CTA = ({ data }) => (
        <div className="bg-yellow-600 dark:bg-blue-980">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-12 md:px-8 md:flex md:items-center md:justify-between">
                <h2 className="text-3xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-gray-50">{data.cockpitNlCta.Title.value}</span>
                    <span className="block text-gray-100 opacity-70 text-2xl font-medium">{data.cockpitNlCta.Subtitle.value}</span>
                </h2>
                <div className="mt-8 flex md:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md">
                        <Link to={data.cockpitNlCta.Link.value} target={'_blank'}
                              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium shadow shadow-2xl text-gray-800 bg-white dark:bg-gray-400 dark:hover:bg-gray-800 hover:bg-yellow-800 hover:text-gray-50">
                            <i className="fa fa-paper-plane pr-2" /> {data.cockpitNlCta.Linklabel.value}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
)

export default function CTAData(props) {
    return (
        <StaticQuery
            query={graphql`
        query {
          cockpitNlCta {
            Title {
              value
            }
            Subtitle {
              value
            }
            Linklabel {
              value
            }
            Link {
              value
            }
          }
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
            render={data => <CTA data={data} {...props} />}
        />
    )
}

CTA.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
}