import React, { useState } from 'react'
import "./Gigs.scss"
import GigCards from '../../components/gigCards/GigCards'
import {gigs} from '../../data'
function Gigs() {
  const [sort, setSort]=useState("Sales")
  const [open, setOpen]=useState(false)

  const reSort=(type)=>{
    setSort(type)
    setOpen(false)
  }
  return (
    <div className='gigs'>
      <div className='container'>
        <span className='breadcrums'>FIVERR &gt; GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundary of art and technology with Fiverr&apos;s AI artists
        </p>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className='right'>
             <span className='sortBy'>sortBy</span>
             <span className='sortType'>{sort ==="Sales"? "Best Selling":"Newest"}</span>
             <img src='./down.png' alt='' onClick={()=>setOpen(!open)}/>
             {open && <div className='rightMenu'>
              {sort ==="Sales"?(<span onClick={()=>reSort("createdAt")}>Newest</span>):
              (<span onClick={()=>reSort("Sales")}>Best selling</span>)}
             </div>}
          </div>
        </div>
        <div className='cards'>
          {
            gigs.map(gig=>(
              <GigCards key={gig.id} item={gig}/>
            ))}
          
          
        </div>
      </div>
    </div>
  )
}

export default Gigs