/* eslint-disable react/prop-types */

function Photo(props) {
  const { img, desc, number } = props;

  const displayPhoto = () => {
    const popupWindow = window.open("", "_blank", "width=600,height=600");
    const popupDocument = popupWindow.document;

    popupDocument.write(`
      <html>
        <head>
          <title>${desc}</title>
          <style>
            body {
              margin: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              background-color: black;
            }
            img {
              max-width: 100%;
              max-height: 100%;
            }
          </style>
        </head>
        
        <body>
          <img src="${img}" alt="${desc}" />
        </body>
      </html>
    `);
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

export default Photo;
