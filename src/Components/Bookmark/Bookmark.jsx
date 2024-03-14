const Bookmark = ({ booksmarks }) => {
  return (
    <div className="md:w-1/3">
      <h2 className="text-3xl">Book Mark : {booksmarks.length}</h2>
    </div>
  );
};

export default Bookmark;
