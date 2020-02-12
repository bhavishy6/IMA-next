import IMALayout from '../components/IMALayout'
import IMARecentSalesChart from '../components/IMARecentSalesChart'
import fetch from 'isomorphic-unfetch'
import IMANewSaleForm from '../components/forms/IMANewSaleForm';

var moment = require('moment')
moment().format('L');

const Dashboard = props => {
    return (
        <IMALayout>
            <div >
                form to add new sale
                form to add new customer
                form to add new inventory item1
            <p>recent sales since 30 days ago: {JSON.stringify(props.recentSalesByDateDict)}</p>
                <div style={{ height: 500 + "px", width: 500 + 'px' }}>
                    <IMARecentSalesChart data={getMostRecentSalesNIVO(props.recentSalesByDateDict)} />
                </div>
            </div>

            <IMANewSaleForm productList={['Iron Sheet', 'Copper Sheet']} />
        </IMALayout>
    )

};

Dashboard.getInitialProps = async ctx => {
    const res = await fetch('http://localhost:3000/api/sales?daysAgo=' + 30)
    const json = await res.json()
    console.log(`Show data fetched. ${JSON.stringify(json)}`);
    var mostRecentSales = getMostRecentSalesDict(json)
    console.log(JSON.stringify(mostRecentSales[0]))
    return { recentSalesByDateDict: mostRecentSales };
}

function getMostRecentSalesDict(sales) {
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

function getMostRecentSalesNIVO(recentSalesDict) {
    var recentSales = []
    Object.keys(recentSalesDict).forEach(function(date, index) {
        var salesOnDate = recentSalesDict[date]
        recentSales.push({})
        recentSales[index]['date']=date
        for (var i = 0; i < salesOnDate.length; i++) {
            recentSales[index][salesOnDate[i]['name']] = salesOnDate[i]['qty']
            switch(salesOnDate[i]['name']) {
                case 'Iron Sheet':
                    recentSales[index]['Iron SheetColor'] = "hsl(129, 70%, 50%)";
                    break;
                case 'Copper Sheet':
                    recentSales[index]['Copper SheetColor'] = "hsl(77, 70%, 50%)";
                    break;
            }
        }
     });
     console.log("recentNIVO: " + JSON.stringify(recentSales))
    return recentSales;
}

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