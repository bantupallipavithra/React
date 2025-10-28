import "./Style.css"
function Header(){
    return(
      <div>
        <header className="header">
        <h2 className="logo">Freeze</h2>
        <nav>
          <ul className="nav-links">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
        <div className="hero">
        <img
          src="https://sample-website-pi.vercel.app/images/bg-home.jpg"
          alt="Freeze Yogurt"
          className="hero-image"
        />
      </div>
      <div className="circle">Freeze Delight</div>
      </div>
    )
}
export default Header;

