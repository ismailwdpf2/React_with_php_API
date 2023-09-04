import './Players.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Players = () => {
  const [apiData, setApiData] = useState([]);
  const api = 'http://localhost/WDPF/CI/mid-project/form-api-Codeigniter/demo1/public/api/products';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setApiData(response.data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container row d-flex justify-content-space-between">
      {apiData.map((item) => (
        <div className="card m-4" key={item.id}>
          <img src={item.image} className="card-img-top cardimg " alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Country: {item.country}</p>
            {/* <p className="card-text">ID: {item.id}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
