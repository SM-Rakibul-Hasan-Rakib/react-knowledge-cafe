// import Bookmark from "../Bookmark/Bookmark";
// import PropTypes from "prop-types";

// const Bookmarks = ({ bookmarks }) => {
//   return (
//     <div className="md:w-1/3">
//       <h2 className="text-3xl">Book Mark: {bookmarks.length}</h2>
//       {bookmarks.map(bookmark => (
//         <Bookmark key={bookmark.id} bookmark={bookmark} />
//       ))}
//     </div>
//   );
// };

// Bookmarks.propTypes = {
//   bookmarks: PropTypes.array,
// };

// export default Bookmarks;












import Bookmark from "../Bookmark/Bookmark";
import propTypes from "prop-types";

const Bookmarks = ({ booksmarks }) => {
  return (
    <div className="md:w-1/3">
    <h2 className="text-3xl">Book Mark : {booksmarks.length}</h2>
    {
      booksmarks.map(bmk => <Bookmark key={bmk.id} bookmark={bmk}></Bookmark>)
    }
    </div>
  );
};

Bookmarks.propTypes = {
  booksmarks: propTypes.array,
};

export default Bookmarks;
