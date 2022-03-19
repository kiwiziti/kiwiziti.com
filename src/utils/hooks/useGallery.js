import { graphql, useStaticQuery } from "gatsby";

export const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "photos" }
        }
      ) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, formats: [JPG, WEBP, AVIF])
          }
        }
      }
    }
  `);
  return data.allFile.nodes.map((node) => ({
    ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
    id: node.id,
    name: node.name,
  }));
};
