const helpers = require("./helpers/global-setup");

describe("Check configuration without modules", () => {
	beforeAll(async () => {
		await helpers.startApplication("tests/configs/without_modules.js");
		await helpers.getDocument();
	});
	afterAll(async () => {
		await helpers.stopApplication();
	});

	it("shows the message MagicMirror² title", async () => {
		const elem = await helpers.waitForElement("#module_1_helloworld .module-content");
		expect(elem).not.toBeNull();
		expect(elem.textContent).toContain("MagicMirror²");
	});

<<<<<<< HEAD
	it("shows the project URL", async () => {
		const elem = await helpers.waitForElement("#module_5_helloworld .module-content");
		expect(elem).not.toBeNull();
		expect(elem.textContent).toContain("https://magicmirror.builders/");
=======
	it("shows the url of michael's website", async () => {
		const elem = await helpers.waitForElement("#module_5_helloworld .module-content");
		expect(elem).not.toBeNull();
		expect(elem.textContent).toContain("www.michaelteeuw.nl");
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	});
});
