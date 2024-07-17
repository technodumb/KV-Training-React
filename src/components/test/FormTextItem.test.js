import React from "react";
import { getByLabelText, render } from "@testing-library/react";
import FormTextItem from "../FormTextItem";

describe("Test the textfield", () => {
    test("Check if FormTextItem is being rendered", () => {
        const { getByTestId } = render(<FormTextItem />);

        const element = getByTestId("test-input-formtextitem");
        expect(element).toBeTruthy();
    });

    test("Check if formTextItem attributes are set properly", () => {
        const placeholder = "Sample Placeholder";
        const text = "Sample Text";

        const { getByPlaceholderText, getByDisplayValue } = render(
            <FormTextItem placeholder={placeholder} type="text" value={text} />
        );

        // expect(getByText(text)).toBeTruthy();
        getByDisplayValue(text);
        getByPlaceholderText(placeholder);
    });
});
