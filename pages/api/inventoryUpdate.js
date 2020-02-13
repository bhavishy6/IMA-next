import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

var moment  = require('moment')
moment().format('L'); 

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
    let data = req.body
    data = JSON.parse(data);
    let doc = await req.db.collection('inventory').updateOne({name: data.name}, {$set: {qty: data.qty, price:data.price}}, {upsert: false})

    res.json({message: 'ok'});
    console.log("Product: " + data.name + " updated");
})

export default handler;