import React from 'react'
import "./Featured.scss"
function Featured() {
  return (
    
    <div className='featured'>
    <div className='container'>
        <div className='left'>
            <h1>Find the perfect <i>freelance</i> service for your business</h1>
            <div className='search'>
                <div className='searchInput'>
                    <img src='./search.png'  alt='' />
                    <input type="text" placeholder='Try "buillding mobil app"'/>
                </div>
                <button>search</button>
            </div>
            <div className='popular'>
                <span>Popular:</span>
                <button>Web Design</button>
                <button>Wordpress</button>
                <button>Logo Design</button>
                <button>AI Services</button>
                <button>Web Design</button>
            </div>
        </div>
        <div className='right'>
            <img src='./man.png' alt=''/>
        </div>
    </div>
    </div>
  );
}

export default Featured