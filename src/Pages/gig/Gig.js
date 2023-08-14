import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'
import "./Gig.scss"
function Gig() {
  return (
    <div className='gig'>
      <div className='container'>
        <div className='left'>
        <span className='breadCrums'>FIVERR &gt; GRAPHICS & DESIGN</span>
        <h1>I will create ai generated art for you</h1>
        <div className='user'>
          <img className='pp' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png' alt=''/>
          <span>Aditya Slathia</span>
          <div className='stars'>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <span>5</span>
          </div>
        </div>
        <Slider slidesToShow={1} arrowsScroll={1} className="Slider">
          <img src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/288408744/original/7c80cd58889697c60491fc26b61eed19a719cb2b/create-concept-art-and-character-illustration.png' alt=''/>
          <img src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/288408744/original/a3a7ed935c46733f5102cf4fbb876d2e650c0ded/create-concept-art-and-character-illustration.png' alt=''/>
          <img src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/288408744/original/7091af416115ace5c1e868271e109b02b014b2ec/create-concept-art-and-character-illustration.png' alt=''/>
        </Slider>
        <h2>About this Gig</h2>
        <p>
        PLESE READ AND CONTACT ME BEFORE ORDERING WITH A DESCRIPTION OF YOUR IDEA! 
        Hello! My name is Carlos and I am an AI artist.
        I create AI art for anything, in this case im focused in character and background design. I will provide you multiple concepts until we find the right for your order in a extra fast time.
        File format: PNG FILES
        File dimension: 2K 4K 6K AND 8K Resolution.
        Every order has UNLIMITED revisions until you are satisfied with the image, please feel free to contact me to any question you have :).
        IMPORTANT: If you need an image with your face or someone´s face it will not look 100% as the model face. AI does not work like as photo filter and although some faces may work well others do not, please keep this in mind if you order with a face picture. Also I dont make logos, thank you.
        </p>
        <div className='seller'>
          <h2>About the seller</h2>
          <div className='user'>
            <img src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png' alt=''/>
            <div className='info'>
              <span>Aditya Slathia</span>
              <div className='stars'>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <span>5</span>
          </div>
          <button>Contact Me</button>
            </div>
          </div>
          <div className='box'>
            <div className='items'>
              <div className='item'>
                <span className='title'>From</span>
              <span className='desc'>USA</span>
              </div>

              <div className='item'>
                <span className='title'>Member since</span>
              <span className='desc'>Mar 2013</span>
              </div>

              <div className='item'>
                <span className='title'>Avg. response time</span>
              <span className='desc'>1 hour</span>
              </div>

              <div className='item'>
                <span className='title'>Last delivery</span>
              <span className='desc'>1 day</span>
              </div>

              <div className='item'>
                <span className='title'>Languages</span>
              <span className='desc'>English</span>
              </div>

            </div>
            <hr/>
            <p>I&apos;m a graphic webdesigner and web artist from Italy. I really look forward to work with you!</p>
          </div>
        </div>
        <div className='reviews'>
          <h2>Reviews</h2>
          <div className='items'>
            <div className='user'>
              <img className='pp' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png' alt=''/>
              <div className='info'>
                <span>Aditya Slathia</span>
                <div className='country'>
                  <img src='' alt=''/>
                  <span>United States</span>
                </div>
              </div>
            </div>
            <div className='stars'>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <span>5</span>
          </div>
          <p>
          I would book Hatchan IMMEDIATELY! I had a certain image in my head of my character and she delivered. She has amazing communication and went above and beyond for this project to make sure that it met all of my expectations. She was patient with me and I never felt like I was a pest with all of my questions and comments. Book now to have your project exceed expectations! 100/10!
          </p>
          <div className='helpful'>
            <span>Helpful?</span>
            <img src='/like.png' alt=''/>
            <span>Yes</span>
            <img src='/dislike.png' alt=''/>
            <span>No</span>
          </div>
          </div>
          <hr/>
          <div className='items'>
            <div className='user'>
              <img className='pp' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png' alt=''/>
              <div className='info'>
                <span>Aditya Slathia</span>
                <div className='country'>
                  <img src='' alt=''/>
                  <span>United States</span>
                </div>
              </div>
            </div>
            <div className='stars'>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <span>5</span>
          </div>
          <p>
          I would book Hatchan IMMEDIATELY! I had a certain image in my head of my character and she delivered. She has amazing communication and went above and beyond for this project to make sure that it met all of my expectations. She was patient with me and I never felt like I was a pest with all of my questions and comments. Book now to have your project exceed expectations! 100/10!
          </p>
          <div className='helpful'>
            <span>Helpful?</span>
            <img src='/like.png' alt=''/>
            <span>Yes</span>
            <img src='/dislike.png' alt=''/>
            <span>No</span>
          </div>
          </div>
          <hr/>
          <div className='items'>
            <div className='user'>
              <img className='pp' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png' alt=''/>
              <div className='info'>
                <span>Aditya Slathia</span>
                <div className='country'>
                  <img src='' alt=''/>
                  <span>United States</span>
                </div>
              </div>
            </div>
            <div className='stars'>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <img src='/star.png' alt=''/>
            <span>5</span>
          </div>
          <p>
          I would book Hatchan IMMEDIATELY! I had a certain image in my head of my character and she delivered. She has amazing communication and went above and beyond for this project to make sure that it met all of my expectations. She was patient with me and I never felt like I was a pest with all of my questions and comments. Book now to have your project exceed expectations! 100/10!
          </p>
          <div className='helpful'>
            <span>Helpful?</span>
            <img src='/like.png' alt=''/>
            <span>Yes</span>
            <img src='/dislike.png' alt=''/>
            <span>No</span>
          </div>
          </div>
        </div>
        </div>
        <div className='right'>
          <div className='price'>
            <h3>AI Generated Image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>I will create a unique high quality AI generated image based on a description you give me </p>
          <div className='details'>
            <div className='item'>
            <img src='/clock.png' alt=''/>
            <span>2 Days delivery</span>
            </div>
            <div className='item'>
            <img src='/recycle.png' alt=''/>
            <span>3 Revisions</span>
            </div>
          </div>
          <div className='features'>
            <div className='item'>
              <img src='/greencheck.png' alt=''/>
              <span>Prompt writing</span>
            </div>

            <div className='item'>
              <img src='/greencheck.png' alt=''/>
              <span>Artwork delivery</span>
            </div>

            <div className='item'>
              <img src='/greencheck.png' alt=''/>
              <span>image upscaling</span>
            </div>

            <div className='item'>
              <img src='/greencheck.png' alt=''/>
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig