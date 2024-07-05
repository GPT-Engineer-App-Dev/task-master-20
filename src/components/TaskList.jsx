import { useQuery } from "@tanstack/react-query";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { fetchTasks } from "@/lib/api";

const TaskList = () => {
  const { data: tasks, error, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading tasks</div>;

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center mb-2">
          <Checkbox checked={task.completed} />
          <span className="ml-2">{task.name}</span>
          {task.dueDate && <span className="ml-2 text-muted">{task.dueDate}</span>}
          <Button variant="outline" size="sm" className="ml-auto">Edit</Button>
          <Button variant="outline" size="sm" className="ml-2">Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;