import React from "react";
import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */



// Fix was returning null vs undefined.
function TopTodo({todos}) {
  if (todos.length === 0) return null;

  let top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
    console.log("top:",top)

    return <Todo todo={top} />; // {top: {todo: }} // {key: value}

  // if (todos.length > 0) {
  //   let top = todos.reduce(
  //     // lowest-priority # is the highest priority
  //       (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
  //       return <Todo  id={top.id} title={top.title} description={top.description} priority={top.priority} />;
  // }
}


export default TopTodo;