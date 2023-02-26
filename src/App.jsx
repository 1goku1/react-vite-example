import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


// 4:42:30
function App() {

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );

}

export default App;

