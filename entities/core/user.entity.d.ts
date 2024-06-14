import { BaseEntity } from '@/common/base/base.entity';
import { ArticleEntity, RoleEntity } from '@entities';
import { CompanyEntity } from './company.entity';
export declare class UserEntity extends BaseEntity<UserEntity> {
    name: string;
    email: string;
    password?: string;
    email_verified_at?: string | Date;
    social_id?: string;
    social_platform?: string;
    role_id: number;
    company_id?: number;
    phone_number?: string;
    deleted_at?: Date;
    refresh_token?: string;
    role: RoleEntity;
    company: CompanyEntity;
    written_articles: ArticleEntity[];
    approved_articles: ArticleEntity[];
}
