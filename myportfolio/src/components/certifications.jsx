import React from 'react'
import './CSS/home.css'
import './CSS/certifications.css'
import AI900 from './images/Ai-900.png'
import AZ900 from './images/Az-900.png'
import AZ204 from './images/Az-204.png'
import SQL from './images/sql.png'
import REACT from './images/react.png'
import CSHARP from './images/csharp.png'
import CSS from './images/css.png'


function Certifications() {
  return (
    <>
<div className="row" id="Certifications">
        <h3>Certifications</h3>
        <p id="skillsintro">- With verification links</p>
     <div className="container" >
       <div className="row row-cols-2 row-cols-lg-3" id="Certification-upperCard">
    <div className="col-4 col-lg-2 certifications-cards" id="firstCard-certi">
    <h4>AZ-900</h4>
    <img src={AZ900} alt="AZ-900"/>   
    <a href="https://www.credly.com/badges/f10251e9-0722-42d0-bcb0-5f6ef04193c9/linked_in_profile" target="_blank"rel="noopener noreferrer">
    <p id="certifications-details">Microsoft Azure Fundamentals</p>
    </a>
    

     
    </div>
    <div className="col-4 col-lg-2 certifications-cards">
    <h4>AZ-204</h4>
    <img src={AZ204} alt="AZ-204"/>
    <a href="https://www.credly.com/badges/66acfbb4-96a8-4151-bc63-fbbb0cab7430/linked_in_profile" target="_blank"rel="noopener noreferrer">
      <p id="certifications-details">Microsoft Azure Developer</p>
    </a>


    </div>
    <div className="col-4 col-lg-2 certifications-cards" id="thirdCard-certi">
     <h4>AI-900</h4>
     <img src={AI900} alt="AI-900"/>
    
     <a href="https://www.credly.com/badges/0dae245e-fd91-4fe8-86bf-c1f64d61a2b4/linked_in_profile" target="_blank"rel="noopener noreferrer">
     <p id="certifications-details">MS Azure AI Fundamentals</p>
    </a>


    </div>
    <div className="col-4 col-lg-2 certifications-cards" id="fourthCard-certi">
     <h4>SQL</h4>
     <img src={SQL} alt="SQL" className='HRhoverImages'/>
     <a href="https://www.hackerrank.com/certificates/1abf777d65d3" target="_blank"rel="noopener noreferrer">
     <p id="certifications-details">Hacker Rank SQL Certifaction</p>
    </a>

    </div>
    <div className="col-4 col-lg-2 certifications-cards">
    <h4>C Sharp</h4>
    <img src={CSHARP} alt="AZ-900" className='HRhoverImages'/>
    <a href="https://www.hackerrank.com/certificates/b60e39358a53" target="_blank"rel="noopener noreferrer">
    <p id="certifications-details">Hacker Rank C# Certifaction</p>
    </a>


    </div>
    <div className="col-4 col-lg-2 certifications-cards" id="lastCard-certi">
    <h4>React</h4>
    <img src={REACT} alt="AZ-900" className='HRhoverImages' />
    <a href="https://www.hackerrank.com/certificates/7d0e24432e71" target="_blank"rel="noopener noreferrer">
    <p id="certifications-details">Hacker'R React Certifaction</p>
    </a>

    </div>
   

      
     </div>
</div>
</div>  
    </>
  )
}

export default Certifications
