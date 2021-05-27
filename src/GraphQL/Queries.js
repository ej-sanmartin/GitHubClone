import { gql } from '@apollo/client';

export let LOAD_USER = gql`
{
    search(type: USER, query: "ej-sanmartin", first: 1) {
      edges {
        node {
          ... on User {
            id
            avatarUrl(size: 250)
            bio
            name
            repositories(last: 20, orderBy: {field: CREATED_AT, direction: ASC}) {
              edges {
                node {
                  description
                  forkCount
                  id
                  name
                  primaryLanguage {
                    color
                    id
                    name
                  }
                  url
                  stargazerCount
                  updatedAt
                }
              }
              totalCount
            }
          }
        }
      }
    }
  }
`;