import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      Home
      <h1>Hello home page</h1>
      <Link to="about">click to about</Link>
    </div>
  );
};

export default Home;
