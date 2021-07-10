import React from 'react';
import FakeBlock from './FakeBlock';
import './App.css';
import DataItem from './dataItem';

function App() {
  const [data, setData] = React.useState({});
  const [isLoaded, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const promise1 = new Promise((resolve, reject) => {
        fetch('data.json')
          .then(res => res.json())
          .then(res => resolve(res))
          .catch(err => reject(err));
      });

      promise1.then(res => { setData(res); return setLoading(false) }).catch(err => console.log(err));
    };
    setTimeout(getData, 2000);

    // const fetchData = async () => {
    //   const result = await fetch('data.json')
    //     .then(res => res.json())
    //     .catch(err => console.log(err));
    //   setData(result);
    //   setLoading(false);
    // }
    // setTimeout(() => {
    //   fetchData();
    // }, 2000);

  }, []);



  return (
    <div className="container">
      <div className="content">
        <h1> </h1>
        {
          isLoaded
            ? <>
              <h1>Loading data...</h1>
              <div className="items-container">
                {Array(9).fill(0).map((el, index) => <FakeBlock key={index} />)}
              </div>

            </>
            : <>
              <h3>BASE: <span className="orange-dotted">{data.base}</span></h3>
              <h3>TIMESTAMP: {data.timestamp}</h3>
              <div className="items-container">
                {Object.keys(data.rates).map(key => <DataItem key={key} county={key} value={data.rates[key]} />)}
              </div>
            </>
        }
      </div>
    </div>
  );
}

export default App;
