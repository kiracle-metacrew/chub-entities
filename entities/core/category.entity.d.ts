import { BaseEntity } from '@common/base/base.entity';
import { CompanyEntity } from '@entities';
export declare class CategoryEntity extends BaseEntity<CategoryEntity> {
    name: string;
    parent_id?: number;
    order: number;
    link_url?: string;
    company_id: number;
    parent: CategoryEntity;
    children: CategoryEntity[];
    company: CompanyEntity;
}
