import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import Navbar from './navbar'
import Footer from './footer'

import '../styles/_background.scss'

const Layout = ({ children, pageInfo }) => (
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
            <>
                <Container fluid className="px-0 main">
                    <Navbar pageInfo={pageInfo} />
                    <Row noGutters>
                        <Col>
                            <Container className="mt-5">
                                <main>{children}</main>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </>
        )}
    />
)

export default Layout
