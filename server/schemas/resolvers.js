const { Score, User } = require("../models");

const resolvers = {
  Query: {
    Score: async () => {
      return await Score.find({}).populate({
        score: "",
        date: "",
        teammates: "",
        userID: "",
      });
    },
  },
  Mutation: {
    addSchool: async (parent, { name, location, studentCount }) => {
      return await School.create({ name, location, studentCount });
    },
    updateClass: async (parent, { id, building }) => {
      // Find and update the matching class using the destructured args
      return await Class.findOneAndUpdate(
        { _id: id },
        { building },
        // Return the newly updated object instead of the original
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
