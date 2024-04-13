import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCode from "./components/qr-code"

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/> */}

      {/* <LoadMore /> */}
      {/* <TreeView menus={menus}/>     */}
      <QRCode/>
      </div>
  );
}

export default App;
