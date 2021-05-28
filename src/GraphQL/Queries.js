import { useQuery, gql } from '@apollo/client';

export const LOAD_USER = gql`
query Search($user: String!){
    search(type: USER, query: $user, first: 1) {
      edges {
        node {
          ... on User {
            id
            avatarUrl(size: 250)
            bio
            name
            repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
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

/*
export function fetchLoadUser({user}){
  return useQuery(LOAD_USER, {
    variables: { user },
  });
}
*/