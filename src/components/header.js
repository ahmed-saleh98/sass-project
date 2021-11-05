import Navbar from "./navbar";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Compositions</h1>
          <p>Free Psd Website Template</p>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
