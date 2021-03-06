const express = require('express');

const path = require('path');
const session = require('express-session');
const uuid = require('uuid').v4;
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const passportSetup = require('./passport-setup');
const passport = require('passport');
const resolvers = require('./resolvers/rootResolver');
const { typeDefs } = require('./schemas/schema');
const authRoutes = require('./routes/auth-routes');
const { MONGOOSE_CONFIG, CHROME_EXTENSION } = require('./config');
const cors = require('cors');
const User = require('./models/user-model');
const Annotation = require('./models/annotation-model');
const Article = require('./models/article-model');
require("dotenv").config();
/* --------------------------------- Imports -------------------------------- */

const PORT = process.env.PORT || 5000;
const SESSON_SECRET = process.env.SECRET || 'This is a test secret';

/* --------------------------------- Constants -------------------------------- */

const app = express();

// Allow request from the client
var corsOptions = {
    origin: `*`,
    credentials: true // <-- REQUIRED backend setting
};

app.use(cors(corsOptions));

// expand the request limit
app.use(express.json({ limit: '2mb' }));

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

// session for a user
app.use(session({
    genid: (req) => uuid(),
    secret: SESSON_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res)=>{
    res.redirect(req.previousPage)
})
app.use('/auth', authRoutes);

// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: ({req}) =>({
        currentUser: req.user,
        logout: () => req.logout(),
        models: {
            User,
            Annotation,
            Article,
        }
    }),
    introspection: true,
    playground: {
        settings: {
            'request.credentials': 'include',
        },
    },
})

// Disable default Apollo cors setting
server.applyMiddleware({ app, cors: false });
server.applyMiddleware({ app, path: "/graphql" });


/* --------------------------------- MongoDB Setup -------------------------------- */
var uri = `mongodb+srv://${MONGOOSE_CONFIG.user}:${MONGOOSE_CONFIG.pswd}@cbaace0-uqdnf.azure.mongodb.net/${MONGOOSE_CONFIG.dbname}?retryWrites=true&w=majority`;
mongoose.connect(process.env.MONGODB_URI || uri,
    { useNewUrlParser: true , useUnifiedTopology: true }
).then(() => {
/* --------------------------------- Express Start -------------------------------- */
app.listen({ port: PORT }, ()=> {
    console.log(`Server ready at http://localhost:${PORT}`);
})
}).catch(err => {
    console.log(err);
})

