import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */
//TODO: still need to add updateTodo but haven't written it yet
function EditableTodoList({ todos, removeTodo, updateTodo } ) {

  return (
      <div>
        { todos.map(todo => (
        <EditableTodo
          todo={ todo }
          removeTodo={ removeTodo }
          updateTodo={ updateTodo }
        />)) }
      </div>
  );
}

export default EditableTodoList;
