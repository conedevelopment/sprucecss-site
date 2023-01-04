import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
}
