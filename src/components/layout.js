import React from "react"
import Footer from "./footer"
import CTA from "./cta"
import Navigation from "./navigation";
// import Loader from "./loader";

const Layout = ({styleclass, children}) => {
    let cssClass = styleclass ? styleclass : '';
    return (
        <div className={'layout'}>
            {/*<Loader />*/}
            <Navigation />
            <main className={"stage " + cssClass}>
                {children}
            </main>
            <CTA />
            <Footer/>
        </div>
    )
}

export default Layout