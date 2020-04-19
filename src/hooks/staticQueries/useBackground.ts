import { useStaticQuery, graphql } from 'gatsby';
import { BackgroundQuery } from '../../types/types.generated';

export const useBackground = () => {
    const result = useStaticQuery<BackgroundQuery>(graphql`
        query background {
            allFile(filter: { extension: { eq: "jpg" } }) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid(fit: CONTAIN) {
                                aspectRatio
                                base64
                                originalName
                                sizes
                                src
                                srcSet
                            }
                        }
                    }
                }
            }
        }
    `);

    return {
        backgrounds: result.allFile.edges,
    };
};
