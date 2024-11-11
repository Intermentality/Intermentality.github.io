import Navbar from './Components/Navbar'
import { Background } from './Components/Background';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home'
import Projects from './Pages/Projects'

import FirstGLSL from './Pages/ProjectsPage/FirstGLSL';
import PGASGame from './Pages/ProjectsPage/PGASGame';

export const App: React.FC = () => {
    return <>
      {<Background />}

        {/* Top bar stuff */}
        {<Navbar />}

        {/* Main page stuff */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proj" element={<Projects />} />

          {/* Side Pages */}
          <Route path="/proj-first-glsl" element={<FirstGLSL />} />
          <Route path="/proj-pgas-game" element={<PGASGame />} />
        </Routes>
    </>;
}