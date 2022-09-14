import { render, screen } from "@testing-library/react";
import { Skills } from "../3-multiple-queries/Skills";

describe("Skills-queryBy", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  //! getBy... allways throw an error if it cant find the element, for
  //! queryBy return a match node for a query and null if no elements matchers
  //! usefull for element that is not present
  //! Throws error if more then one node is found, for more then one use queryAll
  //! queryAllBy... return a array of founded node or empty array for none

  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});
