import React from 'react';
import {graphql, StaticQuery} from 'gatsby';

const SiteInfo = () => (
    <StaticQuery query={`
    {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    />
);

export default SiteInfo;