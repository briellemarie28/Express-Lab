const express = require('express');
const items = require('./cart');
//const getCartItem = items.getCartItem;

const app = express();
console.log (items);
const port = 4200;


//Get the request data as an object
app.use(express.json());
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

//GET cart items
app.get( '/cart', (req, res) => {
    res.status(200);
    res.json(items); 
})

//GET cart items by ID, status code 200 & **404 when not found**
app.get( '/cart:id', (req, res) => {
    res.status(200, 'OK');
    res.json(items.ID);
   
    if ( !isNaN(ID) ) {
        res.json(items[req.params.ID]);
    } else {
        res.status(404, 'Not Found');
    }
});

//POST cart items (add to array) and generate random ID, response code 201
app.post( '/cart', (req, res) => {
    const body = req.body.newItem;
    items.push(body.newItem);

    res.status(201);
    res.json(items);

    // const random = () => {
    // return cartItems(Math.floor(Math.random() * 500));
   
    // const ID = new Date().getTime();
    // const newItem = {
    //     id: ID,
    //     product: body.product,
    //     price : body.price,
    //     quantity : body.quantity,
    // };
    
});

//PUT cart items by ID, update cart item and response code 200
app.put( '/cart:id', (req, res) => {
    res.status(200, 'OK');
    res.json(items.ID);
   
    const id = req.params.id;
    const newItem = req.body.id;
    items.splice(newItem, 1, id);
});

//DELETE cart items by ID, remove from array and response code 204
app.delete( '/cart:id', (req, res) => {
    res.status(204, "No Content");
    res.json(items);
    
    const id = req.params.id;
    items.splice(id, 1)
    res.json("Deleting random fact");
});
