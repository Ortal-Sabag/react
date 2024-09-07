import { useState } from 'react';
import './App.css';

import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { Column } from './component/Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

function App() {
  const [tasks, setTask] = useState([
    {id: 1, title: "Add tests to homepage"},
    {id: 2, title: "Fix styling in about section"},
    {id: 3, title: "Learn how to center a div"},
  ]);

  const addTask = title => {
    setTask(tasks => [...tasks, {id:tasks.length +1, title}])
  }

  const getTaskPos =  id => tasks.findIndex(task => 
    task.id === id)

  const handleDragEnd = event =>{
    const {active, over} = event;
    if (active.id === over.id) return;

    setTask(tasks => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(tasks, originalPos, newPos);
    })
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor , {
      coordinateGetter: sortableKeyboardCoordinates
    })

  )

  return (
    <div className='App'>
      <h1>My Tasks ✅</h1>
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <input onSubmit={addTask}></input>
        <Column id= "toDo" tasks={tasks}/>
      </DndContext>
    </div>
  )
}

export default App
