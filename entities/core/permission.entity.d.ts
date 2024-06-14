import { BaseEntity } from '@/common/base/base.entity';
import { RoleEntity } from './role.entity';
import { RolePermissionEntity } from './role-permission.entity';
export declare class PermissionEntity extends BaseEntity<PermissionEntity> {
    name: string;
    slug: string;
    roles: RoleEntity[];
    role_permissions: RolePermissionEntity[];
}
