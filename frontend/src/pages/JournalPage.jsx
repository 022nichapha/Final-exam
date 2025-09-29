import { useEffect, useState } from "react";
import api from "../api";

function JournalPage() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    api
      .get("/journals")
      .then((res) => setJournals(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Journals</h1>
      <ul>
        {journals.map((j, i) => (
          <li key={i}>
            {j.title} - {j.issn} (Vol. {j.volume}, No. {j.issue})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JournalPage;
