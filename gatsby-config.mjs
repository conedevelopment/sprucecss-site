import remarkGfm from 'remark-gfm';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const config = {
  siteMetadata: {
    description: 'A low-level, lightweight and modern CSS design system, authoring tool built on Sass. Give your project a solid foundation.',
    github: 'conedevelopment',
    version: '2.0.0',
    siteUrl: 'https://sprucecss.com',
    title: 'Spruce CSS',
    twitter: 'conedevelopment',
    analyticsID: process.env.ANALYTICS_ID
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: './src/docs'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: './src/blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'template',
        path: './src/template'
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-git',
      options: {
        name: 'component',
        remote: `https://adamlaki:${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/conedevelopment/spruceui`,
        branch: 'main'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ],
  partytownProxiedURLs: [`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`]
};

export default config;
