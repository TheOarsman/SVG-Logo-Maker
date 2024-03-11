const { validateInputLength } = require("./shapes");

describe("Prompt validations", () => {
  test("should return error message for text input length exceeding 3 characters", () => {
    const input = "abcd";
    const errorMessage = "You may not enter more than 3 letters!";
    expect(validateInputLength(input)).toEqual(errorMessage);
  });

  test("should return true for valid text input length", () => {
    const input = "abc";
    expect(validateInputLength(input)).toEqual(true);
  });
});
