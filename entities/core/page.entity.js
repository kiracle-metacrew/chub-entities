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
exports.PageEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let PageEntity = class PageEntity extends base_entity_1.BaseEntity {
};
exports.PageEntity = PageEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], PageEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PageEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PageEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PageEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: false }),
    __metadata("design:type", Number)
], PageEntity.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PageEntity.prototype, "template_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.CompanyEntity, (company) => company.pages, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'company_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", _entities_1.CompanyEntity)
], PageEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.TemplateEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'template_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", _entities_1.TemplateEntity)
], PageEntity.prototype, "template", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => _entities_1.SectionEntity, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'page_sections',
        joinColumn: {
            name: 'page_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'section_id',
            referencedColumnName: 'id',
        },
        synchronize: false,
    }),
    __metadata("design:type", Array)
], PageEntity.prototype, "sections", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.PageSectionEntity, (pageSection) => pageSection.page, {
        createForeignKeyConstraints: false,
    }),
    __metadata("design:type", Array)
], PageEntity.prototype, "page_sections", void 0);
exports.PageEntity = PageEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'pages',
    }),
    (0, typeorm_1.Index)(['slug', 'company_id'], { unique: true }),
    (0, typeorm_1.Index)(['code', 'company_id'], { unique: true })
], PageEntity);
//# sourceMappingURL=page.entity.js.map