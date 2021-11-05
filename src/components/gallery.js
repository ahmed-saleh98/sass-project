import playerImg from "../images/player.jpg";

const Gallery = () => (
  <div id="gallery" className="gallery">
    <div className="container">
      <div className="bordered-head">
        <h2>Gallery</h2>
      </div>
      <div className="gallery-box-container">
        <div className="gallery-box">
          <img src={playerImg} className="player-img" alt="player-img"></img>
        </div>
        <div className="gallery-box">
          <img src={playerImg} className="player-img" alt="player-img"></img>
        </div>
        <div className="gallery-box">
          <img src={playerImg} className="player-img" alt="player-img"></img>
        </div>
        <div className="gallery-box">
          <img src={playerImg} className="player-img" alt="player-img"></img>
        </div>
        <div className="gallery-box">
          <img src={playerImg} className="player-img" alt="player-img"></img>
        </div>
        <div className="gallery-box">
          <img src={playerImg} className="player-img" alt="player-img"></img>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
