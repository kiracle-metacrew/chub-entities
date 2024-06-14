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
exports.TemplateEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let TemplateEntity = class TemplateEntity extends base_entity_1.BaseEntity {
};
exports.TemplateEntity = TemplateEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TemplateEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TemplateEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TemplateEntity.prototype, "skeleton_image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TemplateEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], TemplateEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => _entities_1.SectionEntity, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'template_sections',
        joinColumn: {
            name: 'template_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'section_id',
            referencedColumnName: 'id',
        },
        synchronize: false,
    }),
    __metadata("design:type", Array)
], TemplateEntity.prototype, "sections", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.TemplateSectionEntity, (tmplSection) => tmplSection.template, {
        createForeignKeyConstraints: false,
    }),
    __metadata("design:type", Array)
], TemplateEntity.prototype, "template_sections", void 0);
exports.TemplateEntity = TemplateEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'templates',
    })
], TemplateEntity);
//# sourceMappingURL=template.entity.js.map