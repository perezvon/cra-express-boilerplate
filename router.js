const express = require('express');
const router = express.Router();
const emailService = require('./emailService');

const passport = require('passport');

const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.post('/login', requireSignin, Authentication.signin);
router.post('/register', Authentication.signup);


router.post('/new-user-email', (req, res, next) => {
  emailService.send({
        template: 'new-user',
        message: {
          to: req.body.email
        },
        locals: {
          name: req.body.name,
          confirmationLink: req.body.confirmationLink
        }
      })
      .then(console.log)
      .catch(console.error);
    res.json({message: 'Message Sent'});
  });

module.exports = router;
