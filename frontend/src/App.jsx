import { useEffect, useState } from "react";
import { getHomeMessage, getAboutMessage } from "./api";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  
  useEffect(() => {
    onClickHandler("home");
  }, []);

  const onClickHandler = (type) => {
    setError("");
    if(type === "home"){
      getHomeMessage()
      .then(setData)
      .catch((err) => setError(err.message));
    }
    if(type === "about"){
      getAboutMessage()
      .then(setData)
      .catch((err) => setError(err.message));
    }
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Django + React Application</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!data && !error && <p>Loading...</p>}

      {data && (
        <>
          <h2>{data.message}</h2>
          <p>Status: {data.status}</p>
        </>
      )}
      <button onClick={() => onClickHandler("home")}> home </button>
      <button onClick={() => onClickHandler("about")}> about </button>
    </main>
  );
}

export default App;