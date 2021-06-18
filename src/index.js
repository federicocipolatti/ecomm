import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//app.listen(app.get('port'));
//console.log('Server on port', app.get('port'));

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );