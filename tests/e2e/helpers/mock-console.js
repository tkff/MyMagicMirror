/**
 * Suppresses errors concerning web server already shut down.
 * @param {string} err The error message.
 */
const mockError = (err) => {
	if (
		err.includes("ECONNREFUSED")
		|| err.includes("ECONNRESET")
		|| err.includes("socket hang up")
		|| err.includes("exports is not defined")
<<<<<<< HEAD
		|| err.includes("module is not defined")
=======
>>>>>>> 0893f99a1a80b2de5062da6b907e3b78e29f9f67
		|| err.includes("write EPIPE")
		|| err.includes("AggregateError")
		|| err.includes("ERR_SOCKET_CONNECTION_TIMEOUT")
	) {
		jest.fn();
	} else {
		console.dir(err);
	}
};

global.console = {
	log: jest.fn(),
	dir: console.dir,
	error: mockError,
	warn: console.warn,
	info: jest.fn(),
	debug: console.debug
};
