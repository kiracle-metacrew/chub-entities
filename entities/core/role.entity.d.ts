import { BaseEntity } from '@/common/base/base.entity';
import { UserEntity } from './user.entity';
import { Role } from '@/common/constants/role';
import { PermissionEntity } from './permission.entity';
import { RolePermissionEntity } from './role-permission.entity';
export declare class RoleEntity extends BaseEntity<RoleEntity> {
    name: string;
    slug: Role;
    description?: string;
    users: UserEntity[];
    permissions: PermissionEntity[];
    role_permissions: RolePermissionEntity[];
}
