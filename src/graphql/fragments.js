import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    alternativeText
    url
  }
  fragment cover on Post {
    cover {
      data {
        id
        attributes {
          ...image
        }
      }
    }
  }
  fragment tag on Tag {
    displayName
    slug
  }
  fragment author on Author {
    displayName
    slug
  }
  fragment category on Category {
    displayName
    slug
  }
  fragment tags on Post {
    tags {
      data {
        id
        attributes {
          ...tag
        }
      }
    }
  }
  fragment authorPost on Post {
    author {
      data {
        id
        attributes {
          ...author
        }
      }
    }
  }
  fragment categories on Post {
    categories {
      data {
        id
        attributes {
          ...category
        }
      }
    }
  }
  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }
  fragment post on Post {
    slug
    title
    excerpt
    content
    createdAt
    allowComments
    ...cover
    ...categories
    ...tags
    ...authorPost
  }

  fragment settings on Setting {
    blogName
    blogDescription
    logo {
      data {
        id
        attributes {
          ...image
        }
      }
    }
    menuLink {
      ...menuLink
    }
    text
  }
`;
