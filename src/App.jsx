/* eslint-disable react/prop-types */
import "./App.css";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "./assets/img.js";

function App() {
  return (
    <>
      <PhotoGal />
    </>
  );
}

const photos = [
  {
    img: img1,
    desc: "Close-up Photo of Glowing Blue Butterflies",
    id: 1,
  },
  {
    img: img2,
    desc: "Selective Focus Photography of Turned-on Black Met",
    id: 2,
  },
  {
    img: img3,
    desc: "Green Tree Plant Leaves",
    id: 3,
  },
  {
    img: img4,
    desc: "Brown Wooden Dock",
    id: 4,
  },
  {
    img: img5,
    desc: "Brown Wooden House on Orange Leaf Trees",
    id: 5,
  },
  {
    img: img6,
    desc: "Lady in Beach Silhouette during Daytime Photography",
    id: 6,
  },
  {
    img: img7,
    desc: "Woman Holding Fireflies",
    id: 7,
  },
  {
    img: img8,
    desc: "Close-Up Photo of Red Candles",
    id: 8,
  },
  {
    img: img9,
    desc: "Depth of Field Photo of Boy Wearing Blue Cap",
    id: 9,
  },
];

function PhotoGal() {
  return (
    <>
      <h1>ImageGal</h1>

      <section className="photoGal">
        {photos.map((photo, index) => {
          return <Photo {...photo} key={photo.id} number={index} />;
        })}
      </section>
    </>
  );
}

function Photo(props) {
  const { img, desc, number } = props;
  const displayPhoto = () => {
    alert(desc);
  };
  return (
    <article className="photo">
      <img src={img} alt={desc} loading="lazy" />
      <h2>{desc}</h2>
      <button className="btn" type="button" onClick={displayPhoto}>
        View
      </button>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
}

export default App;
