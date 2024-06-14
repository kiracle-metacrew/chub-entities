"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleCategoryEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let ArticleCategoryEntity = class ArticleCategoryEntity extends base_entity_1.BaseEntity {
};
exports.ArticleCategoryEntity = ArticleCategoryEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ArticleCategoryEntity.prototype, "article_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ArticleCategoryEntity.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.ArticleEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'article_id',
    }),
    __metadata("design:type", _entities_1.ArticleEntity)
], ArticleCategoryEntity.prototype, "article", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.CategoryEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'category_id',
    }),
    __metadata("design:type", _entities_1.CategoryEntity)
], ArticleCategoryEntity.prototype, "category", void 0);
exports.ArticleCategoryEntity = ArticleCategoryEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'article_categories',
    })
], ArticleCategoryEntity);
//# sourceMappingURL=article-categories.entity.js.map