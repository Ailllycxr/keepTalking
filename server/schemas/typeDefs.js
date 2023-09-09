const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Score {
    _id: ID!
    score: Int
    date: Int
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
    login(email: String!, password: String!): Auth  
    addScore(input: ScoreInput!): Score
  }
`;

module.exports = typeDefs;
