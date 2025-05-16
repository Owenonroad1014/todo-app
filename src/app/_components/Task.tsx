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
} from "@mui/material";
import { ITask } from "@/types/task";
import { MdDelete } from "react-icons/md";
import { deleteTodo, updateTodo } from "@/api";
import { useRouter } from "next/navigation";

interface TaskProps {
  task: ITask;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

const Task: React.FC<TaskProps> = ({ task }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const router = useRouter();

  const handleDeleteTask = async (id: number) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
}

  const handleUpdateTask = async (task: ITask) => {
  await updateTodo({
    ...task,
    is_completed: task.is_completed,
  });
    router.refresh();
  }

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
        secondaryAction={
          <IconButton
            edge="end"
            sx={{ color: "rgba(224, 0, 0, 0.9)" }}
            onClick={() => setOpenModalDelete(true)}
          >
            <MdDelete />
          </IconButton>
        }
      >
        <Modal
          open={openModalDelete}
          onClose={() => setOpenModalDelete(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              確定要刪除嗎?
            </Typography>
            <Button
              onClick={() =>
                { if (typeof task.id === "number") {
                  handleDeleteTask(task.id);
                }
              }}
              variant="contained"
              sx={{
                position: "absolute",
                bottom: 10,
                right: 20,
                bgcolor: "rgb(164,255,237)",
                color: "black",
                px: 2,
              }}
              disableElevation
            >
              確定
            </Button>
          </Box>
        </Modal>
        <IconButton edge="start"
         onClick={() => {
            handleUpdateTask(task);
         }}>
          <Checkbox />  
        </IconButton>
        <ListItemText primary={task.task} />
      </ListItem>
    </>
  );
};

export default Task;
