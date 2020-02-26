import gql from "graphql-tag";

export const getProjects = gql`
  query projects{
        id
        description
  }
`;