import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'
function Message() {
  return (
    <div className='message'>
      <div className='container'>
        <span className='breadcrumbs'>
          <Link to="/messages">MESSAGES</Link>&gt; JOHN DOE &gt;
        </span>
        <div className='messages'>
          <div className='item'>
            <img src="" alt=''/>
            <p>
            Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour&apos;d upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth&apos;d his wrinkled front
            </p>
          </div>

          <div className='item owner'>
            <img src="" alt=''/>
            <p>
            Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour&apos;d upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth&apos;d his wrinkled front
            </p>
          </div>

          <div className='item'>
            <img src="" alt=''/>
            <p>
            Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour&apos;d upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth&apos;d his wrinkled front
            </p>
          </div>

          <div className='item owner'>
            <img src="" alt=''/>
            <p>
            Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour&apos;d upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth&apos;d his wrinkled front
            </p>
          </div>
        </div>
        <div className='write'>
          <textarea name='' placeholder='write a message' id='' cols='30' rows='10'></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message