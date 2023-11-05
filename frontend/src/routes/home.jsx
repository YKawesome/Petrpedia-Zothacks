import { Outlet, Link } from "react-router-dom"; 


export default function home() {
    return (
      <>
        <header>
          <input type="text" placeholder="Search.."></input>
          <a href="#profile">
            <img src = "https://static.thenounproject.com/png/2729266-200.png" height = "40"></img>
          </a>
          <a href="#profile">
            <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height = "40"></img>
          </a>
          
        </header>
        <h1 class = "welcome">Welcome To</h1>
        <h1 class = "title">Petrpedia</h1>
        <p>Petrpedia is a ultimate hub for Petr fans, with features to request trades, browse Petrs and contribute to the ever-growing community online.</p>
        <button>Login</button>
        <button>+ Create Template</button>
        <br></br>
        <footer>
          <h3>Contact</h3>

        </footer>
      </>
    );
  }
