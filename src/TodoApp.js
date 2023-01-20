import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function createTodo(todo) {
    let newTodo = { ...todo, id: uuid()};
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  // function update(updatedTodo) {
  //   // get old todo and update the info over the old info
  //     // could use id to find object and overwrite all data
  //   let newData =

  // }

  //TODO: gist standard removal of item from an Array
  /** delete a todo by id */
  function removeTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  //EditableToDoList should take updateTodos and removeTodos NOT createTodo
  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            <h3 className="mb-3">Todos</h3>
              <EditableTodoList todos={ todos } removeTodo={ removeTodo } />
              <span className="text-muted">You have no todos.</span>
          </div>

        {/* (if no top todo, omit this whole section) */}
          <div className="col-md-6">
          {todos.length !== 0 && (
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          )}
            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm/>
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;