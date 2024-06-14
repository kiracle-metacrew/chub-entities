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
exports.SectionEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const section_interface_1 = require("../../modules/pages/section.interface");
let SectionEntity = class SectionEntity extends base_entity_1.BaseEntity {
};
exports.SectionEntity = SectionEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], SectionEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true }),
    __metadata("design:type", String)
], SectionEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Index)('idx_type'),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: section_interface_1.SECTION_TYPE.DEFAULT }),
    __metadata("design:type", String)
], SectionEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SectionEntity.prototype, "skeleton_image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SectionEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], SectionEntity.prototype, "settings", void 0);
exports.SectionEntity = SectionEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'sections',
    })
], SectionEntity);
//# sourceMappingURL=section.entity.js.map