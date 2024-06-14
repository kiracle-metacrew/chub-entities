import { BaseEntity } from '@/common/base/base.entity';
import { ArticleEntity, UserEntity } from '@entities';
export declare class ArticleHistoryEntity extends BaseEntity<ArticleHistoryEntity> {
    article_id: number;
    version: number;
    data?: any;
    created_by_id: number;
    article: ArticleEntity;
    created_by: UserEntity;
}
