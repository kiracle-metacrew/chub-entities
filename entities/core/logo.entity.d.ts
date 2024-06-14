import { BaseEntity } from '@common/base/base.entity';
import { CompanyEntity, MediaEntity } from '@entities';
export declare class LogoEntity extends BaseEntity<LogoEntity> {
    company_id: number;
    media_id: number;
    returned_data?: string;
    description?: string;
    position?: number;
    is_default?: boolean;
    company: CompanyEntity;
    media: MediaEntity;
}
