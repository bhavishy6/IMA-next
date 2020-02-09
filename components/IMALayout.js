import IMAHeader from './IMAHeader';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const withIMALayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <IMAHeader />
      <Page />
    </div>
  );
};

export default withIMALayout;