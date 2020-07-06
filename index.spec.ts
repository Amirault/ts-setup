import {sayHelloWorld} from "./index";

describe("setup test", () => {
	it("should say hello world", () => {
		expect(sayHelloWorld()).toEqual("Hello World")
	})
})
