const router = require('express').Router();
const passport = require('passport')

router.get('/logout', (req,res)=>{
    req.logout();
    res.redirect('/')
});

router.get('/google', 
    passport.authenticate('google', { scope: ['profile', 'email']}),
    function(req, res) {
        console.log(req)
        req.previousPage = req.originalUrl
    });

router.get('/google/callback',
    passport.authenticate('google', { 
        // change at deployment
        successRedirect: '/',
        failureRedirect: '/google', }),
    function(req, res) {
        console.log('\nfound\n');res.redirect(req.header('Referer'))
    }
)

module.exports = router;