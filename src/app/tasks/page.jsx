import { AddTask } from "@/component/AddTask";
import TaskCard from "@/component/TasksCard";
import { createATask } from "@/lib/action";
import { getTask } from "@/lib/task";
import React from "react";

const TaskPage = async () => {
  const tasks = await getTask();
  return (
    <div>
      <h1 className="mb-5">Length:{tasks.length}</h1>
      <AddTask createATask = {createATask}></AddTask>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
