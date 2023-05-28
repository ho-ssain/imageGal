import "./App.css";
import Photo from "./Photo";
import { photos } from "./photos";

function App() {
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

export default App;
