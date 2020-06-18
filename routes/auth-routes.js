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
        successRedirect: '/',
        failureRedirect: '/', }),
    function(req, res) {console.log('\nfound\n');res.redirect('/')}
)

module.exports = router;