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
        successRedirect: '/graphql',
        failureRedirect: '/graphql', }),
    function(req, res) {console.log('\nfound\n');res.redirect('/graphql')}
)

module.exports = router;