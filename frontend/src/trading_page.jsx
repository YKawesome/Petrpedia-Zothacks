function tradingPage() {
    return <><header>
    <input class = "headerEle" type="text" placeholder="Search.."></input>
    <a class = "headerEle" href="#profile">
      <img class = "circle" src = "https://static.thenounproject.com/png/2729266-200.png" height = "40"></img>
    </a>
    <a class = "headerEle" href="#profile">
      <img class = "circle" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
      height="40px"></img>
    </a>
    
  </header>
  
  <body>

    <div class="trade_search">
      <h1 class="trade_title">Trade Your Petrs!</h1>
        <form id="form">
            <input type="search" id="query"
            placeholder="Search stickers or users..."/>
            <button type="submit">Search</button>
        </form>
    </div>
  </body></>;
}
export default tradingPage;