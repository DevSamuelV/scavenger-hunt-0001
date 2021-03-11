"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
var Index = /** @class */ (function () {
    function Index(express) {
        var _this = this;
        this.clue = "go back trace your steps but stop before you reach the end but don't for get the link";
        express.get("", function (req, res) {
            var key = req.query.key;
            if (key == null) {
                return res.send({
                    key: false,
                    message: "to proceed add the key to the url like this https://pollifly.com?key=password",
                    clue: _this.clue,
                });
            }
            if (key == "DVOO BLF WVXLWVW RG XLMTIZTGH")
                return res.send({
                    key: true,
                    message: "good job you finished the puzzle it was not ment to be hard",
                });
            else
                return res.send({
                    key: false,
                    message: "your getting closer",
                    clue: _this.clue,
                });
        });
    }
    return Index;
}());
exports.Index = Index;
//# sourceMappingURL=index.js.map