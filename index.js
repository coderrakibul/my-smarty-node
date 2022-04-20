const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello from my smarty node')
});

const users = [
    {id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888888'},
    {id: 2, name: 'shabnur', email: 'shabnur@gmail.com', phone: '01788888888'},
    {id: 3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '01788888888'},
    {id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '01788888888'},
    {id: 5, name: 'bobita', email: 'bobita@gmail.com', phone: '01788888888'},
    {id: 6, name: 'shraboni', email: 'shraboni@gmail.com', phone: '01788888888'},
    {id: 7, name: 'kollani', email: 'kollani@gmail.com', phone: '01788888888'}
    
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.listen(port, () => {
    console.log('linteining to port', port)
});