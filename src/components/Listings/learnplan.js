import React from "react"
import {Link} from "gatsby";
import Img from "gatsby-image";

const Learnplanlisting = ({ learnplan }) => {
    const fallbackText = "Für diese Lernplan-Technologie wurde leider noch kein Einleitungstext hinterlegt, schauen Sie einfach später nochmal vorbei."
    return (
        <div className="projekt-listing bg-transparent grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {learnplan.map((item, itr) => {
                return (
                  <Link key={item.node.id} className="niels-langlotz-projektlink h-auto" to={'/lernplan/' + item.node.title.slug}>
                      <div className="group bg-white shadow hover:bg-gray-700 dark:bg-blue-850 dark:hover:bg-blue-950">
                            <div className={'pb-3'}>
                                {item.node.media &&
                                    <div className="blog-listing-item_media dark:filter dark:grayscale-50">
                                        <Img fluid={{...item.node.media.value.childImageSharp.fluid, aspectRatio: 2.5}} alt={item.node.title.value} />
                                    </div>
                                }
                                {item.node.title &&
                                <div className="group-hover:bg-gray-700 dark:group-hover:bg-blue-950 dark:bg-blue-850 px-4 py-4 border-b border-gray-200 group-hover:border-white">
                                    <h4 className="text-xl align-center font-semibold items-center text-gray-900 dark:text-gray-200 group-hover:text-white flex border-bottom">
                                        <span>
                                            {item.node.slugadditional &&
                                                <span>{item.node.slugadditional.value}: </span>
                                            }
                                            {item.node.title.value}
                                        </span>
                                    </h4>
                                </div>
                                }
                                {item.node.teaser &&
                                <div className="overflow-hidden">
                                    <p className="mb-0 text-gray-500 dark:text-gray-300 group-hover:text-white leading-7 text-lg p-4 box clamp-3 sm:clamp-3 md:clamp-3 pb-0 orient-vertical overflow-hidden">{item.node.teaser.value}</p>
                                    </div>
                                }
                                {!item.node.teaser &&
                                <div className="overflow-hidden">
                                    <p className="mb-0 text-gray-500 dark:text-gray-300 group-hover:text-white leading-7 text-lg p-4 box clamp-3 sm:clamp-3 md:clamp-3 pb-0 orient-vertical overflow-hidden">{fallbackText}</p>
                                </div>
                                }
                            </div>
                            {item.node.tags &&
                            <div className={'border-t pt-1'}>
                                <div className="flex flex-wrap p-4 pt-0 opacity-60">
                                    {item.node.tags.value.map((tag,i) => {
                                        if (i < 5) {
                                            return (
                                                <div
                                                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-600 px-3 py-2 mr-1 mt-2 font-normal text-xs">
                                                    <i className="fa fa-tags"></i> {tag}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            }
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Learnplanlisting