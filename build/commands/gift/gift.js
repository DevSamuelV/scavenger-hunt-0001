"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift = void 0;
var Gift = /** @class */ (function () {
    function Gift(express) {
        express.get("/gift", function (req, res) {
            var key = req.params.key;
            if (key == null) {
            }
        });
    }
    return Gift;
}());
exports.Gift = Gift;
//# sourceMappingURL=gift.js.map