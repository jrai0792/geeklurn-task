import React, {useState} from 'react';
import './Home.css';

export default function Home() {

  const [theme, setTheme] = useState("light");
  const [btnClr, setBtnClr] = useState("white");
  const [secBtn, setSecBtn] = useState("black");

  const onBtnClickDark = () => {
    setTheme("dark");
    setBtnClr("darkPri");
    setSecBtn("darksec");
  }

  const onBtnClickLight = () => {
    setTheme("light");
    setBtnClr("lightPri");
    setSecBtn("lightsec");
  }

  const onBtnClickContrast = () => {
    setTheme("contrast");
    setBtnClr("contrastPri");
    setSecBtn("contrastsec");
  }

  const onPriBtnClick = () => {
    if(theme === "sec-dark") {
      setTheme("dark");
    }else if(theme === "sec-light") {
      setTheme("light");
    }else if(theme === "sec-contrast") {
      setTheme("contrast");
    }
  }

  const onSecBtnClick = () => {
      if(theme === "dark") {
        setTheme("sec-dark");
      } else if(theme === "light") {
        setTheme("sec-light");
      } else if(theme === "contrast") {
        setTheme("sec-contrast");
      } 
  }

  

  return (
    <div className={theme} id="container">
      <h1>Welcome to JS buttons and Colors Page</h1>
      <h3>Click on the below buttons to switch to different themes.</h3>
      <p>Selected theme is {theme}</p>
      <button className="btn btn-dark" onClick={onBtnClickDark}>Dark</button>
      <button className="btn btn-light" onClick={onBtnClickLight}>Light</button>
      <button className="btn contrast" onClick={onBtnClickContrast}>Contrast</button>
      <div className="form-container">
        <form>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name"></input><br />
          <label htmlFor="email">Email : </label>
          <input type="email" id="email"></input><br />
          <label htmlFor="theme">Favorite Theme : </label>
          <input type="radio" id="dark" name="theme" value="Dark"></input>
          <label htmlFor="dark">Dark</label>
          <input type="radio" id="light" name="theme" value="Light"></input>
          <label htmlFor="light">Light</label>
          <input type="radio" id="contrast" name="theme" value="Contrast"></input>
          <label htmlFor="contrast">Contrast</label><br />
          <label htmlFor="colour">Favorite colour : </label>
          <input type="checkbox" id="colour1" name="colour1" value="Red"></input>
          <label htmlFor="colour1">Red</label>
          <input type="checkbox" id="colour2" name="colour2" value="Green"></input>
          <label htmlFor="colour2">Green</label>
          <input type="checkbox" id="colour3" name="colour3" value="Blue"></input>
          <label htmlFor="colour3">Blue</label><br />
          
        </form>
        <button className="btn">Submit</button><br />
        <button className="btn" id={btnClr} onClick={onPriBtnClick}>Primary</button>
        <button className="btn btn-sec" id={secBtn} onClick={onSecBtnClick}>Secondary</button>
      </div>
      
    </div>
  )
}