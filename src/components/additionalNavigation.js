import React from "react"
import {Link} from  "gatsby"
const AdditionalNavigation = ({sidebarNavigation}) => {
    return (
        <div className="border p-4 mt-4 bg-gray-50">
            <div className="navigation-header mb-3">
                <h4 className="font-semibold text-2xl text-blue-850 dark:text-gray-200">Even more on the topic</h4>
                <p className="text-lg">This information might also interest you ...</p>
            </div>
            <div className="additional-content-navigation flex flex-wrap lg:mt-0 sm:flex-shrink-0 gap-3">
                {sidebarNavigation.map((item) => {
                    return (
                        <div className="inline-flex rounded-md">
                            <Link to={item.link}
                                  rel={"noopener noreferrer"}
                                  className="inline-block bg-gray-200 dark:bg-blue-980 dark:hover:bg-blue-900 text-gray-900 dark:text-gray-50 font-semibold hover:bg-blue-850 hover:text-gray-50 p-3 rounded-0">
                                {item.label}
                            </Link>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default AdditionalNavigation