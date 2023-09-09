const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql')
const secret = 'supersecret';
const expiration = '2h';

module.exports = {
  //Authentication Error
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    }
  }),
  
  //Authentication middleware that will check if the user is logged in
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data
    } catch {
      console.log('Invalid Token');
    }
    return req;
  },

  //Create token when signed in
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ date: payload }, secret, { expiresIn: expiration });
  }
};