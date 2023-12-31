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
    date: String
    teammates: String
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    scores: [Score]
  }
 
  input ScoreInput{
    score: Int
    teammates: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth  
    addScore(input: ScoreInput!): Score
  }
`;

module.exports = typeDefs;
