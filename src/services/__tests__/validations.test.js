const { isEmpty, isValid } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - isValid", () => {
    test("should return false as the label is smaller than 8 characters", () => {
        const result = isValid("GamerTag");
        expect(result).toBe(false);
    });

    test("should return false as the label does not contain a number", () => {
        const result = isValid("GamerTag$");
        expect(result).toBe(false);
    });

    test("should return false as the label does not contain a special character", () => {
        const result = isValid("GamerTag1");
        expect(result).toBe(false);
    });

    test("should return true as the label contains a number and a special character", () => {
        const result = isValid("GamerTag1$");
        expect(result).toBe(true);
    });
});
