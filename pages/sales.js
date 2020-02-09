import withIMALayout from '../components/IMALayout'
import fetch from 'isomorphic-unfetch'
import IMAChart from '../components/IMAChart';

const SalesPage = ({ data }) => (
    <div className="container">
        <IMAChart data={data} />
        <style jsx global>{`
            body {
                height: 100vh;
                width: 100vw;
                display: grid;
                text-align: center;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </div>
);

SalesPage.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/sales')
    const json = await res.json()
    return { data: json }
}

export default SalesPage;