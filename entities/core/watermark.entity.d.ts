import { BaseEntity } from '@common/base/base.entity';
import { CompanyEntity, MediaEntity, UserEntity } from '@entities';
export declare class WatermarkEntity extends BaseEntity<WatermarkEntity> {
    company_id: number;
    media_id: number;
    returned_data?: string;
    description?: string;
    is_default?: boolean;
    owner_id?: number;
    company: CompanyEntity;
    media: MediaEntity;
    owner: UserEntity;
}
