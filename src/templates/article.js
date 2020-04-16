import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allArticles(uid: $uid) {
        edges {
          node {
            title
            subtitle
          }
        }
      }
    }
  }
`

const ArticleTemplate = props => {
  const doc = props.data.prismic.allArticles.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <Layout>
      <SEO title={doc.node.title} />

      <h1 className="text-3xl font-bold">{RichText.render(doc.node.title)}</h1>
      <h3 className="mt-4 text-xl font-light">
        {RichText.render(doc.node.subtitle)}
      </h3>
    </Layout>
  )
}

export default ArticleTemplate
