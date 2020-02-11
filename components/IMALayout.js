import IMAHeader from './IMAHeader';
import React from 'react';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const IMALayout = props => (
  <div style={layoutStyle}>
    <IMAHeader />
    {props.children}
  </div>
);
export default IMALayout;