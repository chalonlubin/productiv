import React from "react";
import { render} from "@testing-library/react";
import Todo from "./Todo";

describe("Todo Tests", function () {
  const todo = {
    id: 1,
    title: "Test-Title",
    description: "Test-Description",
    priority: 1 };

  it("renders without crashing", function () {
    render(<Todo todo={todo} />);
  });

  it("contains expected title", function () {
    const result = render(<Todo todo={todo} />);
    expect(result.queryByText("Test-Title")).toBeInTheDocument();
  });

  it("matches snapshot", function () {
    const { container } = render(<Todo todo={todo}/>);
    expect(container).toMatchSnapshot();
  });
});