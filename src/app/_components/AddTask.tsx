"use client"
import React, {useState} from 'react'
import { Button, TextField } from '@mui/material'
import { addTodo } from '@/api'
import { useRouter } from 'next/navigation'

function AddTask() {
    const [newTask, setNewTask] = useState<string>('')
    const router = useRouter();

    const handleSubmitNewTask: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        if(newTask.trim() === '') return
        await addTodo({
            task: newTask 
        })
        setNewTask('')
        router.refresh();
      
    }

  return (
   <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
    <form onSubmit={handleSubmitNewTask}>
          <TextField
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            variant="outlined"
            size="small"
            placeholder=""
            sx={{ flex: 1,
                marginRight: 4,
             }}
          />
          <Button
          type='submit'
            variant="contained"
            sx={{
              bgcolor: 'rgb(164,255,237)',
              color: 'black',
              fontWeight: 700,
              px: 2
            }}
            disableElevation
          >
            新增
          </Button>
          </form>
        </div>
  )
}

export default AddTask
