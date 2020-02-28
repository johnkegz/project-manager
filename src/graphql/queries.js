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

export const GET_NOTIFICATIONS = gql`
  {
    notifications {
      id
      title
      user {
        firstName
        lastName
      }
      createdAt
    }
  }
`;
