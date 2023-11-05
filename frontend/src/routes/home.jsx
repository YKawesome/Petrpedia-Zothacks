import { Outlet, Link } from "react-router-dom"; 


export default function home() {
    return (
      <>
        <header>
          <input type="text" placeholder="Search.."></input>
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </header>
        <h1 class = "welcome">Welcome To</h1>
        <h1 class = "title">PetrPedia</h1>
        <p>PetrPedia is a ultimate hub for Petr fans, with features to request trades, browse Petrs and contribute to the ever-growing community online.</p>
        <button>Login</button>
        <button>+ Create Template</button>
        <br></br>
        <footer>
          <h3>Contact</h3>

        </footer>
      </>
    );
  }
