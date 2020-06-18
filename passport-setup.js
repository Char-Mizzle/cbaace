
const passport = require('passport');
const User = require('./models/user-model');
const configData = require('./config/apollo.config');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

// initialize the Google Strategy with Google API client key saved
const googleOptions = {
    clientID: configData.web_google.client_id,
    clientSecret: configData.web_google.client_secret,
    callbackURL: "/auth/google/callback"
}
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

passport.use(new GoogleStrategy(
    googleOptions,
    googleCallback,
));

module.exports = passport;