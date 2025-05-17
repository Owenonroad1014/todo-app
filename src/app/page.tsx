import {
  Container,
  Typography,
  Paper
} from '@mui/material';
import AddTask from './_components/AddTask';
import TodoList from './_components/TodoList';
import { getAllTodos } from '@/api';


export default async function TodoStatic() {
  const tasks =  await getAllTodos();
  return (
    <Container maxWidth="sm" sx={{
      mt: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
    }}>
      <Paper sx={{ p: 4, borderRadius: 3, minWidth: 340 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{mb:2}}>
          To-do list
        </Typography>
        <AddTask />
        <TodoList tasks={tasks}/>
      </Paper>
    </Container>
  );
}
