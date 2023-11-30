import { useState, useEffect } from "react";
import styles from './Leetcode.module.css';

function Leetcode() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://leetcodestats.cyclic.app/icuevas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchData();
  },[]);

  return (
    <div className={styles.leetsection}>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>totalSolved: {data.totalSolved}</p>
          <p>easySolved: {data.easySolved}</p>
          <p>mediumSolved: {data.mediumSolved}</p>
          <p>hardSolved: {data.hardSolved}</p>
        </div>
      )}
    </div>
  )
}

export default Leetcode;