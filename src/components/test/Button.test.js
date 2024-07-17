import { fireEvent, render } from "@testing-library/react";
import Button from "../Button";
import React from "react";

describe("Check if Button works properly", () => {
    test("Check if Button exists", () => {
        const { getByTestId } = render(<Button />);

        const element = getByTestId("button-test-id");
        expect(element).toBeTruthy();
    });

    test("Check if text displayed properly", () => {
        const text = "Click";
        const { getByText } = render(<Button>{text}</Button>);

        getByText(text);
    });

    test("Check if onClick is triggered", () => {
        const onClick = jest.fn();
        const { getByTestId } = render(<Button onClick={onClick} />);
        const element = getByTestId("button-test-id");

        fireEvent.click(element);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test("Check if snapshot detects changes", () => {
        const onClick = jest.fn();
        const text = "Click";
        const { asFragment } = render(
            <Button onClick={onClick}>{text}</Button>
        );
        // const element = getByTestId("button-test-id");
        expect(asFragment()).toMatchSnapshot();
    });
});
