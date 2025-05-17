"use client";
import React, { useState } from "react";
import {
  Button,
  ListItem,
  IconButton,
  ListItemText,
  Modal,
  Box,
  Typography,
  Checkbox,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ITask } from "@/types/task";
import { MdDelete } from "react-icons/md";
import { deleteTodo, updateTodo } from "@/api";
import { useRouter } from "next/navigation";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  // 在組件內部
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const router = useRouter();

  const handleDeleteTask = async (id: number) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  const handleUpdateTask = async (task: ITask) => {
    await updateTodo({
      ...task,
      is_completed: task.is_completed,
    });
    router.refresh();
  };
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '90%' : 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  position: 'absolute',
  bottom: isMobile ? 15 : 20,
  right: isMobile ? 15 : 20,
  bgcolor: 'rgb(164,255,237)',
  color: 'black',
  px: 2,
  '&:hover': {
    bgcolor: 'rgb(144,235,217)',
  },
};
  return (
    <>
      <ListItem
        key={task.id}
        sx={{
          bgcolor: "rgb(217,217,217)",
          borderRadius: 1.5,
          mb: 1,
          px: 2,
          minHeight: 57,
        }}
        disablePadding
      >
        <IconButton
          edge="start"
          onClick={() => {
            handleUpdateTask(task);
          }}
        >
          <Checkbox checked={task.is_completed} />
        </IconButton>
        <ListItemText primary={task.task} 
        sx={{ textDecoration: task.is_completed ? 'line-through' : 'none' }}/>
        <IconButton
          edge="end"
          sx={{ color: "rgba(254, 92, 133, 0.9)" }}
          onClick={() => setOpenModalDelete(true)}
        >
          <MdDelete />
        </IconButton>
      </ListItem>
      <Modal
        open={openModalDelete}
        onClose={() => setOpenModalDelete(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: isMobile ? 4 : 3 }}
          >
            確定要刪除嗎?
          </Typography>
          <Button
            onClick={() => {
              if (typeof task.id === "number") {
                handleDeleteTask(task.id);
              }
            }}
            variant="contained"
            sx={buttonStyle}
            disableElevation
          >
            確定
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Task;
