import { useNavigate } from "react-router-dom";


function Home() {
  
  const navigate = useNavigate();

    return (
      <div className="Home">
        <button onClick={() => navigate('/addshelf')}>Create new warehouse</button>
      </div>
    );
}

export default Home;