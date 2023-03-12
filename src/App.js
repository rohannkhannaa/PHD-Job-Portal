import './App.css';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Job from "./components/Job";
import JobDetails from "./components/JobDetails"
import PostJob from "./components/PostJob"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /> <Job /> </>} />
        <Route path="/profile" element={<><Navbar/> <Profile /></>}/>
        <Route path="/job-details/:id" element={<><Navbar/> <JobDetails/></> }/>
        <Route path="/job-post" element={<><Navbar/> <PostJob/></> }/>
      </Routes>
    </BrowserRouter>
  );
}
