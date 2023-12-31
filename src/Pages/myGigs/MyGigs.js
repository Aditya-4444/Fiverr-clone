import React from 'react'
import { Link } from 'react-router-dom'
import "./MyGigs.scss"

function MyGigs() {
  return (
    <div className='myGigs'>
      <div className='container'>
        <div className='title'>
          <h>Gigs</h>
          <Link to='/add'>
            <button>Add new Gig</button>
            </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src='' alt=''/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src='./delete.png' alt=''/>
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
              <img className='delete' src='./delete.png' alt=''/>
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
              <img className='delete' src='./delete.png' alt=''/>
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
              <img className='delete' src='./delete.png' alt=''/>
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
              <img className='delete' src='./delete.png' alt=''/>
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
              <img className='delete' src='./delete.png' alt=''/>
            </td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default MyGigs