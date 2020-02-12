import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

var moment  = require('moment')
moment().format('L'); 

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
    const { daysAgo } = req.query;
    // console.log(this.state);
    var startDateExists = true;
    var dbQuery = {};
    if (startDateExists) {
        var startDateFilter = moment().subtract(daysAgo, 'days');
        dbQuery = {
            "date": {
                $gte: new Date(startDateFilter._d)
            }
        };
    }

    let doc = await req.db.collection('sales').find(dbQuery).toArray();
    console.log(doc);
    res.json(doc);
    res.end();
});
handler.post(async (req, res) => {
    let data = req.body
    data = JSON.parse(data);
    let doc = await req.db.collection('sales').insertOne(data, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
      });
});
export default handler;