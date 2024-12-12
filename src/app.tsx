import Navbar from './Components/Navbar'
import { Background } from './Components/Background';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home'
import Projects from './Pages/Projects'

import FirstGLSL from './Pages/ProjectsPage/FirstGLSL';
import PGASGame from './Pages/ProjectsPage/PGASGame';
import EINTY_IWeb from './Pages/ProjectsPage/EINTY-IWeb';
import PortfolioLog from './Pages/ProjectsPage/PortfolioLog';

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
            <Route path="/proj-first-glsl" element={<FirstGLSL />} />
            <Route path="/proj-pgas-game" element={<PGASGame />} />
            <Route path="/proj-einty-iweb" element={<EINTY_IWeb/>} />
            <Route path="/proj-portfolio" element={<PortfolioLog/>} />
          </Routes>
        </div>
    </>;
}