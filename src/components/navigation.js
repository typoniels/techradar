import React, { useState } from 'react'
import {Link} from "gatsby"
import {ThemeToggler} from "gatsby-plugin-dark-mode";

const Navigation = () => {
    const [isExpanded, toggleExpansion] = useState(false)
    const NavLinks = [
        {label: 'Technologien', title: 'Übersicht von mir eingesetzer Technolgien', icon: '', link: '/technologien'},
        {label: 'Lernplan', title: 'Mit diesen Technologien beschäftig ich mich akutell intensiv', icon: '', link: '/lernplan'},
    ]
    return (
        <div className={'niels-langlotz-navigation md:sticky top-0'} style={{zIndex: 10}}>
            <nav className="bg-white dark:bg-gray-900 border-b dark:border-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link className="flex items-center group text-yellow-500 hover:text-yellow-600" to={'/'}>
                                    <span className="hover:text-yellow-600 inline-block text-xl dark:text-white font-bold leading-5"><span className="mb-0 text-black dark:text-white pb-0">TYPONiels</span><br /><span className="opacity-80">TechRadar</span></span>
                                    <span className={'hidden sm:inline-block'}>
                                        <i className={'fas fa-satellite-dish w-auto sm:h-10 ml-3 dark:text-white hover:text-yellow-600 group:hover:text-yellow-600 fa-3x -mt-2 '}></i>
                                    </span>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="lg:ml-20 sm:ml-3 flex items-baseline space-x-4 text-gray-600 dark:text-gray-300">
                                    {NavLinks.map((item) => {
                                        return (
                                            <Link className="hover:bg-yellow-600 dark:hover:bg-blue-900 hover:text-white px-2 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                                                  activeClassName="text-gray-50 bg-yellow-600 dark:bg-blue-900"
                                                  partiallyActive={true} to={item.link}
                                                  title={item.title ? item.title : ''}>{item.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex">
                            <ThemeToggler>
                                {({theme, toggleTheme}) => (
                                    <div className="darkmode-button ml-auto mr-2">
                                        <span className="sr-only">Change Mode</span>
                                        <input id={"darkmode"} type="checkbox" onChange={e => toggleTheme(e.target.checked ? "light" : "dark")} checked={theme === "light"} />
                                        <label className="estado" htmlFor={"darkmode"}><span className="tagmodus">Licht an</span><span className="nachtmodus">Licht aus</span></label>
                                    </div>
                                )}
                            </ThemeToggler>
                            <button onClick={() => toggleExpansion(!isExpanded)}
                                    className="md:hidden dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-gray-300 dark:focus:ring-white">
                                <span className="sr-only">Menü öffnen</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${ isExpanded ? `block md:hidden border-t border-b` : `hidden md:hidden` }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-gray-600 dark:text-gray-300">
                        {NavLinks.map((item) => {
                            return (
                                <Link className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                      activeClassName="bg-gray-900 text-white block"
                                      partiallyActive={true} to={item.link}
                                      title={item.title ? item.title : ''}>{item.label}</Link>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation