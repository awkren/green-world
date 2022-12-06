import React from 'react'
import '../page-style/SecondSection.css'
import naTech from '../assets/imgs/naturetech4.png'
import hug from '../assets/imgs/test.png'

const SecondSection = () => {
  return (
    <div>
      <div>
        <p>It doesn't matter where you're from, talk to us and we'll go to your city too!</p>
        <form>
          <label>Your Name</label>
          <input type='text'/>
          <label>Your City</label>
          <input type='text'/>
          <label>Country</label>
          <label>Email</label>
          <input type='email'/>
          <button>I want to contribute!</button>
        </form>
      </div>
      <div>
        <p>Ever wondered how technology can work together with nature?</p>
        <img src={naTech} alt='/'/>
        <p>We thought about it in the past, and we developed the Florest Tracking App</p>
        <p>It's able to track forests around the globe by using AI and satellite images to compare past data with present images from those forests, and we can also predict how that forest would grow or not in a 5, 10 or 15 year span in the future!</p>
      </div>
      <div>
        <p>Our impact in Brazil</p>
        <p>Brazil is home for the biggest rainforest in the World, and we proudly say that helping the Amazon Rainforest has been one of our main goals throughout our project</p>
        <p>We were recognized as Amazon Rainforest Brother by the brazilian government, that's the highest title for a NGO to receive</p>
        <p>Below are some of the things we were to do in the world's biggest forest:</p>
        <p>Increased the quality of the oxygen in that area by 48%</p>
        <p>Extended the length of the forest by 5.7 miles</p>
        <p>We worked with natives living there, and instructed them about our mission</p>
      </div>
      <div>
        <p>We believe that together, we can make the world green once again 💚</p>
        <img src={hug} alt='/'/>
      </div>
    </div>
  )
}

export default SecondSection