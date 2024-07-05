import TaskList from "@/components/TaskList";
import AddTaskInput from "@/components/AddTaskInput";

const UpcomingPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming</h1>
      <AddTaskInput />
      <TaskList />
    </div>
  );
};

export default UpcomingPage;