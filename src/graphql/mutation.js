import gql from "graphql-tag";

export const ADD_PROJECT = gql`
  mutation addProject(
    $title: String!
    $description: String!
    $userId: ID!
  ) {
    addProject(title: $title, description: $description, userId: $userId) {
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

export const ADD_NOTIFICATION = gql`
  mutation addNotification(
    $title: String
    $userId: String
  ) {
    addNotification(title: $title, userId: $userId) {
      title
    }
  }
`;

