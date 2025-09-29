import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookPage from "./pages/BookPage";
import JournalPage from "./pages/JournalPage";
import ComicPage from "./pages/ComicPage";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/books">Books</Link> | <Link to="/journals">Journals</Link> |{" "}
        <Link to="/comics">Comics</Link>
      </nav>
      <Routes>
        <Route path="/books" element={<BookPage />} />
        <Route path="/journals" element={<JournalPage />} />
        <Route path="/comics" element={<ComicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
