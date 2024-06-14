"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARTICLE_HISTORY_SORT_NAME = exports.ARTICLE_SORT_NAME = exports.ARTICLE_STATUS = void 0;
var ARTICLE_STATUS;
(function (ARTICLE_STATUS) {
    ARTICLE_STATUS[ARTICLE_STATUS["NEW"] = 1] = "NEW";
    ARTICLE_STATUS[ARTICLE_STATUS["REJECTED"] = 2] = "REJECTED";
    ARTICLE_STATUS[ARTICLE_STATUS["PUBLISHED"] = 3] = "PUBLISHED";
})(ARTICLE_STATUS || (exports.ARTICLE_STATUS = ARTICLE_STATUS = {}));
exports.ARTICLE_SORT_NAME = [
    'id',
    'created_at',
    'updated_at',
    'title',
    'slug',
    'published_at',
    'created_by_id',
];
exports.ARTICLE_HISTORY_SORT_NAME = [
    'id',
    'created_at',
    'updated_at',
    'title',
    'slug',
    'published_at',
    'version',
    'created_by_id',
];
//# sourceMappingURL=article.constant.js.map