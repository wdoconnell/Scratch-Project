<<<<<<< HEAD
import React, { useState } from 'react';
import { connect } from 'react-redux';
=======
import React from 'react';
// import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
>>>>>>> 1c942680eee19814dde8bd2dd9ff39846119b245

const BudgetMain = () => {
  return (
    <div className='container budget-container'>
<<<<<<< HEAD
      <div className='header'>
        <div className='header1'>Account</div>
        <div className='header2'>Hi user!</div>
      </div>
      <div className='content-large'>Total Monthly Budget:</div>
      <div className='content-large'>Spent</div>
      <div className='content-large'>Budget</div>
    </div>
=======
      <div className='header1'> My Account</div>
      <div className='header2'> Hi User! </div>

      <div className='content-large'>Total Monthly Budget:
        
        <ul className='categories'>
          <table>
            <thead>
              <br></br>
              <tr>
                <th> Spending So far: </th>
              </tr>
 
            </thead>
            <tbody>
              <tr>
              <td>Groceries</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Gym</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Rent</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Car Loan</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Fun Money</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Studen Loan</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Electronics</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Day Care</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Clothing</td>
              <td>$</td>
              </tr>
              <br></br>
            </tbody>
          </table>
         
        </ul>
      </div>
      <div className='content-medium1'>Total Spent
      <ul className='totalSpent'>
          <table>
            <thead>
              <br></br>
              <br></br>
              <tr>
                <th>  </th>
              </tr>
 
            </thead>
            <tbody>
              <tr>
                <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr> <tr>
               <td>$</td>
              </tr>
              <tr>
                 <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <br></br>
            </tbody>
          </table>
         
        </ul></div>
      <div className='content-medium2'>Budget
      <ul className='remBudget'>
          <table>
            <thead>
              <br></br>
              <br></br>
              <tr>
                <th>  </th>
              </tr>
 
            </thead>
            <tbody>
              <tr>
                <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr> <tr>
               <td>$</td>
              </tr>
              <tr>
                 <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <br></br>
            </tbody>
          </table>
         
        </ul></div>

      <div className='buttonbox'>
      <Link to='/totaldisplay'>
      <button className="button">Input Spending</button>
      </Link>
      <br></br>
      <Link to='/newbudget'>
      <button className="button">Input New Budget</button>
      </Link>
      </div>
     </div>
>>>>>>> 1c942680eee19814dde8bd2dd9ff39846119b245
  );
};

export default BudgetMain;
//state = {userData, categories, transactions, categoryBudget}