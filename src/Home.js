import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setIsLoading(false);
    };
    fetchPost();
  }, []);

  const indexOfLastPost = postPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = (number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <Posts posts={currentPost} isLoading={isLoading} />
      <Pagination
        totalPost={posts.length}
        postPerPage={postPerPage}
        changePage={changePage}
      />
    </div>
  );
};

export default Home;
