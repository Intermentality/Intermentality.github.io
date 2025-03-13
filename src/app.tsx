import Navbar from './Components/Navbar'
import Background from './Components/Background';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home'
import Projects from './Pages/Projects'

import PGAS24Game from './Pages/ProjectsPage/PGAS24Game';
import PGAS25Game from './Pages/ProjectsPage/PGAS25Game';
import PortfolioLog from './Pages/ProjectsPage/PortfolioLog';
import PGAS25Fail from './Pages/ProjectsPage/PGAS25Fail';

export const App: React.FC = () => {
    return <>
        {<Background />}

        {/* Top bar stuff */}
        <div className='z-1 relative'>
          {<Navbar />}
        </div>

        {/* Main page stuff */}
        <div className='z-0 pt-2'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proj" element={<Projects />} />

            {/* Side Pages */}
            <Route path="/proj-pgas24-game" element={<PGAS24Game />} />
            <Route path="/proj-pgas25-game" element={<PGAS25Game />} />
            <Route path="/proj-pgas25-fail" element={<PGAS25Fail />} />
            <Route path="/proj-portfolio" element={<PortfolioLog/>} />
          </Routes>
        </div>
    </>;
}