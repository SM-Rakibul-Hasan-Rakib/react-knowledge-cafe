import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { title, cover,hashtags, author, author_img, posted_date, reading_time } = blog;
  return (
    <div>
      <img src={cover} alt={`cover picture of title ${title}`} />
      <div></div>
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
        }
      </p>
    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
