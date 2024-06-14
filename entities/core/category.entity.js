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
exports.CategoryEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let CategoryEntity = class CategoryEntity extends base_entity_1.BaseEntity {
};
exports.CategoryEntity = CategoryEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], CategoryEntity.prototype, "parent_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', unsigned: true, default: 1 }),
    __metadata("design:type", Number)
], CategoryEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "link_url", void 0);
__decorate([
    (0, typeorm_1.Index)('idx_company_id'),
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], CategoryEntity.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CategoryEntity, (parent) => parent.children, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", CategoryEntity)
], CategoryEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CategoryEntity, (children) => children.parent, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'id',
        referencedColumnName: 'parent_id',
    }),
    __metadata("design:type", Array)
], CategoryEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.CompanyEntity, (company) => company.categories, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", _entities_1.CompanyEntity)
], CategoryEntity.prototype, "company", void 0);
exports.CategoryEntity = CategoryEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'categories',
    }),
    (0, typeorm_1.Index)('idx_company_id_name', ['company_id', 'name'], { unique: true })
], CategoryEntity);
//# sourceMappingURL=category.entity.js.map