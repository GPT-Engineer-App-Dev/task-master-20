import TaskList from "@/components/TaskList";
import AddTaskInput from "@/components/AddTaskInput";

const TodayPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today</h1>
      <AddTaskInput />
      <TaskList />
    </div>
  );
};

export default TodayPage;