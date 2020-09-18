import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <Link to="/contact/">Contact</Link>
      <Header headerText={data.site.siteMetadata.title} />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
