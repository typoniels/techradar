import React from "react"
import Img from "gatsby-image";

const Intro = ({ data, additionalClass, noHero, heroHeight, bgPosition, overrideSectionClass }) => {
  const hideHero = noHero ? noHero : false
  const heroPosition = bgPosition ? bgPosition : 'center'
  const heroMaxHeight = heroHeight ? heroHeight : 360
  const introClass = additionalClass ? ' ' + additionalClass : ''
  const sectionClass  = overrideSectionClass ? '' + overrideSectionClass : 'bg-white dark:bg-blue-980'
  const contentEditable = false
  return (
    <div className={sectionClass}>
        {(data.heroimage !== null && !hideHero) &&

            <div className="nl-blogpost-single_article-hero text-center mx-auto bg-red-600 relative">
                <Img className={'image-index mb-2'} style={{maxHeight: heroMaxHeight + 'px'}} fluid={data.heroimage.value.childImageSharp.fluid} alt={data.title.value} title={data.title.value} />
            </div>
        }
        <div className={"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between"}>
            <div className={"main-content-intro max-w-5xl" + introClass}>
                <div className={"mx-auto" + data.teaser ? ' mb-3' : ''}>
                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-700 dark:text-gray-100 -font mt-0 mb-0">{data.title.value}</h1>
                    {data.subtitle &&
                        <h2 className="text-3xl text-yellow-600 dark:text-gray-400" dangerouslySetInnerHTML={{__html: data.subtitle.value}} />
                    }
                </div>
                {data.teaser &&
                <div className="text-gray-700 dark:text-gray-300 text-xl leading-7">
                    <div contentEditable={contentEditable} dangerouslySetInnerHTML={{__html: data.teaser.value}}/>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Intro