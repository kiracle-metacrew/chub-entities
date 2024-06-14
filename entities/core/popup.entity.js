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
exports.PopupEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
const popup_constant_1 = require("../../modules/popups/popup.constant");
let PopupEntity = class PopupEntity extends base_entity_1.BaseEntity {
};
exports.PopupEntity = PopupEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], PopupEntity.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], PopupEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
        unsigned: true,
        nullable: false,
        default: popup_constant_1.POPUP_STATUS.DISPLAY,
    }),
    __metadata("design:type", Number)
], PopupEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PopupEntity.prototype, "link_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PopupEntity.prototype, "valid_from", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PopupEntity.prototype, "valid_to", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true,
        nullable: true,
        default: popup_constant_1.POPUP_DEFAULT.SIZE.WIDTH,
    }),
    __metadata("design:type", Number)
], PopupEntity.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        unsigned: true,
        nullable: true,
        default: popup_constant_1.POPUP_DEFAULT.SIZE.HEIGHT,
    }),
    __metadata("design:type", Number)
], PopupEntity.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'double',
        unsigned: true,
        nullable: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], PopupEntity.prototype, "position_x", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'double',
        unsigned: true,
        nullable: true,
        default: 0,
    }),
    __metadata("design:type", Number)
], PopupEntity.prototype, "position_y", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true, default: true }),
    __metadata("design:type", Boolean)
], PopupEntity.prototype, "is_show_close", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true, default: true }),
    __metadata("design:type", Boolean)
], PopupEntity.prototype, "is_show_close_today", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.CompanyEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", _entities_1.CompanyEntity)
], PopupEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.PopupMediaEntity, (popupMedia) => popupMedia.popup, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'popup_id' }),
    __metadata("design:type", Array)
], PopupEntity.prototype, "attachments", void 0);
exports.PopupEntity = PopupEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'popups',
    })
], PopupEntity);
//# sourceMappingURL=popup.entity.js.map