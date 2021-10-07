import React from "react"

const IntroSection = ({additionalClass, children}) => {
    const sectionClass = additionalClass ? ' ' + additionalClass : ''
    return (
        <div className={"intro-section" + sectionClass}>
            <div className="intro-wrapper">
                {children}
            </div>
        </div>
    )
}

export default IntroSection