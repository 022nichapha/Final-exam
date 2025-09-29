import { useEffect, useState } from "react";
import api from "../api";

function ComicPage() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    api
      .get("/comics")
      .then((res) => setComics(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Comics</h1>
      <ul>
        {comics.map((c, i) => (
          <li key={i}>
            {c.series} - Vol.{c.volumeNumber} ({c.colorType})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComicPage;
