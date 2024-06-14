import { BaseEntity } from '@common/base/base.entity';
export declare class SectionEntity extends BaseEntity<SectionEntity> {
    name?: string;
    code: string;
    type: string;
    skeleton_image?: string;
    description?: string;
    settings?: any;
}
