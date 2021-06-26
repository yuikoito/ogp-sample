import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>投稿: {id}</p>;
};

export default Post;
