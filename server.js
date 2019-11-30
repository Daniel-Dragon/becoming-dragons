//Install express server
const express = require('express');
const path = require('path');
const ipa = require('instagram-private-api');
require('dotenv').config();
const password = process.env.PASSWORD || ENV['PASSWORD'];

const app = express();
app.use(express.json());

// Instagram

// const ig = new ipa.IgApiClient();

// ig.state.generateDevice('danfoote104227@gmail.com');

// (async () => {
//     await ig.simulate.preLoginFlow();
//     const loggedInUser = await ig.account.login('danfoote104227@gmail.com', 'Rr9DV6TgTc%7');

//     const tagFeed = ig.feed.tag('becomingdragons');
//     const tagPosts = await tagFeed.items();
//     tagFeed.
//     for (let post of tagPosts) {
//         console.log('https://www.instagram.com/p/'+post.code+'/media/?size=l');
//     }
//     // image url: https://www.instagram.com/p/{code}/media/?size=[t,m,l]
// })();

// Instagram

app.post('/api/login', (req, res) => {
    if (req.body && req.body.password == process.env.PASSWORD) {
        res.send(true);
    } else {
        res.sendStatus(401);
    }
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/becoming-dragons'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/becoming-dragons/index.html'));
});

// Start the app by listening on the port.
app.listen(process.env.PORT || 8080);