import Typography from "typography"
import StAnnes from "typography-theme-st-annes"

StAnnes.overrideThemeStyles = ({ rhythm }, options) => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h2,h3,h4,h5": {
      fontFamily: "Source Sans Pro",
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(2),
    },
  }
}

delete StAnnes.googleFonts

const typography = new Typography(StAnnes)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
