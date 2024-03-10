import Body from "./components/Body";
import Jobs from "./components/Jobs";
import jobs from "./Jobs"

function App() {
  return (
    <div className="overflow-x-hidden lg:bg-zinc-200 w-full ">
      <Body />
      <div className="md:flex md:gap-11">
        <Jobs 
        name = {jobs[0].jobName}
        desc = {jobs[0].jobDesc}
        />
        <Jobs 
        name = {jobs[1].jobName}
        desc = {jobs[1].jobDesc}
        />
        <Jobs 
        name = {jobs[2].jobName}
        desc = {jobs[2].jobDesc}
        />
        <Jobs 
        name = {jobs[3].jobName}
        desc = {jobs[3].jobDesc}
        />
      </div>
    </div>
  );
}

export default App;
