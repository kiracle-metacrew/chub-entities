"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TITLE_MAX_LENGTH = exports.ARTICLE_LIST_SELECT_COLS = exports.SEARCH_TYPE = exports.SORT_NAME = exports.SLUG_LENGTH = exports.ARTICLE_GRADE_LABEL = exports.ARTICLE_GRADE = exports.ARTICLE_STATUS = void 0;
exports.ARTICLE_STATUS = {
    ALL: 0,
    IN_PROGRESS: 1,
    PENDING_APPROVAL: 2,
    PUBLISHED: 3,
    SCHEDULE_PUBLISH: 5,
    REJECTED: -1,
    PRESS_RELEASE: 4,
};
exports.ARTICLE_GRADE = {
    ALL: 0,
    NORMAL: 1,
    IMPORTANT: 2,
    HEADLINE: 3,
};
exports.ARTICLE_GRADE_LABEL = {
    NORMAL: 'normal',
    IMPORTANT: 'important',
    HEADLINE: 'headline',
};
exports.SLUG_LENGTH = 8;
exports.SORT_NAME = [
    'id',
    'created_at',
    'updated_at',
    'title',
    'published_at',
    'page_view',
];
var SEARCH_TYPE;
(function (SEARCH_TYPE) {
    SEARCH_TYPE[SEARCH_TYPE["ALL"] = 1] = "ALL";
    SEARCH_TYPE[SEARCH_TYPE["TITLE"] = 2] = "TITLE";
    SEARCH_TYPE[SEARCH_TYPE["AUTHOR"] = 3] = "AUTHOR";
})(SEARCH_TYPE || (exports.SEARCH_TYPE = SEARCH_TYPE = {}));
exports.ARTICLE_LIST_SELECT_COLS = [
    'id',
    'title',
    'slug',
    'subtitle',
    'description',
    'published_at',
    'grade',
    'hidden_tags',
    'representative_image',
    'page_view',
];
exports.TITLE_MAX_LENGTH = 50;
//# sourceMappingURL=article.constant.js.map