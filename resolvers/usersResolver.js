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
    User: {
        annotations:  ({annotations}, args, { models: { Annotation } }, info) => {
            return annotations.map((annotationRef)=>Annotation.findById(annotationRef));
        },
    },
}