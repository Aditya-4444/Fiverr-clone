import React from 'react'
import { Link } from 'react-router-dom'
import "./Messages.scss"

function Messages() {

  // const currentUser={
  //     id:1,
  //     username:"Jhon Doe",
  //     isSeller:true
  // };
  const message=""
  return (
    <div className='messages'>
      <div className='container'>
        <div className='title'>
          <h>Messages</h>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>
              Jhon Doe
            </td>
            <td><Link to="./message/123" className="link">hbdhs jnjaknsd asjdnad sakjddn dnkn nasn siddn asjas{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>

          <tr className='active'>
            <td>
              Jhon Doe
            </td>
            <td><Link to="./message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>

          <tr className='active'>
            <td>
              Jhon Doe
            </td>
            <td><Link to="./message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>

          <tr className='active'>
            <td>
              Jhon Doe
            </td>
            <td><Link to="./message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>

          <tr className='active'>
            <td>
              Jhon Doe
            </td>
            <td><Link to="./message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>

          <tr className='active'>
            <td>
              Jhon Doe
            </td>
            <td><Link to="./message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>

          <tr className='active'>
            <td>
              Jhon Doe
            </td>
            <td><Link to="./message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default Messages