import { BaseEntity } from '@/common/base/base.entity';
import { ArticleEntity, CategoryEntity } from '@entities';
export declare class ArticleCategoryEntity extends BaseEntity<ArticleCategoryEntity> {
    article_id: number;
    category_id: number;
    article: ArticleEntity;
    category: CategoryEntity;
}
