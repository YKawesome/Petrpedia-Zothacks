function tradingPage() {
    return <>

                <header>
                <div class = "hTitle">Petrpedia</div>
                <input class = "headerEle" type="text" placeholder="Search.."></input>
                <a class = "headerEle" href="#profile">
                    <img class = "circle" src = "https://cdn-icons-png.flaticon.com/512/25/25694.png" height = "40"></img>
                </a>
                <a class = "headerEle" href="/new_template">
                    <img class = "circle" src = "https://static.thenounproject.com/png/2729266-200.png" height = "40"></img>
                </a>
                <a className = "headerEle" href="/trade">
                    <img className = "circle" src = "https://cdn.iconscout.com/icon/free/png-256/free-switch-1470433-1244947.png" height = "50"></img>
                </a>
                <a className = "headerEle" href="#profile">
                    <img className = "circle" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" height = "40"></img>
                </a>
                </header>
  
  <body>

    <div class="trade_search">
      <h1 className="templatecreate">Trade Your Petrs!</h1>
        <form id="form">
            <input type="search" id="query"
            placeholder="Search stickers or users..."/>
            <button type="submit">Search</button>
        </form>
    </div>
  </body></>;
}
export default tradingPage;