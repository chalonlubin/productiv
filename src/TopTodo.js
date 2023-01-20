import React from "react";
import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  if (todos.length === 0) return null;

  let top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
    console.log("top:",top)

    return <Todo todo={top} />; // {top: {todo: }} // {key: value}
}

export default TopTodo;