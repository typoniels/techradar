import React from "react"
import Img from "gatsby-image";

const Hero = ({ data, heroHeight }) => {
  const heroMaxHeight = heroHeight ? heroHeight : 700
  return (
    <div className="nl-hero bg-white dark:bg-blue-980">
        {(data !== null) &&
            <Img className={'image-index'} imgStyle={{objectFit: "cover", objectPosition:"top"}} style={{maxHeight: heroMaxHeight + 'px'}} fluid={data.value.childImageSharp.fluid} />
        }
    </div>
  )
}

export default Hero