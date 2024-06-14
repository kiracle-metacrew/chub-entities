import { BaseEntity } from '@/common/base/base.entity';
import { CompanyEntity } from '@entities';
export declare class TagEntity extends BaseEntity<TagEntity> {
    name: string;
    company_id: number;
    company: CompanyEntity;
}
