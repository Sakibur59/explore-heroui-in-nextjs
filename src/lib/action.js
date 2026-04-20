import { revalidatePath } from "next/cache";
import { postTask } from "./task";

export const createATask = async(formData) => {
    'use server'
    // const name= formData.get('name');
    const newTask = Object.fromEntries(formData.entries())
    console.log("Adding a task name",formData);

    const res=await postTask(newTask);

    if(res.ok){
        revalidatePath('/tasks');
    }
    return res;
}