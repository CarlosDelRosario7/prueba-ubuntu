import './index.css'; // Assuming you have some styles for this component
import {useState} from 'react';

function MyComponent() {
  // Fecht a localhost:3000/api
  const [data, setData] = useState(null);
  fetch('http://localhost:3000/api')
    .then(response => response.json())
    .then(json => {
      setData(json.message);
      console.log(data);
    })
    .catch(error => console.error('Error fetching data:', error));
  return (
    <>
      <div className="my-component">
        <h2>My Component</h2>
        <p>This is a simple component that fetches data from an API.</p>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
}

export default MyComponent;