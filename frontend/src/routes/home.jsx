import { Outlet, Link } from "react-router-dom"; 


export default function home() {
    return (
      <>
        <header>
          <div class = "hTitle">Petrpedia</div>
          <input class = "headerEle" type="text" placeholder="Search.."></input>
          <a class = "headerEle" href="#profile">
            <img class = "circle" src = "https://cdn-icons-png.flaticon.com/512/25/25694.png" height = "40"></img>
          </a>
          <a class = "headerEle" href="#profile">
            <img class = "circle" src = "https://static.thenounproject.com/png/2729266-200.png" height = "40"></img>
          </a>
          <a className = "headerEle" href="#profile">
            <img className = "circle" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height = "40"></img>
          </a>
          
        </header>
        <div id = "page">
          <div id = "content">
            <h1 class = "welcome">Welcome To</h1>
            <h1 class = "title">Petrpedia!</h1>
            <p>Petrpedia is a ultimate hub for Petr fans, with features to request trades, browse Petrs and contribute to the ever-growing community online.</p>
            <button class="login">Login</button>
            <a href="/new_template"><button class="createTemplate">+ Create Template</button></a>
          </div>
        </div>
      </>
    );
  }
