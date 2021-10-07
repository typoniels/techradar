import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

/**
 * Panel for unfinished Content-Types (blogpost/project)
 * @param data
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */
const UnderWork = ({ data, type }) => (
    <React.Fragment>
        <div className="bg-gray-800 dark:bg-blue-980 align-middle justify-center flex items-center under-work">
            <div className={"p-0 dark:text-gray-200"}>
                <div className="max-w-3xl mx-auto lg:py-4 lg:px-8 lg:gap-4">
                    <div className="col-span-2">
                        <div className="bg-white dark:bg-blue-950 p-8 border-t-8 border-b-8 border-yellow-500 dark:border-yellow-400 text-center lg:my-12 rounded">
                            {type === 'lernplan' &&
                            <React.Fragment>
                                <div className="mb-6"><i className="text-yellow-500 fab fa-leanpub fa-8x"></i></div>
                                <h3 className="text-yellow-500 font-semibold">{data.cockpitWorkingLernplan.title.value}</h3>
                                <p>{data.cockpitWorkingLernplan.text.value}</p>
                            </React.Fragment>
                            }
                            {type === 'radar' &&
                            <React.Fragment>
                                <div className="mb-6"><i className="text-yellow-500 fas fa-dragon fa-8x"></i></div>
                                <h3 className="text-yellow-500 font-semibold">{data.cockpitWorkingLernplan.title.value}</h3>
                                <p>{data.cockpitWorkingLernplan.text.value}</p>
                            </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default function WorkData(props) {
    return (
        <StaticQuery
            query={graphql`
        query {
            cockpitWorkingLernplan {
                title {
                    value
                }
                text {
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
            render={data => <UnderWork data={data} {...props} />}
        />
    )
}

UnderWork.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
}