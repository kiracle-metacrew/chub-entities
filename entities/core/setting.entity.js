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
exports.SettingEntity = void 0;
const base_entity_1 = require("../../common/base/base.entity");
const typeorm_1 = require("typeorm");
let SettingEntity = class SettingEntity extends base_entity_1.BaseEntity {
};
exports.SettingEntity = SettingEntity;
__decorate([
    (0, typeorm_1.Index)('idx_unq_key', { unique: true }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], SettingEntity.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], SettingEntity.prototype, "value", void 0);
exports.SettingEntity = SettingEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'settings' })
], SettingEntity);
//# sourceMappingURL=setting.entity.js.map