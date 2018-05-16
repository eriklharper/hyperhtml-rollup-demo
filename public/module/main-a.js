import usedByBoth from './chunk1.js';

// import usedByA from './used-by-a.js';

import("./apply-color-and-message.js").then(({ default: apply }) => {
	apply('#a [data-used-by="a"]', usedByA);
	apply('#a [data-used-by="both"]', usedByBoth);
});
//# sourceMappingURL=./main-a.js.map
