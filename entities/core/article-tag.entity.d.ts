import { BaseEntity } from '@/common/base/base.entity';
import { ArticleEntity, TagEntity } from '@entities';
export declare class ArticleTagEntity extends BaseEntity<ArticleTagEntity> {
    article_id: number;
    tag_id: number;
    order: number;
    article: ArticleEntity;
    tag: TagEntity;
}
