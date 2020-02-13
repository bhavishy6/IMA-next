import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

var moment  = require('moment')
moment().format('L'); 

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
    const {  } = req.query;
    var dbQuery = {};

    let doc = await req.db.collection('inventory').find(dbQuery).toArray();
    res.json(doc);
    res.end();
});

handler.post(async (req, res) => {
    let data = req.body
    data = JSON.parse(data);
    let doc = await req.db.collection('inventory').insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
      });
})

export default handler;