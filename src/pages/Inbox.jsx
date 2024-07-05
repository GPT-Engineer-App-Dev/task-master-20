import TaskList from "@/components/TaskList";
import AddTaskInput from "@/components/AddTaskInput";

const InboxPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <AddTaskInput />
      <TaskList />
    </div>
  );
};

export default InboxPage;