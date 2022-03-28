/*
    I followed this tutorial: https://www.youtube.com/watch?v=Y2ec4KQ7mP8
    so all the code is basically a copy of his
*/

const cookieParser = require('cookie-parser');
const { verify } = require('crypto');
const express = require('express');
const app = express();

const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = "CLIENT_ID.apps.googleusercontent.com"; // input your client ID
const client = new OAuth2Client(CLIENT_ID);

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    let token = req.body.token;
    console.log(token);

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        // const domain = payload['hd'];

        console.log(payload);
      }
      verify()
      .then(() => {
          res.cookie('session-token', token);
          res.send('success');
      })
      .catch(console.error);
})

app.get('/courses', checkAuthenticated, (req, res) => {
    let user = req.user;
    res.render('courses', {user});
})

app.get('/logout', (req, res) => {
    res.clearCookie('session-token');
    res.redirect('/login');
})

function checkAuthenticated(req, res, next) {
    let token = req.cookies['session-token'];

    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();
        user.name = payload.name;
        user.givenName = payload.given_name;
        user.email = payload.email;
        user.picture = payload.picture;
    }

    verify()
    .then(() => {
        req.user = user;
        next();
    })
    .catch(err => {
        res.redirect('/login');
    })
}

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
})