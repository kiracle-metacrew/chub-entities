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
exports.TagEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
let TagEntity = class TagEntity extends base_entity_1.BaseEntity {
};
exports.TagEntity = TagEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TagEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'company_id', unsigned: true }),
    __metadata("design:type", Number)
], TagEntity.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.CompanyEntity, (company) => company.tags, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", _entities_1.CompanyEntity)
], TagEntity.prototype, "company", void 0);
exports.TagEntity = TagEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'tags',
    }),
    (0, typeorm_1.Index)(['name', 'company_id'], { unique: true })
], TagEntity);
//# sourceMappingURL=tag.entity.js.map