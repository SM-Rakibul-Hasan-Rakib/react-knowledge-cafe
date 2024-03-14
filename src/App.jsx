import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmark from "./Components/Bookmark/Bookmark";
import Header from "./Components/Header/Header";

// import Header from './Components/Header/Header'

function App() {
  // const [count, setCount] = useState(0)
  const [booksmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    console.log(blog);
    const newBookmarks = [...booksmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmark booksmarks={booksmarks}></Bookmark>
      </div>

      {/* <h1 className="text-6xl">Knowledge Cafe</h1> */}
    </>
  );
}

export default App;
