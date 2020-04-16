import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../utils/linkResolver"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const {
      data: { prismic },
    } = this.props

    const homepageData = prismic.allHomepages.edges[0].node
    const siteTitle = homepageData.title
    const subTitle = homepageData.subtitle

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <h1 className="font-bold text-xl mb-3">{RichText.render(siteTitle)}</h1>
        <h2 className="font-sans">{RichText.render(subTitle)}</h2>
        <section className="mt-4">
          <h3 className="mb-2">
            {RichText.render(homepageData.body[0].primary.title_of_section)}
          </h3>
          {homepageData.body[0].fields.map((link, i) => {
            return (
              <div className="flex flex-row items-center">
                <span className="mr-2">{`${i + 1}.`}</span>
                <Link to={linkResolver(link.articles_to_link._meta)}>
                  {RichText.asText(link.articles_to_link.title)}
                </Link>
              </div>
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
