import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// import Navbar from './navbar'
import Navbar2 from './navbar2'
// import Footer from './footer'

const Layout = ({ children, pageInfo }) => (
    <>
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={() => (
                <div className="layout">
                    {/* <Navbar pageInfo={pageInfo} />
                     */}
                    <Navbar2 />
                    <main>{children}</main>
                    {/* <Footer /> */}
                </div>
            )}
        />
    </>
)

export default Layout
