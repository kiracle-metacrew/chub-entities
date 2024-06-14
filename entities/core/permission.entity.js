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
exports.PermissionEntity = void 0;
const base_entity_1 = require("../../common/base/base.entity");
const typeorm_1 = require("typeorm");
const role_entity_1 = require("./role.entity");
const role_permission_entity_1 = require("./role-permission.entity");
let PermissionEntity = class PermissionEntity extends base_entity_1.BaseEntity {
};
exports.PermissionEntity = PermissionEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PermissionEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], PermissionEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.RoleEntity, (role) => role.permissions, {
        createForeignKeyConstraints: false,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'role_permissions',
        joinColumn: {
            name: 'permission_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
        synchronize: false,
    }),
    __metadata("design:type", Array)
], PermissionEntity.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => role_permission_entity_1.RolePermissionEntity, (role_permissions) => role_permissions.permission, { createForeignKeyConstraints: false }),
    __metadata("design:type", Array)
], PermissionEntity.prototype, "role_permissions", void 0);
exports.PermissionEntity = PermissionEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'permissions',
    })
], PermissionEntity);
//# sourceMappingURL=permission.entity.js.map