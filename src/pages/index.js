import * as React from "react"
import Layout from "../components/layout";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Services from "../components/services";
import About from "../components/about";
export default function IndexPage() {
    return (
        <Layout>
            <Banner/>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>
