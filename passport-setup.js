
const passport = require('passport');
const User = require('./models/user-model');
const { Strategy: TwitterStrategy } = require('passport-twitter')
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth')
const { Strategy: FacebookStrategy } = require('passport-facebook')
const { Strategy: GithubStrategy} = require('passport-github')
const { 
  TWITTER_CONFIG, GOOGLE_CONFIG, FACEBOOK_CONFIG, GITHUB_CONFIG
} = require('./config')
passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

const googleCallback = (accessToken, refreshToken, profile, done) => {
    // Check for existing user
    User.findOne({googleid: profile.id}).then((currentUser) => {
        if (currentUser){
            console.log('current user: ' + currentUser);
            currentUser.updateOne({$set:{profileImage: profile.photos[0].value}}).then((updated)=>{
                console.log(updated);
            });
            done(null, currentUser);
            return;
        } else {
            const newUser = new User({
                googleid: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value,
                profileImage: profile.photos[0].value,
            });
            newUser.id = newUser._id;
            newUser.save().then((newUser) => {
                console.log('new user created: ' + newUser);
                done(null, newUser);
            });
        }
    })
};

// passport.use(new TwitterStrategy(TWITTER_CONFIG, callback))
passport.use(new GoogleStrategy(GOOGLE_CONFIG, googleCallback))
// passport.use(new FacebookStrategy(FACEBOOK_CONFIG, callback))
// passport.use(new GithubStrategy(GITHUB_CONFIG, callback))

module.exports = passport;