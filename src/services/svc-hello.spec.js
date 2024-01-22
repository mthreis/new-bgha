import hello from "./svc-hello";

const hello_ = hello();

describe("svc-hello", () => {

    test("Should say Hello", () => {
        expect(hello_).toBe("Hello!");
    })
});