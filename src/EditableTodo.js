import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo }, { updateTodo }, { removeTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  console.log(removeTodo)


  const { id, title, description, priority } = todo;

  //Can these varuables be the same as isEditing variable
  //if so, I think it makes sense
  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(isEditing => !isEditing)
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    return removeTodo(id)
  }

  //Object shorthand for id good here?
  function handleSave(formData) {
    updateTodo( { id, ...formData})
    setIsEditing(false);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  // function handleSave(formData) { }

  return (
      <div className="EditableTodo">
        {isEditing ? (
           <TodoForm
            initialFormData={ todo }
            handleSave={ handleSave }/>
             ) : (
              <div className="mb-3">
              <div className="float-end text-sm-end">
                <button
                    className="EditableTodo-toggle btn-link btn btn-sm"
                    onClick={toggleEdit}>
                  Edit
                </button>
                <button
                    className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                    onClick={handleDelete}>
                  Del
                </button>
              </div>
              <Todo id={ id } title={ title } description={ description } priority={ priority }/>
            </div>
            )
        }
      </div>
  );
}

export default EditableTodo;
