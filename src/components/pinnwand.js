import React from "react"

const Pinnwand = ({sitedata, pinnwanddata}) => {
    return (
        <div className="niels-langlotz-pinnwand">
            {(pinnwanddata.nodes.length > 0) &&
            <div className="pinnwand-listing">
                {sitedata.pinnwandtitle &&
                    <div className="pinnwand-header text-center text-gray-800 dark:text-white mb-8">
                        <h2 className="leading-7 font-semibold"><span className="border-b-2 inline-block mb-0.5 pb-2">{sitedata.pinnwandtitle.value}</span>
                            {sitedata.pinnwandsubtitle &&
                                <React.Fragment><br /><small className="font-normal opacity-50">{sitedata.pinnwandsubtitle.value}</small></React.Fragment>
                            }
                        </h2>
                    </div>
                }
                <div className="bg-transparent grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 opacity-90">
                    {pinnwanddata.nodes.map((item) => {
                        return (
                            <div className="p-4 lg:p-10 h-full flex items-center pinnwand-item"  style={{background: item.bgcolor.value}}>
                                <h4 className="text-xl lg:text-3xl lg:font-bold block text-center" style={{color: item.textcolor.value}}>„{item.title.value}”</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
            }
        </div>
    )
}

export default Pinnwand