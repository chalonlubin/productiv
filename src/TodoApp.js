import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";

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

function TodoApp(initialTodos) {
  const [todos, setTodos] = useState({initialTodos});

  /** add a new todo to list */
  function create(todo) {
    let newTodo = { ...todo};
    setTodos(todos => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    // get old todo and update the info over the old info
      // could use id to find object and overwrite all data
    let newData =

  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            <EditableTodoList /> OR
            <span className="text-muted">You have no todos.</span>
          </div>

          <div className="col-md-6">
            (if no top todo, omit this whole section)
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo />
            </section>

            <section>
              <h3 className="mb-3">Add Nü</h3>
              FIXME
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;