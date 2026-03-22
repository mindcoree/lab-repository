import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList } from "./TodoList";

describe("TodoList", () => {

  test("renders empty", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("0 todos (0 completed)")).toBeInTheDocument();
  });

  test("adds todo", async () => {
    const user = userEvent.setup();

    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const btn = screen.getByTestId("add-button");

    await user.type(input, "Learn Jest");
    await user.click(btn);

    expect(screen.getByText("Learn Jest")).toBeInTheDocument();
  });

  test("toggle todo", async () => {
    const user = userEvent.setup();

    render(
      <TodoList initialTodos={[{ id: 1, text: "Test", completed: false }]} />
    );

    const checkbox = screen.getByTestId("todo-checkbox");
    await user.click(checkbox);

    const item = screen.getByTestId("todo-item");
    expect(item).toHaveClass("completed");
  });

  test("delete todo", async () => {
    const user = userEvent.setup();

    render(
      <TodoList initialTodos={[{ id: 1, text: "Delete", completed: false }]} />
    );

    const btn = screen.getByTestId("delete-button");
    await user.click(btn);

    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });

});