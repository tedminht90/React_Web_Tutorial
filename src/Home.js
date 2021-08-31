import BlogList from './BlogList';
import useFetch from './useFetch'


const Home = () => {
    /*
    Sử dụng useState khi ấn vào "Click me" thay dổi giá trị 
    const [name, setName] =  useState('Teddy');
    const [age, setAge] = useState(25);
    const handleClick = () =>{
       setName('Ted Minh')
       setAge(31)
    }
    const handleClickAgain = (name, e) =>{
        console.log ('hello ' + name, e.target );
    }
    */
   //data được lấy từ useFetch.js sang bên Home.js sẽ đc chuyển thành blogs (không phải thay đổi biến ở BlogList blogs={data})
  const { data : blogs , isPending, error} = useFetch('http://localhost:8000/blogs');
    // const [blogs, setBlogs] = useState(false);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(false);

    // const [name, setName] = useState('ted')    

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id); //Lọc id ở blog.id không trùng với handleDelete = (id) -> tại thành mảng mới newBlogs
    //     setBlogs(newBlogs); //Gọi setBlogs với mảng mới newBlogs
    // }
    
    
    return (  
        <div className="home">
            {/* <p>{ name } is {age} years old </p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Teddy', e)}>Click me again</button> */}
            
            {/* Thưc hiện javascript phải đặt trong {}
            Ở đây là tạo mẫu có điều kiện, đánh giá bên trái blogs nếu false thì sẽ không chạy
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}. Vì blogs trả về sai nên nó sẽ
            không chạy bên phải. Nếu blogs là true nó sẽ xuất ra màn hình không phải những gì chúng ta đang làm ở đây nhưng 
            sau đó những gì nó làm sẽ chuyển sang bên phải của logic và khi đánh giá điều này nó sẽ xuất ra màn hình
            Để chạy đúng thì phía bên trái phải đúng.
            
            */}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>} Tạo blogs(được lấy ở Home.js) ={blogs} để truyền tham số sang props của BlogList */}
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
            
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'ted' )} title="Ted's Blog!"/> Sử dụng filter để lọc author === ted */}
            {/* <button onClick={()=> setName('teddy')}>change name</button>
            <p>{name}</p> */}
            
        </div>
    );    
}
 
export default Home;