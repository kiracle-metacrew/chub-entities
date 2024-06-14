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
exports.MediaEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let MediaEntity = class MediaEntity extends base_entity_1.BaseEntity {
};
exports.MediaEntity = MediaEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], MediaEntity.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, default: 'Untitled' }),
    __metadata("design:type", String)
], MediaEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], MediaEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], MediaEntity.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', comment: '1: image | 2: video | 3: embed' }),
    __metadata("design:type", Number)
], MediaEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], MediaEntity.prototype, "embeded_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinytext', nullable: true }),
    __metadata("design:type", String)
], MediaEntity.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinytext', nullable: true }),
    __metadata("design:type", String)
], MediaEntity.prototype, "mime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinytext', nullable: true }),
    __metadata("design:type", String)
], MediaEntity.prototype, "ext", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], MediaEntity.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], MediaEntity.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], MediaEntity.prototype, "origin_width", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], MediaEntity.prototype, "origin_height", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], MediaEntity.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => _entities_1.ArticleEntity, (article) => article.media, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'article_media',
        joinColumn: {
            name: 'media_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'article_id',
            referencedColumnName: 'id',
        },
        synchronize: false,
    }),
    __metadata("design:type", Array)
], MediaEntity.prototype, "articles", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.CompanyEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", _entities_1.CompanyEntity)
], MediaEntity.prototype, "company", void 0);
exports.MediaEntity = MediaEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'media',
    })
], MediaEntity);
//# sourceMappingURL=media.entity.js.map