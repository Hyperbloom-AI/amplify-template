import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage.js';

const AppWithRouterAccess = () => {
    // Declare any and all pages accessible as direct slugs below. Exact implies it's the landing page.
    return (
      <Routes>
        <Route path="/" exact element={<LandingPage />}/>
      </Routes>
    )
}

export default AppWithRouterAccess;