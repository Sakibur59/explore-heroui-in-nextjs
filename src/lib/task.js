import tasks from '../data/tasks.json'

export const getTask = async() => {
    return tasks
}

export const postTask = async(newTask) => {
    newTask.id = tasks.length+1;
    // tasks.unshift(newTask); for add in first
    tasks.push(newTask); //for add in last
    return {ok:true,message:"Task Added Successfully"}
}