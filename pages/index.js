import IMALayout from '../components/IMALayout'
import fetch from 'isomorphic-unfetch'
var moment = require('moment')
moment().format('L');

const Dashboard = props => {
    console.log('recentSalesData' + JSON.stringify(props))
    return (
        <IMALayout>
            <div>
                form to add new sale
                form to add new customer
                form to add new inventory item1
            <p>recent sales since 30 days ago: {JSON.stringify(props.recentSalesData)}</p>
            </div>
        </IMALayout>
    )

};

Dashboard.getInitialProps = async ctx => {
    const res = await fetch('http://localhost:3000/api/sales?daysAgo=' + 30)
    const json = await res.json()
    console.log(`Show data fetched. ${JSON.stringify(json)}`);
    var mostRecentSales = getMostRecentFormattedSales(json)
    console.log(JSON.stringify(mostRecentSales[0]))
    return { recentSalesData: mostRecentSales };
}

function getMostRecentFormattedSales(sales) {
    var recentSales = {}
    sales.forEach((sale, index) => {
        console.log(index + ":" + sale["date"])
        var date = moment(sale["date"]).format("L")
        var quantities = sale["quantities"]
        // console.log(JSON.stringify(quantities))
        if (recentSales[date]) {
            console.log('this date exists' + date)
            recentSales[date].forEach((product, index) => {
                // console.log("existing product name for this day: " + product['name'])
                var sameProduct = findProductInQuantities(product["name"], quantities)
                console.log(JSON.stringify(sameProduct))
                if (sameProduct === null) {

                } else {
                    // console.log("found same product: " + JSON.stringify(product) + product['qty'] +"+\n " + JSON.stringify(sameProduct))
                    product["qty"] += sameProduct["qty"]
                }
            }, recentSales[date])
        } else {
            //this date does not yet exist in recentSales
            recentSales[date] = sale["quantities"]
        }
    })
    console.log("map:  " + JSON.stringify(recentSales) + "232323")
    return recentSales;
};

function findProductInQuantities(name, quantities) {
    var foundProduct = null;
    quantities.forEach((product, index) => {
        console.log(name + "checking product name: " + product['name'])
        if (name == product['name']) {
            console.log('true' + JSON.stringify(product))
            foundProduct = product;
        }
    });
    return foundProduct;
}

export default Dashboard;