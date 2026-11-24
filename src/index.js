const express = require('express');
const auth = require('./routes/auth');
const files = require('./routes/files');
const tools = require('./routes/tools');
const users = require('./routes/users');

const createApp = () => express();

const app = createApp();
app.use(express.json());

// Every router below is public: there is no login middleware.
app.use('/auth', auth);
app.use('/files', files);
app.use('/tools', tools);
app.use('/users', users);

app.listen(3000, () => console.log('listening on 3000'));
