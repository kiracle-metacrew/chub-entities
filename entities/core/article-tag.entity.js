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
exports.ArticleTagEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let ArticleTagEntity = class ArticleTagEntity extends base_entity_1.BaseEntity {
};
exports.ArticleTagEntity = ArticleTagEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ArticleTagEntity.prototype, "article_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ArticleTagEntity.prototype, "tag_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', unsigned: true, default: 1, nullable: true }),
    __metadata("design:type", Number)
], ArticleTagEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.ArticleEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'article_id',
    }),
    __metadata("design:type", _entities_1.ArticleEntity)
], ArticleTagEntity.prototype, "article", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.TagEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'tag_id',
    }),
    __metadata("design:type", _entities_1.TagEntity)
], ArticleTagEntity.prototype, "tag", void 0);
exports.ArticleTagEntity = ArticleTagEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'article_tags',
    })
], ArticleTagEntity);
//# sourceMappingURL=article-tag.entity.js.map