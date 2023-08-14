import React from 'react'
import './Add.scss'

function add() {
  return (
    <div className='add'>
      <div className='container'>
        <h1>Add New Gig</h1>
        <div className='sections'>
          <div className='left'>
            <label htmlFor=''>Title</label>
            <input type="text" placeholder='eg. I will do something I am really good at '></input>
            <label htmlFor=''>Catagory</label>
            <select name='cats' id='cats'>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor=''>Cover Image</label>
            <input type="file"/>
            <label htmlFor=''>Upload Image</label>
            <input type="file" multiple/>
            <label htmlFor=''>Description</label>
            <textarea name='' id='' cols="30" rows="16" placeholder='Brief introduction to introduce your service to customers'></textarea>
           <button>Create</button>
          </div>
          <div className='right'>
            <label htmlFor=''>Service title</label>
            <input type="text" placeholder='eg. one-page web design'/>
            <label htmlFor=''>Short Description</label>
            <textarea name='' id='' cols='30' rows='10' placeholder='Short Description of your Service'></textarea>
            <label htmlFor=''>Delivery Time (eg. 3 days)</label>
            <input type="number" min={1}/>
            <label htmlFor=''>Revision Numbers</label>
            <input type="number" min={1}/>
            <label htmlFor=''>Add Features</label>
            <input type="text" placeholder='e.g. page design'/>
            <input type="text" placeholder='e.g. file uploading'/>
            <input type="text" placeholder='e.g. setting up a domain '/>
            <input type="text" placeholder='e.g. hosting'/>
            <label htmlFor=''>Price</label>
            <input type="number" min={1}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default add