import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav
        style={{
          padding: "2%",
          marginLeft: "2%",
        }}
      >
        <Link
          to="/"
          style={{
            padding: "2%",
            marginLeft: "2%",
          }}
        >
          Home
        </Link>
        <Link
          to="/Alltext"
          style={{
            padding: "2%",
            marginLeft: "2%",
          }}
        >
          All texts
        </Link>
      </nav>
    </div>
  );
}

export default Home;
