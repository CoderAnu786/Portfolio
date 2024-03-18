import {React , useState,useEffect} from 'react'
import './CSS/themes.css'

function Themes() {

    
    let defaultColor = '#f4f4f4';
    defaultColor =localStorage.getItem("color");
  const [bgColor, setBgColor] = useState(defaultColor);

  useEffect(()=>{

    if(document.getElementById("mainRow") !== null){
    
 
        document.getElementById("mainRow").style.backgroundColor =bgColor;
        document.getElementById("SoftSkillsPallete").style.backgroundColor =bgColor
        document.getElementById("about").style.backgroundColor =bgColor;
        document.getElementById("skillRow").style.backgroundColor =bgColor;
        document.getElementById("QualiExRow").style.backgroundColor =bgColor;
        document.getElementById("awardRow").style.backgroundColor =bgColor;
        document.getElementById("contactRow").style.backgroundColor =bgColor;
        document.getElementById("Certification-upperCard").style.backgroundColor =bgColor;
        document.getElementById("Certifications").style.backgroundColor =bgColor;

        defaultColor =localStorage.getItem("color");
  }
  

  })
 
    

 
  return (
    <>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Set the theme</h5>
        <i className="fa-regular fa-circle-xmark" data-bs-dismiss="modal" aria-label="Close"></i>
      </div>
      <div className="modal-body">
    
<div class="container overflow-hidden">

  <div className="row" style={{backgroundColor:bgColor}}>
    <div className="col themes-cards" onClick={()=>{setBgColor("#e8ffc5")}} id="Green">Green</div>
    <div className="col themes-cards" onClick={()=>{setBgColor("#fdd8ff")}} id="Pink">Pink</div>
    <div className="col themes-cards" onClick={()=>{setBgColor("#f5eaf0")}} id="Perl">Perl</div>
    <div className="col themes-cards" onClick={()=>{setBgColor("#dfe5ad")}} id="Linen">Linen</div>
    <div className="col themes-cards" onClick={()=>{setBgColor("#e6d49f")}} id="Coral">Coral</div>
    <div className="col themes-cards" onClick={()=>{setBgColor("#fdf6e6")}} id="Lace">Lace</div>
    <div className="col themes-cards" onClick={()=>{setBgColor("#E6E6FA")}} id="Lavender">Lavender</div>
  </div>
  <br/>
  <div id="theme-text">
   You can choose different themes from above color palette.<br/>All you need to
   click on save changes for appying the selected theme to the App.

  </div>


     </div>   
      </div>
      <div className="modal-footer">
        <button type="button" className="backDefaultBTN" data-bs-dismiss="modal" onClick={()=>{localStorage.clear(); window.location.reload()}} >Back to default</button>
        <button type="button" className="saveChangesBTN" data-bs-dismiss="modal" onClick={()=>{localStorage.setItem("color", bgColor); window.location.reload()}}>Save Changes</button>


      </div>
    </div>
  </div>

  </div>   
    
    </>
  )
}

export default Themes
