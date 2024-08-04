import "./App.css";
import ImageSlider from "./ImageSlider";
import flowerImg from "./image/vcall2.png";
import lighthouseImg from "./image/react1.png";
import dandelion from "./image/node2.png";
import vp from "./image/vp.png";
import api2 from "./image/api2.png";

function Slider() {
  const images = [flowerImg, vp, lighthouseImg, api2, dandelion];

  return (
    <div className="App">
      <div style={{ padding: "10px" }}>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default Slider;
