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
exports.ArticleEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
const article_constant_1 = require("../../modules/articles/article.constant");
let ArticleEntity = class ArticleEntity extends base_entity_1.BaseEntity {
};
exports.ArticleEntity = ArticleEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, default: '' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'mediumtext', nullable: true }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title_richtext", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', nullable: true }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
        default: article_constant_1.ARTICLE_STATUS.IN_PROGRESS,
    }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ArticleEntity.prototype, "published_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "hidden_tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "reporter_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "creator_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "approver_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], ArticleEntity.prototype, "representative_image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "attach_files", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], ArticleEntity.prototype, "is_auto_save", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, default: 0 }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "page_view", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], ArticleEntity.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ArticleEntity.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true, default: 1 }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "count_version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true, default: 1 }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "current_version", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => _entities_1.TagEntity, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'article_tags',
        joinColumn: {
            name: 'article_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'tag_id',
            referencedColumnName: 'id',
        },
        synchronize: false,
    }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.ArticleTagEntity, (articleTag) => articleTag.article, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'article_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "article_tags", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => _entities_1.MediaEntity, (media) => media.articles, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'article_media',
        joinColumn: {
            name: 'article_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'media_id',
            referencedColumnName: 'id',
        },
        synchronize: false,
    }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.UserEntity, (user) => user.written_articles, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'reporter_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", _entities_1.UserEntity)
], ArticleEntity.prototype, "reporter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.UserEntity, (user) => user.approved_articles, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'approver_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", _entities_1.UserEntity)
], ArticleEntity.prototype, "approver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.CompanyEntity, (company) => company.articles, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'company_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", _entities_1.CompanyEntity)
], ArticleEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => _entities_1.CategoryEntity, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'article_categories',
        joinColumn: {
            name: 'article_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'category_id',
            referencedColumnName: 'id',
        },
        synchronize: false,
    }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.ArticleHistoryEntity, (hitory) => hitory.article, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'id',
        referencedColumnName: 'article_id',
    }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "histories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.ArticleMediaEntity, (articleMedia) => articleMedia.article, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'id',
        referencedColumnName: 'article_id',
    }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "article_media", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => _entities_1.MediaEntity, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'article_media',
        joinColumn: {
            name: 'article_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'media_id',
            referencedColumnName: 'id',
        },
        synchronize: false,
    }),
    __metadata("design:type", Array)
], ArticleEntity.prototype, "attachments", void 0);
exports.ArticleEntity = ArticleEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'articles',
    }),
    (0, typeorm_1.Index)(['slug', 'company_id'], { unique: true })
], ArticleEntity);
//# sourceMappingURL=article.entity.js.map