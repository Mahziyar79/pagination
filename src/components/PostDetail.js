import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState();

  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(res.data);
      setPostDetail(res.data);
    };  
    
    fetchPost();
  }, []);

  if (!postDetail) {
    return <Spinner />
  }
  return (
    <div className="post_detail_page">
      <h1 className="post_detail_heading">Post Detail</h1>
      <p className="post_detail_title">Post Title is : {postDetail.title}</p>
      <p className="post_detail_desc">Post description is : {postDetail.body}</p>
      <button className="post_detail_btn" onClick={() => navigate(-1)}>Back</button>{" "}
    </div>
  );
};

export default PostDetail;
