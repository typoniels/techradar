import React from "react"
import {Link} from "gatsby";
import Img from "gatsby-image";
import ItemSection from "../Layouts/ItemSection";

const Quadrantlisting = ({ quadranten, location, headline, subheadline }) => {
    return (
        <div className="projekt-listing bg-transparent">

            <div className="max-w-7xl mx-auto text-center py-4 px-3 mb-4">
                <h3 className="text-4xl font-bold mb-2 text-gray-1100 dark:text-gray-50">{headline !== undefined ? headline : 'Welcher Quadrant interessiert Sie?'}</h3>
                <h4 className="text-2xl font-light text-gray-900 dark:text-gray-300">{subheadline !== undefined ? subheadline : 'Sehen Sie sich Technologien direkt aus dem gewünschten Bereich an'}</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-6 rounded overflow-hidden">
                {quadranten.map((item, itr) => {
                    return (
                        <ItemSection sectionClass={'bg-gray-50 bg-gray-' + (itr+1) + '00 dark:bg-' + ' dark:bg-gray-' + (-itr+9) + '00'}>
                            <Link key={item.node.id} className="niels-langlotz-projektlink h-auto" to={'/technologien/' + (item.node.slugadditional ? item.node.title.slug + '-' + item.node.slugadditional.slug : item.node.title.slug)}>
                                <div className="">

                                    <div className="group col-span-2">
                                        {item.node.icon &&
                                        <div className="flex flex-wrap justify-center">
                                            <i className={item.node.icon.value + ' fa-3x text-gray-500 dark:group-hover:text-gray-200 group-hover:text-black border-2 rounded border-gray-600 p-3'}></i>
                                        </div>
                                        }
                                        <div className={'pb-3'}>
                                            {item.node.title &&
                                            <div className="px-4 py-4 pb-0 border-gray-200">
                                                <h4 className="text-4xl align-center text-center justify-center mb-0 font-semibold items-center text-gray-900 dark:text-gray-200 flex border-bottom">
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
                                                <div className="mb-0 text-gray-500 group-hover:text-black dark:group-hover:text-white leading-8 text-lg p-4 box clamp-4 sm:clamp-4 md:clamp-3 pb-0 orient-vertical overflow-hidden text-xl p-4" dangerouslySetInnerHTML={{__html: item.node.teaser.value.childMarkdownRemark.html}} />
                                            </div>
                                            }
                                            {/*{!item.node.teaser &&*/}
                                            {/*<div className="overflow-hidden">*/}
                                            {/*    <p className="mb-0 text-gray-500 group-hover:text-black dark:group-hover:text-white leading-7 text-lg p-4 box clamp-3 sm:clamp-3 md:clamp-3 pb-0 orient-vertical overflow-hidden">Im Quadrant-Datensatz "{item.node.title.value}" wurde leider kein Teaser hinterlegt. Klicken Sie auf die Überschrift um auf die Detail-Seite zu kommen.</p>*/}
                                            {/*</div>*/}
                                            {/*}*/}
                                        </div>
                                        {item.node.tags &&
                                        <div className={'border-t pt-1'}>
                                            <div className="flex flex-wrap p-4 pt-0 opacity-60">
                                                {item.node.tags.value.map((tag,i) => {
                                                    if (i < 5) {
                                                        return (
                                                            <div
                                                                className="bg-gray-100 dark:bg-gray-300 dark:text-gray-300 text-gray-600 px-3 py-2 mr-1 mt-2 font-normal text-xs">
                                                                <i className="fa fa-tags"></i> {tag}
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </Link>
                        </ItemSection>
                    )
                })}
            </div>
        </div>
    )
}

export default Quadrantlisting