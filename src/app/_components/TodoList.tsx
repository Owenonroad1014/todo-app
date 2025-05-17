"use client"
import React, {useState} from 'react'
import { Button, ButtonGroup, List} from '@mui/material'
import { ITask } from '@/types/task'
import Task from './Task'

interface TodoListProps {
  tasks: ITask[]
}

const  TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    const [tab, setTab] = useState<"all" | "completed">('all') 

    const fileteredTasks = tasks.filter((task) => tab === "all" ? task : task.is_completed)

  return (
    <><ButtonGroup sx={{ mb: 2 }}>
          <Button
            variant={tab === "all" ? "contained" : "outlined"}
            sx={{
              bgcolor: tab === "all" ? 'rgb(164,255,237)' : '#fff',
              color: 'black',
              fontWeight: 700,
              border: 'none',
              boxShadow: 'none',
              '&:hover': { bgcolor: 'rgb(164,255,237)' }
            }}
            onClick={() => setTab('all')}
          >
            all
          </Button>
          <Button
            variant={tab === "completed" ? "contained" : "outlined"}
            sx={{
              bgcolor: tab === "completed" ? 'rgb(164,255,237)' : '#fff',
              color: 'black',
              fontWeight: 700,
              border: 'none',
              boxShadow: 'none',
              '&:hover': { bgcolor: '#fff' }
            }}
            onClick={() => setTab('completed')}
          >
            completed
          </Button>
        </ButtonGroup>
        <List>
         {fileteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </List></>
   
  )
}

export default TodoList
