import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I am a Developer. I have extensive experience in building UI interfaces and web application",
    tags: ["web", "react", "next"],
    priority: "Hign",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  // console.log(tasks);

  const handleAddEditTask = (newTask, isAdd) => {
    console.log(newTask);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowAddModal(true);
  };

  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToEdit(null);
  };
  const handleDelete = (id) => {
    const deleteData = tasks.filter((task) => task.id !== id);
    setTasks(deleteData);
  };
  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFav = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  };

  const handleSearch = (searchTerm) => {
    console.log("lean");
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks([...filtered]);
  };
  return (
    <section className="mb-20 px-4 sm:px-6 md:px-8 lg:px-10" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onCloseClick={handleCloseClick}
          onSave={handleAddEditTask}
          taskToEdit={taskToEdit}
        />
      )}

      <div className="container max-w-8xl mx-auto">
        <SearchTask onSearch={handleSearch} />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddClick={() => setShowAddModal(true)}
            onDeleteAll={handleDeleteAll}
          />
          <div className="mt-6 overflow-x-auto">
            {tasks.length > 0 ? (
              <TaskList
                task={tasks}
                onEdit={handleEditTask}
                onDelete={handleDelete}
                onFav={handleFav}
              />
            ) : (
              <NoTaskFound />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
