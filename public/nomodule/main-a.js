System.register(['./chunk1.js'], function (exports, module) {
	'use strict';
	var usedByBoth;
	return {
		setters: [function (module) {
			usedByBoth = module.default;
		}],
		execute: function () {

			// import usedByA from './used-by-a.js';

			module.import("./apply-color-and-message.js").then(({ default: apply }) => {
				apply('#a [data-used-by="a"]', usedByA);
				apply('#a [data-used-by="both"]', usedByBoth);
			});

		}
	};
});
//# sourceMappingURL=./main-a.js.map
