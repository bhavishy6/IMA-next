import fetch from 'isomorphic-unfetch'
import IMALayout from '../components/IMALayout';
import styled from "@emotion/styled";
import IMATable from "../components/IMATable";
import IMAEditProductForm from '../components/forms/IMANewProductForm';


const InventoryPage = props => {
    const columns = React.useMemo(
        () => [{
            Header: "Product",
            columns: [
                {
                    Header: 'Product Name',
                    accessor: 'name',
                }
            ]
        }, {
            Header: "Info",
            columns: [
                {
                    Header: 'Price',
                    accessor: 'price',
                },
                {
                    Header: 'Stock',
                    accessor: 'qty',
                }
            ]
        }
        ]
    )
    return (
        <IMALayout>
            <div className="container" >
                Inventory management table.
                <IMATable
                    columns={columns}
                    data={props.inventory}
                />
                <hr />
                <IMAEditProductForm inventory={props.inventory}
                    productList={props.inventory}
                />
            </div>
        </IMALayout>
    );
}

InventoryPage.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/inventory')
    const json = await res.json()
    console.log(`Inventory fetched.${JSON.stringify(json)}`);
    return {
        inventory: json
    }
}

export default InventoryPage;