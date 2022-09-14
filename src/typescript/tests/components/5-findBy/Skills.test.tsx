import { render, screen } from "@testing-library/react";
import { Skills } from "../3-multiple-queries/Skills";

describe("Skills-FindBy", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  //! findBy... when elements are not in the DOM in the first place (Async)
  //! findBy... return a promise which resolve when the element found matches the given query,
  //! the promise is rejected if no element is found or if more tham one element is found after default 1000ms */

  //! findAllBy return a promise with an array of elements when any elements are found which match que given array
  //! The promisse is rejected as the findBy after default 1000ms

  test("Start Learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 1001,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
