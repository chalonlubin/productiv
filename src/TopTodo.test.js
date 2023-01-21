import React from "react";
import { render} from "@testing-library/react";
import TopTodo from "./TopTodo";

describe("TopTodo Tests", function () {

  let todos = [
  {
    id: 1,
    title: "Top-Title",
    description: "Top-Description",
    priority: 1 },
    {
      id: 2,
      title: "Test-Title",
      description: "Test-Description",
      priority: 2 }
  ]

  it("renders without crashing", function () {
    render(<TopTodo todos={todos} />);
  });

  it("contains expected title", function () {
    const result = render(<TopTodo todos={todos} />);
    expect(result.queryByText("Top-Title")).toBeInTheDocument();
  });

  it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={todos}/>);
    expect(container).toMatchSnapshot();
  });

  it("can correctly compare int priority values", function () {
    const result = render(<TopTodo todos={todos} />);
    expect(result.queryByText("Top-Description")).toBeInTheDocument();
    expect(result.queryByText("Test-Description")).not.toBeInTheDocument();
  });

  it("returns null when todos list is empty", function () {
    todos = [];
    const result = render(<TopTodo todos={todos} />);
    expect(result.queryByText("priority")).not.toBeInTheDocument();
  });


});
