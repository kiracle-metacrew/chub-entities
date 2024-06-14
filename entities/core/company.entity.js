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
exports.CompanyEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let CompanyEntity = class CompanyEntity extends base_entity_1.BaseEntity {
};
exports.CompanyEntity = CompanyEntity;
__decorate([
    (0, typeorm_1.Index)('idx_company_name', { unique: true }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "contact_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "temp_domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "domain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "address_detail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.UserEntity, (user) => user.company, {
        createForeignKeyConstraints: false,
    }),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.ArticleEntity, (article) => article.company, {
        createForeignKeyConstraints: false,
    }),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "articles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.CategoryEntity, (category) => category.company, {
        createForeignKeyConstraints: false,
    }),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.TagEntity, (tag) => tag.company, {
        createForeignKeyConstraints: false,
    }),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.PageEntity, (page) => page.company, {
        createForeignKeyConstraints: false,
    }),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "pages", void 0);
exports.CompanyEntity = CompanyEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'companies',
    })
], CompanyEntity);
//# sourceMappingURL=company.entity.js.map