import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './Banner';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [showBanner, setShowBanner] = useState(true);
  const [bannerDescription, setBannerDescription] = useState('');
  const [bannerLink, setBannerLink] = useState('');
  const [bannerTimer, setBannerTimer] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/banner')
      .then(response => {
        const banner = response.data;
        setBannerDescription(banner.description);
        setBannerLink(banner.link);
        setBannerTimer(banner.timer);
        setShowBanner(banner.showBanner);
      })
      .catch(error => console.error('Error fetching banner data:', error));
  }, []);

  const updateBanner = () => {
    axios.post('http://localhost:5000/api/banner', {
      description: bannerDescription,
      link: bannerLink,
      timer: bannerTimer,
      showBanner
    })
    .then(() => alert('Banner updated successfully'))
    .catch(err => console.error('Error updating banner:', err));
  };

  return (
    <div className="App">
      {showBanner && (
        <Banner
          description={bannerDescription}
          link={bannerLink}
          timer={bannerTimer}
        />
      )}
      <Dashboard
        setBannerDescription={setBannerDescription}
        setBannerLink={setBannerLink}
        setBannerTimer={setBannerTimer}
        toggleBanner={() => setShowBanner(!showBanner)}
        updateBanner={updateBanner}
      />
    </div>
  );
}

export default App;
