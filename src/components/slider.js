import sliderImg from "../images/slider.jpg";
function Slider() {
  return (
    <div id="home" className="slider">
      <div className="container">
        <blockquote>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          pariatur nemo aliquid harum soluta libero! Repudiandae at quis
          exercitationem nesciunt ratione tenetur "
        </blockquote>
        <img src={sliderImg} alt="img by Rachel Xiao from Pexels"></img>
        <ul className="bullets">
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Slider;
