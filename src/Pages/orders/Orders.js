import React from 'react'
//import { Link } from 'react-router-dom'
import "./Orders.scss"

function Orders() {

  const currentUser={
      id:1,
      username:"Jhon Doe",
      isSeller:true
  };
  return (
    <div className='orders'>
      <div className='container'>
        <div className='title'>
          <h>Orders</h>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller?"Buyer":"seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='img' src='' alt=''/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='./message.png' alt=''/>
            </td>
          </tr>

          <tr>
            <td>
              <img className='img' src='' alt=''/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='./message.png' alt=''/>
            </td>
          </tr>

          <tr>
            <td>
              <img className='img' src='' alt=''/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='./message.png' alt=''/>
            </td>
          </tr>

          <tr>
            <td>
              <img className='img' src='' alt=''/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='./message.png' alt=''/>
            </td>
          </tr>

          <tr>
            <td>
              <img className='img' src='' alt=''/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='./message.png' alt=''/>
            </td>
          </tr>

          <tr>
            <td>
              <img className='img' src='' alt=''/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='./message.png' alt=''/>
            </td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default Orders