import Body from "./components/Body";
import Jobs from "./components/Jobs";
import jobs from "./Jobs"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Body />
      <div>
        <Jobs 
        name = {jobs[0].jobName}
        desc = {jobs[0].jobDesc}
        />
      </div>
    </div>
  );
}

export default App;
