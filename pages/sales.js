import withIMALayout from '../components/IMALayout'
import fetch from 'isomorphic-unfetch'
import IMAChart from '../components/IMAChart';
import IMALayout from '../components/IMALayout';

const SalesPage = props => (
    <IMALayout>
        <div className="container">
           sales charts
        </div>
    </IMALayout>
);

SalesPage.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/sales')
    const json = await res.json()
    console.log(`Show data fetched.${json}`);
    return { data: json }
}

export default SalesPage;