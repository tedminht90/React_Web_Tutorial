import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ted Minh');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        //console.log(blog); //check ở mục console có nhận được dữu liệu vừa nhập hay không

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('new blog added');
            setIsPending(false) //thời điểm này là đã add xong nên setIsPending = false
            //history.go(-1)
            history.push('/'); // Sau khi add blog xong sẽ quay trở về trang home (/)
        });

        
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} //hàm này sẽ cập nhật lại const [title, setTitle] = useState(''); sau mỗi lần nhập
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} //hàm này sẽ cập nhật lại const [body, setBody] = useState(''); sau mỗi lần nhập
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} //hàm này sẽ cập nhật lại const [author, setAuthor] = useState(''); sau mỗi lần nhập
                >
                    <option value="Ted Minh">Ted Minh</option>
                    <option value="Ted">Ted</option>
                </select>
                { !isPending && <button>Add Blogs </button>}
                { isPending && <button disabled>Adding blog ... </button>}
                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}
            </form>
        </div>

     );
}
 
export default Create;