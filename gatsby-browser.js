// custom typefaces
import "typeface-source-sans-pro"
import "typeface-source-serif-pro"

// TailwindCSS
// Read more on how to add other base styles https://tailwindcss.com/docs/adding-base-styles
// Extracting components https://tailwindcss.com/docs/extracting-components
// Or adding new utilities https://tailwindcss.com/docs/adding-new-utilities
import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

// Markdown formatting, uses Tailwind @apply primitive to apply Tailwind's utility classes to
// elements created by the Markdown parser
import "./src/markdown.css"

const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
const { linkResolver } = require("./src/utils/linkResolver")

registerLinkResolver(linkResolver)
