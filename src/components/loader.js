import React from "react"

const Loader = () => {
    return (
        <div className="w-full h-full fixed block top-0 left-0 bg-gray-900 opacity-80 z-50"><span
            className="text-white top-1/2 my-0 mx-auto block relative w-0 h-0" style={{top: '50%'}}><i
            className="fas fa-circle-notch fa-spin fa-5x"/></span></div>
    )
}

export default Loader
