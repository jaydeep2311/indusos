import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Alltext">All texts</Link>
      </nav>
    </div>
  );
}

export default Home;
