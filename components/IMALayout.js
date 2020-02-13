import IMAHeader from './IMAHeader';
import React from 'react';
import globalStyles from '../styles/global'


const IMALayout = props => (
  <div className="page-layout">
    <style jsx global>
      {globalStyles}
    </style>
    <IMAHeader />
    {props.children}
  </div>

);
export default IMALayout;