import { BaseEntity } from '@/common/base/base.entity';
import { CompanyEntity, InquiryFileEntity, UserEntity } from '@entities';
import { InquiryCategoryEntity } from './inquiry-category.entity';
export declare class InquiryEntity extends BaseEntity<InquiryEntity> {
    description: string;
    status: number;
    inquiry_category_id: number;
    created_by_id: number;
    company_id: number;
    inquiry_category: InquiryCategoryEntity;
    created_by: UserEntity;
    company: CompanyEntity;
    inquiry_files: InquiryFileEntity[];
}
