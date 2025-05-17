import { ITask } from '@/types/task'; 



const API_URL = 'https://gym-backend-pi.vercel.app';

export const getAllTodos = async (): Promise<ITask[]> => {
    try{
    const res = await fetch(`${API_URL}/todo/api`, { cache: 'no-store'});
    if(!res.ok) {
        throw new Error('Failed to fetch data');

    }
    const todos = await res.json();
    if(!todos.rows || todos.rows.length === 0) {
        return [];
    }
    return todos.rows;
}catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
}
}


export const addTodo = async (task: ITask): Promise<ITask> => {
    const res = await fetch(`${API_URL}/todo/api`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    const todo = await res.json();
    return todo.rows;
}

export const deleteTodo = async (id: number): Promise<void> => {
    await fetch(`${API_URL}/todo/api/${id}`, {
        method: 'DELETE',
    });
}

export const updateTodo = async ( task: ITask): Promise<ITask> => {
    const res = await fetch(`${API_URL}/todo/api/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    const updatedTodo = await res.json();
    return updatedTodo.rows;
}