// see https://playwright.dev/docs/api/class-electronapplication
// https://github.com/microsoft/playwright/issues/6347#issuecomment-1085850728
// https://www.anycodings.com/1questions/958135/can-i-set-the-date-for-playwright-browser
const { _electron: electron } = require("playwright");

exports.startApplication = async (configFilename, systemDate = null, electronParams = ["js/electron.js"], timezone = "GMT") => {
	global.electronApp = null;
	global.page = null;
	process.env.MM_CONFIG_FILE = configFilename;
	process.env.TZ = timezone;
<<<<<<< HEAD
	if (systemDate) {
		process.env.MOCK_DATE = systemDate;
	}
	process.env.mmTestMode = "true";

=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
	global.electronApp = await electron.launch({ args: electronParams });

	await global.electronApp.firstWindow();

	for (const win of global.electronApp.windows()) {
		const title = await win.title();
		expect(["MagicMirror²", "DevTools"]).toContain(title);
		if (title === "MagicMirror²") {
			global.page = win;
			if (systemDate) {
				await global.page.evaluate((systemDate) => {
					Date.now = () => {
						return new Date(systemDate).valueOf();
					};
				}, systemDate);
			}
		}
	}
};

exports.stopApplication = async () => {
	if (global.electronApp) {
		await global.electronApp.close();
	}
	global.electronApp = null;
	global.page = null;
<<<<<<< HEAD
	process.env.MOCK_DATE = undefined;
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
};

exports.getElement = async (selector) => {
	expect(global.page).not.toBeNull();
	let elem = global.page.locator(selector);
	await elem.waitFor();
	expect(elem).not.toBeNull();
	return elem;
};
