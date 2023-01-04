import remarkGfm from 'remark-gfm';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const config = {
  siteMetadata: {
    description: 'A low-level, lightweight and modern CSS design system, authoring tool built on Sass. Give your project a solid foundation.',
    github: 'conedevelopment',
    version: '1.2.0',
    siteUrl: 'https://sprucecss.com',
    slogan: [
      '🎉 Another CSS Framework',
      '😳 Yesterday I liked it',
      '🤨 It could be worse, I think',
      '👔 It is far from elegant'
    ],
    title: 'Spruce CSS',
    twitter: 'conedevelopment'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `./src/docs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `./src/blog`
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `component`,
        remote: `https://adamlaki:${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/conedevelopment/spruceui`,
        branch: `main`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
  ],
};

export default config;
