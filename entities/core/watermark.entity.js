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
exports.WatermarkEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let WatermarkEntity = class WatermarkEntity extends base_entity_1.BaseEntity {
};
exports.WatermarkEntity = WatermarkEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], WatermarkEntity.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], WatermarkEntity.prototype, "media_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], WatermarkEntity.prototype, "returned_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], WatermarkEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, nullable: true }),
    __metadata("design:type", Boolean)
], WatermarkEntity.prototype, "is_default", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], WatermarkEntity.prototype, "owner_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.CompanyEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", _entities_1.CompanyEntity)
], WatermarkEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.MediaEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'media_id' }),
    __metadata("design:type", _entities_1.MediaEntity)
], WatermarkEntity.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.UserEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'owner_id' }),
    __metadata("design:type", _entities_1.UserEntity)
], WatermarkEntity.prototype, "owner", void 0);
exports.WatermarkEntity = WatermarkEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'watermarks',
    }),
    (0, typeorm_1.Index)(['company_id', 'media_id'], { unique: true })
], WatermarkEntity);
//# sourceMappingURL=watermark.entity.js.map