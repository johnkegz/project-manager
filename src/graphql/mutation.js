import gql from "graphql-tag";

export const ADD_PROJECT = gql`
  mutation addProject(
    $title: String!
    $description: String!
    $userId: ID!
  ) {
    addProject(title: $title, description: $description, userId: $userId) {
      title
      description
      userId
    }
  }
`;
