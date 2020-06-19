module.exports = {
    Query: {
        loggedInUser: (parent, args, context) => context.currentUser,
        user: (parent, args, { models: { User } }, info) => {
            return User.findById(args.id);
        },
    },
    Mutation: {
        logout: (parent, args, context) => context.logout(),
    },
}