import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "@/lib/api";

const AddTaskInput = () => {
  const [taskName, setTaskName] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation(addTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
      setTaskName("");
    },
  });

  const handleAddTask = () => {
    if (taskName.trim()) {
      mutation.mutate({ name: taskName });
    }
  };

  return (
    <div className="flex items-center mb-4">
      <Input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a task"
        className="mr-2"
      />
      <Button onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default AddTaskInput;