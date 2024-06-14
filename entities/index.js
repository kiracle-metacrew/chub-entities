"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entities = void 0;
__exportStar(require("./core/user.entity"), exports);
__exportStar(require("./core/role.entity"), exports);
__exportStar(require("./core/company.entity"), exports);
__exportStar(require("./core/article.entity"), exports);
__exportStar(require("./core/tag.entity"), exports);
__exportStar(require("./core/article-tag.entity"), exports);
__exportStar(require("./core/media.entity"), exports);
__exportStar(require("./core/article-media.entity"), exports);
__exportStar(require("./core/category.entity"), exports);
__exportStar(require("./core/permission.entity"), exports);
__exportStar(require("./core/role-permission.entity"), exports);
__exportStar(require("./core/article-categories.entity"), exports);
__exportStar(require("./core/donation.entity"), exports);
__exportStar(require("./core/section.entity"), exports);
__exportStar(require("./core/page.entity"), exports);
__exportStar(require("./core/page-sections.entity"), exports);
__exportStar(require("./core/template.entity"), exports);
__exportStar(require("./core/template-sections.entity"), exports);
__exportStar(require("./core/inquiry.entity"), exports);
__exportStar(require("./core/inquiry-file.entity"), exports);
__exportStar(require("./core/inquiry-category.entity"), exports);
__exportStar(require("./core/general-setting.entity"), exports);
__exportStar(require("./core/setting.entity"), exports);
__exportStar(require("./core/popup.entity"), exports);
__exportStar(require("./core/article-history.entity"), exports);
__exportStar(require("./core/watermark.entity"), exports);
__exportStar(require("./core/popup-media.entity"), exports);
__exportStar(require("./core/logo.entity"), exports);
const _1 = require(".");
exports.entities = [
    _1.UserEntity,
    _1.RoleEntity,
    _1.CompanyEntity,
    _1.ArticleEntity,
    _1.TagEntity,
    _1.ArticleTagEntity,
    _1.MediaEntity,
    _1.ArticleMediaEntity,
    _1.CategoryEntity,
    _1.PermissionEntity,
    _1.RolePermissionEntity,
    _1.ArticleCategoryEntity,
    _1.DonationEntity,
    _1.SectionEntity,
    _1.PageEntity,
    _1.PageSectionEntity,
    _1.TemplateEntity,
    _1.TemplateSectionEntity,
    _1.InquiryCategoryEntity,
    _1.InquiryEntity,
    _1.InquiryFileEntity,
    _1.GeneralSettingEntity,
    _1.SettingEntity,
    _1.PopupEntity,
    _1.ArticleHistoryEntity,
    _1.WatermarkEntity,
    _1.PopupMediaEntity,
    _1.LogoEntity,
];
//# sourceMappingURL=index.js.map