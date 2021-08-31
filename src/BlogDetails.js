import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data : blog, error, isPending }=useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/'); //Sau khi delete xong quay về trong home (/)
        })
    }
    return ( 
        <div className="blog-details">
            {/* Check xem đã đúng parameter id chưa */}
            {/* <h2>Blog details - {id}</h2> */}
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>

                </article>
            )}
        </div>
         );
}
 
export default BlogDetails;