import store from "./store";

function App() {
  const [loading, images, fetchImages] = store((state) => [
    state.loading,
    state.images,
    state.fetchImages,
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-center flex-column">
          <h1>Zustand</h1>
          <button className="btn" onClick={() => fetchImages()}>
            Fetch Images
          </button>
          {loading && <h1>loading...</h1>}
          <div className="flex-center image-wrapper">
            {images &&
              images.map(({ download_url, id, author }) => (
                <img
                  className="image"
                  key={id}
                  src={download_url}
                  alt={author}
                />
              ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
