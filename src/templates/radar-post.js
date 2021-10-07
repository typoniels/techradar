import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import UnderWork from "../article-on-work"

const RadarPostTemplate = ({data, pageContext, location}) => {
    const post = data.cockpitTechradar
    const {previous, next} = pageContext
    const description = post.teaser ? post.teaser.value : post.title.value
    const quadrantitemLink = '/technologien/' + pageContext.quadrantslug

    const LevelStars = ({level}) => {
        let Options = {
            'Beginner': 1,
            'Intermediate': 2,
            'Advanced': 3,
            'Very Advanced': 4,
            'Expert': 5
        };
        let html = ''
        let star = '<i class="fas fa-star fa-2x text-green-600 hover:scale-125 transition duration-500 ease-in-out transform"></i>'
        for (let i = 0; i < Options[level]; i++) {
            html += star
        }
        let instar = '<i class="fas fa-star fa-2x text-gray-300"></i>'
        for (let i = 0; i < (Object.keys(Options).length - Options[level]); i++) {
            html += instar
        }
        return (
            <div className="dark:text-gray-300">
                <div className="text-xl font-bold mb-3 dark:text-white">Mein Level</div>
                <div className="gap-3 flex">
                    <div dangerouslySetInnerHTML={{__html: html}} />
                </div>
            </div>
        )
    }

    const LevelStatus = ({status}) => {
        let Levels = {
            'Adopt': {label: 'Wissensaufbau', class: 'bg-yellow-200', icon: 'fa-flask'},
            'Trial': {label: 'Praxis-Evaluierung', class: 'bg-indigo-200', icon: 'fa-broom'},
            'Assess': {label: 'Projekt-Integration', class: 'bg-blue-100', icon: 'fas fa-magic'},
            'Hold': {label: 'Im Prozess etabliert', class: 'bg-green-600 text-white', icon: 'fa-check-circle'}
        }
        return (
            <div className="">
                <div className="text-xl font-bold mb-3 dark:text-white">Mein Status</div>
                <div className={'inline-block text-lg px-5 py-3' + ' ' + Levels[status]['class']}>
                    <i className={'pr-1 fa ' + Levels[status]['icon']}></i> {/* <span className={'uppercase'}>{status}:</span> */}{Levels[status]['label']}
                </div>
            </div>
        )
    }




    return (
        <Layout location={location} title={post.title.value} styleclass={'blog-post-stage'}>
            <SEO title={post.title.value} description={description}/>
            <div className={"niels-langlotz-blogpost"}>
                <article className="niels-langlotz-blogpost_article">
                    <div className="nl-blogpost-single_article-content">
                        {post.media && (
                            <div className="nl-blogpost-single_article-hero text-center mx-auto bg-red-600 relative" style={post.mediabgcolor ? { backgroundColor: post.mediabgcolor.value} : { backgroundColor: 'transparent'}}>
                                <Img className={'image-index blog-article-hero mx-auto'} fluid={post.media.value.childImageSharp.fluid} style={{maxHeight: '500px', maxWidth: '1400px'}} />
                            </div>
                        )}



                        <div className="bg-white dark:bg-gray-900">
                            <div className="container content m-auto p-3">
                                <div className="max-w-4xl mx-auto">
                                    <header className={"text-center py-5" + (post.teaser ? '' : ' pb-0')}>
                                        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-100 -font mt-0 mb-0 uppercase"
                                            style={{marginTop: ".5rem", marginBottom: 0}}>
                                            {post.title.value}
                                        </h1>
                                        {post.subtitle &&
                                        <h2 className="text-3xl text-gray-900 dark:text-gray-500 opacity-75">{post.subtitle.value}</h2>
                                        }
                                    </header>
                                    {post.teaser &&
                                        <div className="pb-3 text-xl tracking-wide subpixel-antialiased font-light leading-8 text-gray-500 dark:text-gray-400" style={{hyphens: "auto"}}>
                                            {post.teaser.value}
                                        </div>
                                    }
                                    {post.tags &&
                                    <div className="flex mb-5 justify-center flex-wrap">
                                        {post.tags.value.map((tag) => {
                                            return (
                                                <div
                                                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-600 px-3 py-2 mr-1 mt-2 font-normal text-xs">
                                                    <i className="fa fa-tags"></i> {tag}</div>
                                            )
                                        })}
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="nl-blogpost-single_article-postbody-two bg-gray-100 bg-gradient-to-l dark:from-gray-800 dark:to-blue-980 p-4 py-5">
                            <div className="container content m-auto p-3">
                                <div className="max-w-4xl mx-auto">
                                    <div className="grid justify-between items-center grid-cols-2 md:grid-cols-3 gap-3">
                                        <div className="quadrant 2xl:justify-self-start">
                                            <div className="text-xl font-bold mb-3 dark:text-white">Quadrant</div>
                                            <div className="gap-3 flex dark:text-gray-300">
                                                <i className="fas fa-th-large fa-2x"></i> <span className="text-2xl">{post.quadrant.value}</span>
                                            </div>
                                        </div>
                                        {post.level && (
                                            <div className="level 2xl:justify-self-center">
                                                <LevelStars level={post.level.value}  />
                                            </div>
                                        )}
                                        {post.status && (
                                            <div className="status 2xl:justify-self-end hidden md:block">
                                                <div className="max-w-4xl mx-auto">
                                                    <LevelStatus status={post.status.value} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*{(post.bodytext === undefined || post.bodytext === null) && (post.bodytext2 === undefined || post.bodytext2 === null) &&*/}
                        {/*    <UnderWork type={'radar'} />*/}
                        {/*}*/}
                        {post.bodytext && (
                            <div className="nl-blogpost-single_article-postbody-one bg-gray-50 dark:bg-blue-980 dark:text-white p-4 py-5">
                                <div className="container content m-auto p-3">
                                    <div className="max-w-4xl mx-auto">
                                        <div
                                            className="markdown-view text-lg text-gray-500"
                                            dangerouslySetInnerHTML={{
                                                __html: post.bodytext.value.childMarkdownRemark.html,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {post.bodytext2 && (
                            <div className="nl-blogpost-single_article-postbody-two bg-gray-100 bg-gradient-to-l dark:from-gray-800 dark:to-blue-980 p-4 py-5">
                                <div className="container content m-auto p-3">
                                    <div className="max-w-4xl mx-auto">
                                        <section
                                            className="markdown-view text-lg text-gray-500"
                                            dangerouslySetInnerHTML={{
                                                __html: post.bodytext2.value.childMarkdownRemark.html,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="bg-gray-200 dark:bg-gray-800">
                            <div className="content m-auto py-5">
                                <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 md:items-center md:justify-between">
                                    <div className="flex flex-col gap-2 sm:grid grid-cols-1 justify-between items-center">
                                        <div className={'text-center font-bold text-lg mb-2 dark:text-gray-100'}>Möchten Sie noch mehr erfahren?</div>
                                        <div className={''}>
                                            <div className="sm:justify-center align-center flex sm:text-center gap-4">
                                                <Link className={'bg-gray-400 py-3 px-3 block sm:inline-block btn-block border-0 d-block rounded-0 text-white hover:bg-gray-500 hover:text-white'} to={'/technologien'}>
                                                    Technologie-Übersicht <i className="pl-1 fas fa-rocket"></i>
                                                </Link>
                                                <Link className={'bg-gray-400 py-3 px-3 block sm:inline-block btn-block border-0 d-block rounded-0 text-white hover:bg-gray-500 hover:text-white'} to={'/technologien/' + pageContext.quadrantslug}>
                                                    Quadrant <i className="pl-1 fas fa-th-large"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={'col-12 col-sm-2'}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export default RadarPostTemplate

export const pageQuery = graphql`
    query RadarPostTemplate($postid: String!) {
        site {
            siteMetadata {
                title
            }
        }
        cockpitTechradar(id: { eq: $postid } ) {
            title {
                slug
                value
            }
            
            tags {
                value
            }
            quadrant {
                value
            }

            level {
                value
            }
            status {
                value
            }
            
            subtitle {
                value
            }
            teaser {
                value
            }
            bodytext {
                value {
                    childMarkdownRemark {
                        html
                    }
                }
            }

            bodytext2 {
                value {
                    childMarkdownRemark {
                        html
                    }
                }
            }
            
            mediabgcolor {
                value
            }
            media {
                value {
                    url
                    childImageSharp {
                        fluid (
                            maxWidth: 3400,
                            quality: 90,
                            jpegProgressive: true,
                            webpQuality: 90,
                            jpegQuality: 90
                        ) {
                            ...GatsbyImageSharpFluid_withWebp
                            ...GatsbyImageSharpFluidLimitPresentationSize
                        }
                    }
                }
            }
            id
        }
    }
`
