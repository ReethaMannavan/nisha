const Posts = () => {
  const blogPosts = [
    { title: "React Basics", content: "React is a JavaScript library for building user interfaces." },
    { title: "Using Hooks", content: "Hooks let you use state and other React features without writing a class." },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-4">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
