import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../utils/linkResolver"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const {
      data: { prismic },
    } = this.props
    console.log(prismic)

    const homepageData = prismic.allHomepages.edges[0].node
    const siteTitle = homepageData.title
    const subTitle = homepageData.subtitle

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <h1>{RichText.render(siteTitle)}</h1>
        <h2>{RichText.render(subTitle)}</h2>
        <section>
          <h3>
            {RichText.render(homepageData.body[0].primary.title_of_section)}
          </h3>
          {homepageData.body[0].fields.map(link => {
            return (
              <Link to={linkResolver(link.articles_to_link._meta)}>
                {RichText.render(link.articles_to_link.title)}
              </Link>
            )
          })}
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const query = graphql`
  query {
    prismic {
      allHomepages {
        edges {
          node {
            title
            subtitle
            body {
              ... on PRISMIC_HomepageBodyList_of_articles {
                primary {
                  title_of_section
                }
                fields {
                  articles_to_link {
                    ... on PRISMIC_Article {
                      _meta {
                        uid
                        type
                      }
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
