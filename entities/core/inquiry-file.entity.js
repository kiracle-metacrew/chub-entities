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
exports.InquiryFileEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const inquiry_entity_1 = require("./inquiry.entity");
let InquiryFileEntity = class InquiryFileEntity extends base_entity_1.BaseEntity {
};
exports.InquiryFileEntity = InquiryFileEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], InquiryFileEntity.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], InquiryFileEntity.prototype, "inquiry_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inquiry_entity_1.InquiryEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({
        name: 'inquiry_id',
    }),
    __metadata("design:type", inquiry_entity_1.InquiryEntity)
], InquiryFileEntity.prototype, "inquiry", void 0);
exports.InquiryFileEntity = InquiryFileEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'inquiry_files',
    })
], InquiryFileEntity);
//# sourceMappingURL=inquiry-file.entity.js.map