import React from "react";
import { useState } from "react";

// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

const Home = () => {
    let name = 'Constant'; // not reactive
    const [name2, setName2] = useState('Variable'); // this change is reactive
    const [age, setAge] = useState(38); // this is also reactive

    const handleClick = () => {
        name = 'Changed Constant';
        setName2('Changed Variable');
        setAge(44);
    }

    // const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    //const [name3, setName3] = useState('Mario');

    /*const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }*/

    
    return ( 
        <div className="home">
            {/* {error && <div>{ error}</div>} */}
            <h2>This is the homepage! v2</h2>
            {/*<p>{ name2 } is {age} years old</p>*/}
            <p>{ name }</p>
            <p>{ name2 }</p>
            <button onClick={handleClick}>Update Variable</button>
            {/* {isPending && <div>loading...</div>} */}
            {/* {blogs && <BlogList blogs={blogs} title='All Blogs!' />} */}
            {/*{blogs && <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs" />}
            <button onClick={() => setName3('Luigi')}>change name</button>
            <p>{ name3 }</p>*/}
        </div>
     );
}
 
export default Home;