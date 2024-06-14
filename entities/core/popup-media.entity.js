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
exports.PopupMediaEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let PopupMediaEntity = class PopupMediaEntity extends base_entity_1.BaseEntity {
};
exports.PopupMediaEntity = PopupMediaEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PopupMediaEntity.prototype, "popup_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PopupMediaEntity.prototype, "media_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', unsigned: true, default: 1, nullable: true }),
    __metadata("design:type", Number)
], PopupMediaEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.PopupEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'popup_id',
    }),
    __metadata("design:type", _entities_1.PopupEntity)
], PopupMediaEntity.prototype, "popup", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.MediaEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'media_id',
    }),
    __metadata("design:type", _entities_1.MediaEntity)
], PopupMediaEntity.prototype, "media", void 0);
exports.PopupMediaEntity = PopupMediaEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'popup_media',
    })
], PopupMediaEntity);
//# sourceMappingURL=popup-media.entity.js.map