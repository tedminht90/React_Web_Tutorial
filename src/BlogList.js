import { Link } from "react-router-dom";
//  const BlogList = (props) => { //props sẽ lấy blogs và title được gọi ở trong BlogList ở Home.js

//     const Blogs = props.blogs;
//     const Title = props.title; 
// const BlogList =({blogs, title, handleDelete}) => { 
    const BlogList =({blogs, title}) => { 
     return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> 
                    {/* Dựa vào thuộc tính id để truyến sang BlogDetail.js */}
                    <Link to={`/blogs/${blog.id}`}> 
                        <h2>{ blog.title }</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
                
                </div>
                ))}   
        </div>
     );
}
 
export default BlogList;