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
exports.PageSectionEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let PageSectionEntity = class PageSectionEntity extends base_entity_1.BaseEntity {
};
exports.PageSectionEntity = PageSectionEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PageSectionEntity.prototype, "page_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PageSectionEntity.prototype, "section_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unsigned: true, default: 1 }),
    __metadata("design:type", Number)
], PageSectionEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], PageSectionEntity.prototype, "settings", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.PageEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'page_id',
    }),
    __metadata("design:type", _entities_1.PageEntity)
], PageSectionEntity.prototype, "page", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.SectionEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'section_id',
    }),
    __metadata("design:type", _entities_1.SectionEntity)
], PageSectionEntity.prototype, "section", void 0);
exports.PageSectionEntity = PageSectionEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'page_sections',
    }),
    (0, typeorm_1.Index)(['page_id', 'order'], { unique: true })
], PageSectionEntity);
//# sourceMappingURL=page-sections.entity.js.map