const BlogCard = ({ title, content, author, date }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p className="blog-content">{content}</p>
      <div className="blog-footer">
        <div className="author-info">
          <div className="author-avatar">
            <span>{author.charAt(0).toUpperCase()}</span>
          </div>
          <span className="author-name">{author}</span>
        </div>
        <span className="post-date">{date}</span>
      </div>
    </div>
  );
};

export default BlogCard; 