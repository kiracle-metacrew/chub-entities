"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECTION_TYPE = exports.SECTION_CODE = exports.DISPLAY_ORDER = exports.SubsectionMode = exports.Mode = void 0;
var Mode;
(function (Mode) {
    Mode["AUTO"] = "auto";
    Mode["MANUAL"] = "manual";
})(Mode || (exports.Mode = Mode = {}));
var SubsectionMode;
(function (SubsectionMode) {
    SubsectionMode["MANUAL"] = "manual";
    SubsectionMode["NEWEST"] = "newest";
    SubsectionMode["MOST_VIEWED"] = "most_viewed";
})(SubsectionMode || (exports.SubsectionMode = SubsectionMode = {}));
var DISPLAY_ORDER;
(function (DISPLAY_ORDER) {
    DISPLAY_ORDER["MANUAL"] = "manual";
    DISPLAY_ORDER["MOST_VIEWED"] = "most_viewed";
    DISPLAY_ORDER["LATEST"] = "latest";
    DISPLAY_ORDER["NEWEST"] = "newest";
})(DISPLAY_ORDER || (exports.DISPLAY_ORDER = DISPLAY_ORDER = {}));
var SECTION_CODE;
(function (SECTION_CODE) {
    SECTION_CODE["HEADLINE"] = "headline";
    SECTION_CODE["IMPORTANT"] = "important";
    SECTION_CODE["LATEST"] = "latest";
    SECTION_CODE["POPULAR"] = "popular";
    SECTION_CODE["CATEGORY_Q"] = "category_q";
    SECTION_CODE["CATEGORY_W"] = "category_w";
    SECTION_CODE["CATEGORY_Z"] = "category_z";
})(SECTION_CODE || (exports.SECTION_CODE = SECTION_CODE = {}));
var SECTION_TYPE;
(function (SECTION_TYPE) {
    SECTION_TYPE["TEMPLATE"] = "template";
    SECTION_TYPE["DEFAULT"] = "default";
})(SECTION_TYPE || (exports.SECTION_TYPE = SECTION_TYPE = {}));
//# sourceMappingURL=section.interface.js.map