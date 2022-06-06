import React from "react"
import {Link} from "gatsby"

const Footer = () => {
    const footerLinks = [
        {label: 'Impressum', icon: '', link: '/impressum'},
        {label: 'Datenschutz', icon: '', link: '/datenschutz'},
    ]
    const socialMediaLinks = [
        {icon: 'fas fa-globe-europe', link: 'https://www.niels-langlotz.com'},
        {icon: 'far fa-lightbulb', link: 'https://wissen.typoniels.de'},
        {icon: 'fab fa-gitlab', link: 'https://gitlab.typoniels.de/explore'},
        {icon: 'fab fa-github', link: 'https://github.com/typoniels'},
        {icon: 'fab fa-instagram', link: 'https://www.instagram.com/typoniels/'},
        {icon: 'fab fa-hackerrank', link: 'https://app.hackthebox.eu/profile/578640'}
    ]
    return (
        <footer className={"niels-langlotz-footer"}>
            <div className="bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 lg:flex lg:flex-row items-center justify-between">
                    <div className="law-links flex flex-wrap lg:mt-0 flex-shrink-0 justify-center lg:justify-start">
                        {footerLinks.map((item) => {
                            return (
                                <div className="inline-flex rounded-md mr-2">
                                    <Link to={item.link} target={"_blank"}
                                          className="inline-flex items-center justify-center px-3 py-3 font-medium rounded-md text-gray-600 dark:text-white hover:text-gray-900 hover:bg-indigo-50 dark:hover:bg-gray-800"
                                          activeClassName="text-gray-900 law-link-active dark:bg-gray-800"
                                          partiallyActive={true}>
                                        {item.icon &&
                                        <i className={item.icon + ' pr-2'}/>
                                        }{item.label}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="social-links flex flex-wrap lg:mt-0 sm:flex-shrink-0 justify-center lg:justify-end">
                        {socialMediaLinks.map((item) => {
                            return (
                                <div className="inline-flex rounded-md">
                                    <Link to={item.link} target={"_blank"}
                                          rel={"noopener noreferrer"}
                                          className="flex items-center justify-center px-3 md:px-3 py-4 lg:py-3 font-medium rounded-md text-gray-400 dark:text-white hover:text-gray-900 hover:bg-indigo-50 dark:hover:bg-gray-800">
                                        <i className={item.icon}/>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <hr class="hidden" />
            <div className="hidden">
                <span class="fas fa-check-double"></span>
                <span class="fas fa-fingerprint"></span>
            </div>
        </footer>
    )
}

export default Footer