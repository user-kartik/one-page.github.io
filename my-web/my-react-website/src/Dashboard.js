import React, { useState } from 'react';

function Dashboard({ setBannerDescription, setBannerLink, setBannerTimer, toggleBanner, updateBanner }) {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [timer, setTimer] = useState(10);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <label>
        Banner Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label>
        Banner Link:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>

      <label>
        Banner Timer (seconds):
        <input
          type="number"
          value={timer}
          onChange={(e) => setTimer(parseInt(e.target.value))}
        />
      </label>

      <div>
        <label>Show Banner:</label>
        <input type="checkbox" onChange={toggleBanner} />
      </div>

      <button
        onClick={() => {
          setBannerDescription(description);
          setBannerLink(link);
          setBannerTimer(timer);
          updateBanner();
        }}
      >
        Update Banner
      </button>

      <button onClick={toggleBanner}>
        Toggle Banner
      </button>
    </div>
  );
}

export default Dashboard;
