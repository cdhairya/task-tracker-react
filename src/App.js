import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Jan 1st at 1.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 2nd at 2.30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "March 3rd at 3.30pm",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
