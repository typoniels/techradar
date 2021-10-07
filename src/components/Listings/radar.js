import React from "react"
import {Link} from "gatsby";
import Img from "gatsby-image";

const Radarlisting = ({ radaritems, quadrantpath, uninplementedItems,quadrantname, allQuadrants }) => {
    const fallbackText = "Für diese Technologie wurde leider noch kein Einleitungstext hinterlegt, schauen Sie einfach später nochmal vorbei."
    const quadrantprepath = quadrantpath ? quadrantpath : ''
    const quadrantName = quadrantname ? quadrantname : ''

    /*
    * Create path segment for quadrant
    */
    function createQuadrantPath (allQuadrants = null, quadrandName = null) {
        if(quadrantprepath !== '') {
            return quadrantprepath
        } else {
            if (null !== allQuadrants && null !==  quadrandName) {
                return createPathFromQuadrantObj(allQuadrants, quadrandName);
            }
        }
    }
    /*
    * Generate Path from Quadrant Object
    */
    function createPathFromQuadrantObj(object, value) {
        let active = 0;
        Object.keys(object).find(key => {
            if(object[key]['node']['Identifier']['value'] === value && active === 0) {
                active = object[key]['node'];
            }
        });
        return active['title']['slug']
    }
    return (
        <div className="projekt-listing bg-transparent grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {radaritems.map((item, itr) => {
                return (
                    <Link key={item.node.id} className="niels-langlotz-projektlink h-auto" to={createQuadrantPath(allQuadrants, item.node.quadrant.value) + '/' + (item.node.slugadditional ? item.node.title.slug + '-' + item.node.slugadditional.slug : item.node.title.slug)}>
                        <div className="group bg-white shadow hover:bg-gray-700 dark:bg-blue-850 dark:hover:bg-blue-950">
                            <div className={'pb-3'}>
                                {item.node.media &&
                                    <div className="blog-listing-item_media dark:filter dark:grayscale-50">
                                        <Img fluid={{...item.node.media.value.childImageSharp.fluid, aspectRatio: 3.5}} alt={item.node.title.value} />
                                    </div>
                                }
                                {item.node.title &&
                                <div className="group-hover:bg-gray-700 dark:group-hover:bg-blue-950 dark:bg-blue-850 px-4 py-4 border-b border-gray-200 group-hover:border-white">
                                    <h4 className="text-xl align-center font-semibold items-center text-gray-900 dark:text-gray-200 group-hover:text-white flex border-bottom">
                                    <span>
                                        {item.node.slugadditional &&
                                        <span>{item.node.slugadditional.value}: </span>
                                        }
                                        {item.node.title.value}</span>
                                        {item.node.icon &&
                                        <span className={'ml-auto text-secondary d-inline-block'}><i className={item.node.icon.value + ' fa-2x text-gray-600 dark:text-gray-300 opacity-50 group-hover:text-white box-border pl-3'}></i></span>
                                        }
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
                                                <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-600 px-3 py-2 mr-1 mt-2 font-normal text-xs">
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
            {uninplementedItems !== undefined && uninplementedItems !== null &&
                <div className="niels-langlotz-projektlink h-100">
                    <div className="group bg-gray-300 shadow dark:bg-blue-850 h-full">
                        <div className="dark:bg-blue-850 px-4 py-4 border-gray-200">
                            <h4 className="font-bold text-lg mb-2">Da ist noch vieles mehr ...</h4>
                            <p>Diese {quadrantName ?? quadrantName} sind zwar noch nicht im Techradar hinterlegt, in meiner Werkzeugkiste sind sie aber fest verankert.</p>
                            <div className="flex flex-wrap">
                                {uninplementedItems.map(tag => {
                                    return (
                                        <div className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-gray-600 px-3 py-2 mr-1 mt-2 font-normal text-xs">
                                            <i className="fa fa-tags"></i> {tag}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Radarlisting