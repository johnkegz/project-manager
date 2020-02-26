import gql from "graphql-tag";

export const GET_PROJECTS = gql`
  {
    projects {
      id
      title
      description
      createdAt
      user {
        firstName
        lastName
      }
    }
  }
`;
