import { BaseEntity } from '@common/base/base.entity';
import { SectionEntity, TemplateSectionEntity } from '@entities';
export declare class TemplateEntity extends BaseEntity<TemplateEntity> {
    name?: string;
    description?: string;
    skeleton_image?: string;
    code: string;
    type: string;
    sections: SectionEntity[];
    template_sections: TemplateSectionEntity[];
}
