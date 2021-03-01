import React from 'react'

import BackgroundImage from 'gatsby-background-image'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import About from '../components/about'
import Booking from '../components/bookings'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'

// import SEO from '../components/seo'

const IndexPage = props => (
    <>
        <Layout pageInfo={{ pageName: 'index' }}>
            {/* <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} /> */}
            <BackgroundImage
                className="masthead u-margin-bottom-medium"
                fluid={props.data.indexImage.childImageSharp.fluid}
            >
                <div className="black-overlay">
                    <div className="content-box">
                        <h1> Connection Creates Community</h1>
                    </div>
                </div>
            </BackgroundImage>
            <About />
            <Booking />
            <Testimonial />
            <Contact />
        </Layout>
    </>
)

export default IndexPage

export const pageQuery = graphql`
    query {
        indexImage: file(relativePath: { eq: "bush.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
