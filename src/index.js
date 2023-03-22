import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './Styles/globalStyles';
import Routes from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />,
    <GlobalStyle />
  </React.StrictMode>
)