import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Fragment } from 'react';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/details/:projectId" element={<ProjectDetails />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
