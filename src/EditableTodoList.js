import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - updateTodo(): fn to call to update a todo
 * - removeTodo(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, removeTodo, updateTodo } ) {

  return (
      <div>
        { todos.map(todo => (
        <EditableTodo
          todo={ todo }
          removeTodo={ removeTodo }
          updateTodo={ updateTodo }
          key={ todo.id }
        />)) }
      </div>
  );
}

export default EditableTodoList;
