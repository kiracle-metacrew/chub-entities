import { BaseEntity } from '@/common/base/base.entity';
import { ArticleEntity, CompanyEntity } from '@entities';
export declare class MediaEntity extends BaseEntity<MediaEntity> {
    company_id?: number;
    name?: string;
    description?: string;
    thumbnail?: string;
    type: number;
    embeded_code?: string;
    source?: string;
    mime?: string;
    ext?: string;
    size?: number;
    path?: string;
    origin_width?: number;
    origin_height?: number;
    metadata?: any;
    articles: ArticleEntity[];
    company: CompanyEntity;
}
