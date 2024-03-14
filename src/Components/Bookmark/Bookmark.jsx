import propTypes from 'prop-types';
const   Bookmark = ({bookmark}) => {
  const{title} = bookmark;
  console.log(bookmark);
  return (
    <div>
      <h3 className='text-3xl'>{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: propTypes.object
}
export default Bookmark;