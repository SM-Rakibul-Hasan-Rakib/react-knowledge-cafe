import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmark from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

// import Header from './Components/Header/Header'

function App() {
  // const [count, setCount] = useState(0)
  const [booksmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    console.log(blog);
    const newBookmarks = [...booksmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleMarkAsRead = (time) => {
    console.log('marking as read', time);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmark booksmarks={booksmarks}></Bookmark>
      </div>

      {/* <h1 className="text-6xl">Knowledge Cafe</h1> */}
    </>
  );
}

export default App;
