// here is the api url https://jsonplaceholder.org/posts get all posts


import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.org/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(item => (
        <><h4>{item.title}</h4>
        <p>{item.content}</p>
        
        <img src={item.thumbnail} alt="Flowers in Chania" />
        <p>{item.status}</p>
        </>
      ))}
    </ul>
  );
};

export default DataFetcher;