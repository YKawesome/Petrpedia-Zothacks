import { Outlet, Link } from "react-router-dom"; 


export default function home() {
    return (
      <>
        <h1>Welcome To</h1>
        <h1 class = "Title">Petrpedia!</h1>
        <p>Petrpedia is a ultimate hub for Petr fans, with features to request trades, browse Petrs and contribute to the ever-growing community online.</p>
        <button>Login</button>
        <button>+ Create Template</button>
        <br></br>
        <input type="text" placeholder="Search..">

        </input>
        <footer>
          <h3>Contact</h3>

        </footer>
      </>
    );
  }
