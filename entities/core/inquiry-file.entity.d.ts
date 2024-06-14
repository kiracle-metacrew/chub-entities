import { BaseEntity } from '@/common/base/base.entity';
import { InquiryEntity } from './inquiry.entity';
export declare class InquiryFileEntity extends BaseEntity<InquiryFileEntity> {
    path: string;
    inquiry_id: number;
    inquiry: InquiryEntity;
}
