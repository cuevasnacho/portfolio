import { useState, useEffect } from "react";
import Charts from "react-apexcharts";
import styles from './Leetcode.module.css';

function Leetcode() {
  const [data, setData] = useState(null);
  const [series, setSeries] = useState([]);
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Easy', 'Medium', 'Hard'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'left'
        }
      }
    }]
  };
  

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
        console.log(error.message);
      }
    };
    
    fetchData();
  },[]);

  useEffect(() => {
    if (data != null)
      setSeries([data.easySolved, data.mediumSolved, data.hardSolved]);
  },[data]);

  return (
    <div className={styles.leetsection}>
      {data && (
        <div className={styles.leetsection__data}>
          <h2>Leetcode Problems</h2>
          <p>Total problems solved: {data.totalSolved}</p>
          <p>Contribution points: {data.contributionPoints}</p>
        </div>
      )}
      <Charts
        options={options}
        series={series}
        width={350}
        type="donut"
        />
    </div>
  )
}

export default Leetcode;