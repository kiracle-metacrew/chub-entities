import { BaseEntity } from '@common/base/base.entity';
import { CompanyEntity } from '@entities';
export declare class GeneralSettingEntity extends BaseEntity<GeneralSettingEntity> {
    company_id: number;
    key: string;
    value?: string;
    company: CompanyEntity;
}
