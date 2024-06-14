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
exports.InquiryEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
const inquiry_category_entity_1 = require("./inquiry-category.entity");
const inquiry_constant_1 = require("../../common/constants/inquiry.constant");
let InquiryEntity = class InquiryEntity extends base_entity_1.BaseEntity {
};
exports.InquiryEntity = InquiryEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], InquiryEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: inquiry_constant_1.INQUIRY_STATUS.CREATED, nullable: true }),
    __metadata("design:type", Number)
], InquiryEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], InquiryEntity.prototype, "inquiry_category_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], InquiryEntity.prototype, "created_by_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], InquiryEntity.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inquiry_category_entity_1.InquiryCategoryEntity, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'inquiry_category_id',
    }),
    __metadata("design:type", inquiry_category_entity_1.InquiryCategoryEntity)
], InquiryEntity.prototype, "inquiry_category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.UserEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({
        name: 'created_by_id',
    }),
    __metadata("design:type", _entities_1.UserEntity)
], InquiryEntity.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.CompanyEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({
        name: 'company_id',
    }),
    __metadata("design:type", _entities_1.CompanyEntity)
], InquiryEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.InquiryFileEntity, (inquiry_files) => inquiry_files.inquiry, { createForeignKeyConstraints: false }),
    __metadata("design:type", Array)
], InquiryEntity.prototype, "inquiry_files", void 0);
exports.InquiryEntity = InquiryEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'inquiries',
    })
], InquiryEntity);
//# sourceMappingURL=inquiry.entity.js.map