import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 const carlist=[" Maruti Suzuki ",' Hyundai '," Fiat "," Audi "," Renault "];

ReactDOM.render(
  <>
    <p>
      Enter car company from the list <br></br>
      1.{carlist[0]}<br></br>
      2.{carlist[1]}<br></br>
      3.{carlist[2]}<br></br>
      4.{carlist[3]}<br></br>
      5.{carlist[4]}<br></br>
    </p>
    <form action="/registered" method="GET">
        <input type="text" placeholder="Company" name="company"/><br></br>
        <input type="text" placeholder="Chasis No" name="chasis_no"/><br></br>
        <input type="text" placeholder="Owner Name" name="owner_name"/><br></br>
        <input type="text" placeholder="Address" name="address"/><br></br>
        <input type="submit"/>
    </form>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
