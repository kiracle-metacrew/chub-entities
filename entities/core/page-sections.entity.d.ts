import { BaseEntity } from '@/common/base/base.entity';
import { PageEntity, SectionEntity } from '@entities';
export declare class PageSectionEntity extends BaseEntity<PageSectionEntity> {
    page_id: number;
    section_id: number;
    order: number;
    settings?: any;
    page: PageEntity;
    section: SectionEntity;
}
