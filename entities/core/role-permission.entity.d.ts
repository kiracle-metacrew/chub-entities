import { BaseEntity } from '@/common/base/base.entity';
import { RoleEntity } from './role.entity';
import { PermissionEntity } from './permission.entity';
export declare class RolePermissionEntity extends BaseEntity<RolePermissionEntity> {
    role_id: number;
    permission_id: number;
    role: RoleEntity;
    permission: PermissionEntity;
}
