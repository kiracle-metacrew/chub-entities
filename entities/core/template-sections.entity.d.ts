import { BaseEntity } from '@/common/base/base.entity';
import { SectionEntity, TemplateEntity } from '@entities';
export declare class TemplateSectionEntity extends BaseEntity<TemplateSectionEntity> {
    template_id: number;
    section_id: number;
    order: number;
    settings?: any;
    template: TemplateEntity;
    section: SectionEntity;
}
