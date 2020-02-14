import IMALayout from '../components/IMALayout'
import IMARecentSalesChart from '../components/IMARecentSalesChart'
import fetch from 'isomorphic-unfetch'
import IMANewSaleForm from '../components/forms/IMANewSaleForm';
import { Component } from 'react';

var moment = require('moment')
moment().format('L');

class Dashboard extends Component {
    state = {
        productList: [],
        recentSalesByDateDict: [],
        isLoading: true
    }


    async fetchInventory() {
        const inventory = await fetch('http://localhost:3000/api/inventory')
        const inventoryjson = await inventory.json()
        return inventoryjson;
    }

    async fetchRecentSales(daysAgo) {
        const sales = await fetch('http://localhost:3000/api/sales?daysAgo=' + daysAgo)
        const salesjson = await sales.json()
        return salesjson;
    }
    async componentDidMount() {
        var salesDict = []
        var _asyncMostRecentSales = this.fetchRecentSales(30).then(externalData => {
            salesDict = this.getMostRecentSalesDict(externalData);
            this.setState({recentSalesByDateDict:this.getMostRecentSalesNIVO(salesDict)});
        })

        console.log("cdm mrs" + JSON.stringify(salesDict));

        var productList = []
        var _asyncInventory = this.fetchInventory().then(externalData => {
            productList = externalData;
        });

        this.setState({
            productList: productList,
            recentSalesByDateDict: salesDict,
        });
    }

    getMostRecentSalesDict(sales) {
        console.log("mrd" + JSON.stringify(sales))
        var recentSales = {}
        sales.forEach((sale, index) => {
            var date = moment(sale["date"]).format("L")
            console.log("checking dateL : " + date)
            var quantities = sale["quantities"]
            if (recentSales[date]) {
                console.log('this date exists' + date)
                recentSales[date].forEach((product, index) => {
                    var sameProduct = this.findProductInQuantities(product["name"], quantities)
                    if (sameProduct === null) {

                    } else {
                        product["qty"] += sameProduct["qty"]
                    }
                }, recentSales[date])
            } else {
                //this date does not yet exist in recentSales
                recentSales[date] = sale["quantities"]
            }
        })
        console.log(JSON.stringify(recentSales))
        return recentSales;
    };

    getMostRecentSalesNIVO(recentSalesDict) {
        console.log("nivo" + JSON.stringify(recentSalesDict))
        var recentSales = []
        Object.keys(recentSalesDict).forEach(function (date, index) {
            var salesOnDate = recentSalesDict[date]
            recentSales.push({})
            recentSales[index]['date'] = date
            for (var i = 0; i < salesOnDate.length; i++) {
                recentSales[index][salesOnDate[i]['name']] = salesOnDate[i]['qty']
                switch (salesOnDate[i]['name']) {
                    case 'Iron Sheet':
                        recentSales[index]['Iron SheetColor'] = "hsl(129, 70%, 50%)";
                        break;
                    case 'Copper Sheet':
                        recentSales[index]['Copper SheetColor'] = "hsl(77, 70%, 50%)";
                        break;
                    case 'Free Product':
                        recentSales[index]['Free ProductColor'] = "hsl(150, 70%, 50%)";
                        break;
                }
            }
        });
        this.setState({ 'isLoading': false });
        return recentSales;
    }

    findProductInQuantities(name, quantities) {
        var foundProduct = null;
        quantities.forEach((product, index) => {
            console.log(name + "checking product name: " + product['name'])
            if (name == product['name']) {
                foundProduct = product;
            }
        });
        return foundProduct;
    }

    render() {
        const { isLoading, recentSalesByDateDict } = this.state
        console.log(JSON.stringify(recentSalesByDateDict));
        return (
            <IMALayout>
                <div >
                    form to add new sale
                    form to add new customer
                    form to add new inventory item1
                    {isLoading ? <p>Loading...</p> :
                     <> 
                        <p>recent sales since 30 days ago: {JSON.stringify(recentSalesByDateDict)}</p>

                        <div style={{ height: 500 + "px", width: 500 + 'px' }}>
                            <IMARecentSalesChart data={recentSalesByDateDict} />
                        </div>
                    </>

                    }
                </div>

                <IMANewSaleForm productList={this.state.productList} />
            </IMALayout>


        )

    }
}

export default Dashboard;