import { useEffect } from "react";
import { useState } from "react";
import Jobs from "./Jobs";
import JobBtn from "./JobBtn";

const url = 'https://course-api.com/react-tabs-project';


const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)


  // fetch job from url
  const fetchJobs = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error ('please check your url ')
    }
    const newJobs = await response.json()
    setIsLoading(false)
    setJobs(newJobs)
    // console.log(newJobs);
    
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  // return loading if isLoading is true
  if (isLoading) {
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }
  return <main>

  <section className="jobs-center">
      <JobBtn jobs={jobs} setCurrentItem={setCurrentItem} currentItem={currentItem} />
    <Jobs jobs={jobs} currentItem={currentItem} />
  </section>;
  </main>
};
export default App;
