import fetch from 'isomorphic-unfetch'
import IMALayout from '../components/IMALayout';
import { Component } from 'react';
import * as IMAInputs from '../components/forms/IMAInputs';
import IMANewSaleForm from '../components/forms/IMANewSaleForm';
import IMATable from "../components/IMATable";

class SalesPage extends Component {
    state = {
        productList: [],
        salesData: [],
        columnds: []
    }
    async componentDidMount() {

        var _asyncSales = this.fetchSales().then(externalData => {
            var sales = externalData;
            this.setState({
                salesData: sales,
            });
        });
        var _asyncInventory = this.fetchInventory().then(externalData => {
            var productList = externalData;
            this.setState({
                productList: productList,
            });
        });
        this.makeColumns();
    }

    async fetchSales() {
        const res = await fetch('http://localhost:3000/api/sales')
        const json = await res.json()
        return { sales: json }
    }

    async fetchInventory() {
        const inventory = await fetch('http://localhost:3000/api/inventory')
        const inventoryjson = await inventory.json()
        return inventoryjson;
    }
     makeColumns() {
        this.setState({columns: React.useMemo(
            () => [{
                Header: "Customer Info",
                columns: [
                    {
                        Header: 'Customer Name',
                        accessor: 'customerName',
                    },{
                        Header: 'Customer Email',
                        accessor: 'customerEmail',
                    }
                ]
            }, {
                Header: "Purchase Info",
                columns: [
                    {
                        Header: 'Date',
                        accessor: 'date',
                    },
                    {
                        Header: 'Products',
                        accessor: 'quantities',
                    },
                    {
                        Header: 'Total Price',
                        accessor: 'totalPrice',
                    }
                ]
            }
            ]
        )})
    }
    render() {
        
        return (
            <IMALayout>
                <div className="container">
                    <IMATable
                        columns={this.state.columns}
                        data={this.state.salesData}
                    />
                    <hr />
                </div>
                <IMANewSaleForm productList={this.state.productList} />
            </IMALayout>
        );
    }

}

export default SalesPage;