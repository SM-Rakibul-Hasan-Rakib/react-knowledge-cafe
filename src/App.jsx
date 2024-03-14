import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmark from "./Components/Bookmark/Bookmark";
import Header from "./Components/Header/Header";

// import Header from './Components/Header/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <div className="md:flex">
    <Blogs></Blogs>
    <Bookmark></Bookmark>
    </div>
    
      {/* <h1 className="text-6xl">Knowledge Cafe</h1> */}
    </>
  );
}

export default App;
