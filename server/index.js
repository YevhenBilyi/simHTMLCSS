const express = require('express');
const bodyParser = require('body-parser');
const cntrl = require( `./usersCtrl` );

const app = express();
app.use( bodyParser.json() );

// FULL CRUD. CHECKED IN POSTMAN!!!
app.get('/api/users', cntrl.getAll);
app.put('/api/users/:userId', cntrl.updateUser);
app.post('/api/users', cntrl.createUser);
app.delete('/api/users/:id', cntrl.deleteUser);

const port = 3005
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );