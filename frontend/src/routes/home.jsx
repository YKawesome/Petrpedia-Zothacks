import { Outlet, Link } from "react-router-dom"; 


export default function home() {
    return (
      <>
        <header>
          <input className = "headerEle" type="text" placeholder="Search.."></input>
          <a className = "headerEle" href="#profile">
            <img className = "circle" src = "https://static.thenounproject.com/png/2729266-200.png" height = "40"></img>
          </a>
          <a className = "headerEle" href="#profile">
            <img className = "circle" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height = "40"></img>
          </a>
          
        </header>
        <h1 className = "welcome">Welcome To</h1>
        <h1 className = "title">Petrpedia</h1>
        <p>Petrpedia is a ultimate hub for Petr fans, with features to request trades, browse Petrs and contribute to the ever-growing community online.</p>
        <button className="login">Login</button>
        <a href='/new_template'><button className="createTemplate">+ Create Template</button></a>
        <br></br>
        <footer>
          <h3>Contact</h3>

        </footer>
      </>
    );
  }
