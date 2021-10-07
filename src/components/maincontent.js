import React from "react"
import Img from "gatsby-image";
import Testcontent from "../components/testcontent"
import {Link} from "gatsby"
import AdditionalNavigation from "./additionalNavigation"
import ContentHelper from "../components/contentHelper"

const MainContent = ({data, sidebarNavigation, testcontent, contentid, additionalClass, wrapperBackground, sectionClasses}) => {
    const internalcontent = testcontent ? testcontent : false
    const wrapperBG = wrapperBackground ? wrapperBackground : 'bg-gray-50 dark:bg-gray-900 '
    const additionalSectionClasses = sectionClasses ? sectionClasses : wrapperBG
    return (
        <React.Fragment>
            {((data.bodytext || data.bodytextwrapper || data.markdowntext) || internalcontent !== false) &&
            <div className={"p-0 " + additionalSectionClasses + " dark:text-gray-200"}>
                <div className="max-w-7xl mx-auto lg:py-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
                        <div className="col-span-2">
                            <div className={'ce-bodytext main-content p-4 opacity-90' +
                            ((wrapperBackground === undefined && data.sidbartitle && data.sidebartext) ? ' lg:border' : '') +
                            ((wrapperBackground !== undefined) ? ' lg:border' : '') +
                            ((wrapperBackground === undefined && data.sidbartitle && data.sidebartext) || (data.sidbartitle && data.sidebartext) ? ' lg:bg-white dark:bg-transparent p-4' : ' lg:p-0') +
                            (additionalClass ? ' ' + additionalClass : '')}>
                                {(internalcontent === true) &&
                                    <Testcontent contentid={contentid} />
                                }
                                {!(internalcontent === true) &&
                                    <React.Fragment>
                                        {data.bodytextwrapper &&
                                            <React.Fragment>
                                                {data.bodytextwrapper.value.parsed.map((component) => {
                                                    return (
                                                        <div className="typoniels-component">
                                                            <ContentHelper component={component} />
                                                        </div>
                                                    )
                                                })}
                                            </React.Fragment>
                                        }
                                        {data.bodytext &&
                                            <div className={'leading-7 text-lg'} dangerouslySetInnerHTML={{__html: data.bodytext.value}} />
                                        }
                                        {data.markdowntext &&
                                            <div className={'leading-7 text-lg'} dangerouslySetInnerHTML={{__html: data.markdowntext.value.childMarkdownRemark.html}} />
                                        }
                                    </React.Fragment>
                                }
                            </div>
                            {(sidebarNavigation && sidebarNavigation.length > 0) &&
                                <AdditionalNavigation sidebarNavigation={sidebarNavigation} />
                            }
                    </div>
                    {(data.sidbartitle && data.sidebartext) &&
                        <div className="sidebar">
                            <div className={"card bg-white dark:bg-transparent pb-0 sticky top-4" + (wrapperBackground === undefined ? ' lg:border' : '')}>
                                {data.sidebarimage &&
                                    <Img className={'image-sidebar mb-4 dark:filter dark:grayscale-50'} fluid={{...data.sidebarimage.value.childImageSharp.fluid, aspectRatio: 2.5}} alt={data.title.value} title={data.title.value} />
                                }
                                <div className="sidebar-content ce-bodytext main-content p-4 py-2">
                                    {data.sidbartitle &&
                                    <div className={'text-xl lg:text-2xl font-bold lg:font-semibold leading-7 text-blue-850 mb-3 dark:text-gray-100'} dangerouslySetInnerHTML={{__html: data.sidbartitle.value}} />
                                    }
                                    {data.sidebartext &&
                                    <div className={'text-gray-700 dark:text-gray-200 leading-7 text-lg'} dangerouslySetInnerHTML={{__html: data.sidebartext.value}}/>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            }
        </React.Fragment>
    )
}

export default MainContent