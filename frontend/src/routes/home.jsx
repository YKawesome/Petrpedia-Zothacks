import { Outlet, Link } from "react-router-dom"; 


export default function home() {
    return (
      <>
        <div class="topnav">
          <input type="text" placeholder="Search.."></input>
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <h1>Welcome To</h1>
        <h1 class = "Title">Petrpedia!</h1>
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
