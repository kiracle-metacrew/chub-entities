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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const _entities_1 = require("../index");
const company_entity_1 = require("./company.entity");
let UserEntity = class UserEntity extends base_entity_1.BaseEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, default: null }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Object)
], UserEntity.prototype, "email_verified_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "social_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "social_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UserEntity.prototype, "role_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], UserEntity.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ nullable: true, select: false }),
    __metadata("design:type", Date)
], UserEntity.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "refresh_token", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _entities_1.RoleEntity, (role) => role.users, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", _entities_1.RoleEntity)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.CompanyEntity, (company) => company.users, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'company_id',
    }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], UserEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.ArticleEntity, (article) => article.reporter),
    __metadata("design:type", Array)
], UserEntity.prototype, "written_articles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _entities_1.ArticleEntity, (article) => article.approver),
    __metadata("design:type", Array)
], UserEntity.prototype, "approved_articles", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'users',
    }),
    (0, typeorm_1.Index)(['email'], { unique: false }),
    (0, typeorm_1.Index)(['social_id', 'social_platform'], { unique: false })
], UserEntity);
//# sourceMappingURL=user.entity.js.map