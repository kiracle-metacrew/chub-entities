import { BaseEntity } from '@/common/base/base.entity';
import { ArticleEntity, CategoryEntity, PageEntity, TagEntity, UserEntity } from '@entities';
export declare class CompanyEntity extends BaseEntity<CompanyEntity> {
    name: string;
    contact_name: string;
    phone_number: string;
    temp_domain: string;
    domain: string;
    postal_code: string;
    address: string;
    address_detail: string;
    users: UserEntity[];
    articles: ArticleEntity[];
    categories: CategoryEntity[];
    tags: TagEntity[];
    pages: PageEntity[];
}
