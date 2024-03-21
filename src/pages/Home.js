import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
// import Banner from '../images/restrob.png';
import Bannrrr from '../images/bannrrr.png';
// import Bannerr from '../images/bannerr.png';
import "../styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage: `url(${Bannrrr})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in Gandhwani</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export default Home;