const express = require('express');
const items = require('./cart');
//const getCartItem = items.getCartItem;


const app = express();
console.log (items);
const port = 3000;


//Get the request data as an object
app.use(express.json());
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

//GET cart items
app.get( '/cart', (req, res) => {
    res.status(200, 'OK');
    res.json(items);
    
})

//GET cart items by ID, status code 200 & **404 when not found**
app.get( '/cart:id', (req, res) => {
    res.status(200, 'OK');
    res.json(items);
   
    if ( !isNaN(id) ) {
        res.json(items[req.params.id]);
    } else {
        res.status(404, 'Not Found');
    }
});

//POST cart items (add to array) and generate random ID, response code 201
app.post( '/cart', (req, res) => {
    res.status(201, 'Created');
    res.json(items);
   
    // const ID = new Date().getTime();
    // const newItem = {
    //     id: ID,
    //     product: body.product,
    //     price : body.price,
    //     quantity : body.quantity,
    // };

    const body = req.body.newItem;
    items.push(body);
});

//PUT cart items by ID, update cart item and response code 200
app.put( '/cart:id', (req, res) => {
    res.status(200, 'OK');
    res.json(items);
   
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
