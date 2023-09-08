const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Score {
    _id: ID!
    date: Int
    score: Int
    teammates: String
    userId: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    score: [Score]
  }
 
  input ScoreInput{
    _id: ID
    date: Int
    score: Int
    teammates: String
    userId: ID!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    logIn(email: String!, password: String!): Auth  
    newScore(input: ScoreInput!): Score
  }
`;

module.exports = typeDefs;
