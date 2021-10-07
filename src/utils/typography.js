import Typography from "typography"

Typography.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Typography.googleFonts
const typography = new Typography(Typography)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  // typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale