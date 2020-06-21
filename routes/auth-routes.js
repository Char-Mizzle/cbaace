const router = require('express').Router();
const passport = require('passport')

router.get('/logout', (req,res)=>{
    req.logout();
    res.redirect('/')
});

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email']}));

router.get('/google/callback',
    passport.authenticate('google', { 
        // change at deployment
        successRedirect: 'http://13.76.1.212:5000/graphql',
        failureRedirect: 'http://13.76.1.212:5000/graphql', }),
    function(req, res) {console.log('\nfound\n');res.redirect('http://13.76.1.212:5000/graphql')}
)

module.exports = router;