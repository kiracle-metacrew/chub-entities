import { BaseEntity } from '@common/base/base.entity';
import { ArticleEntity, MediaEntity } from '@entities';
export declare class ArticleMediaEntity extends BaseEntity<ArticleMediaEntity> {
    article_id: number;
    media_id: number;
    returned_data?: string;
    description?: string;
    is_default?: boolean;
    is_delete?: boolean;
    article: ArticleEntity;
    media: MediaEntity;
}
