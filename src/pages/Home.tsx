import React,{useEffect} from "react";
import Layout from "../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

  const usenavigation=useNavigate();
  // User sessionStorage
useEffect(()=>{
let username=sessionStorage.getItem('username');
if(username==='' || username===null){
  usenavigation('/login')
}
},[])


  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
