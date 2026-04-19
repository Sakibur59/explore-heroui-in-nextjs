import TaskCard from "@/component/TasksCard";
import { getTask } from "@/lib/task";
import React from "react";

const TaskPage = async () => {
  const tasks = await getTask();
  return (
    <div>
      <h1>Length:{tasks.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
