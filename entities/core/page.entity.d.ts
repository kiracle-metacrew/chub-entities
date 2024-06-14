import { BaseEntity } from '@common/base/base.entity';
import { CompanyEntity, PageSectionEntity, SectionEntity, TemplateEntity } from '@entities';
export declare class PageEntity extends BaseEntity<PageEntity> {
    name?: string;
    slug: string;
    code: string;
    description?: string;
    company_id: number;
    template_id: number;
    company: CompanyEntity;
    template: TemplateEntity;
    sections: SectionEntity[];
    page_sections: PageSectionEntity[];
}
