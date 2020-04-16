import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

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
    <div>
      <h1>{RichText.render(doc.node.title)}</h1>
      <h3>{RichText.render(doc.node.subtitle)}</h3>
    </div>
  )
}

export default ArticleTemplate
