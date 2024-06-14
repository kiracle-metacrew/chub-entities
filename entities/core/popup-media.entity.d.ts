import { BaseEntity } from '@/common/base/base.entity';
import { MediaEntity, PopupEntity } from '@entities';
export declare class PopupMediaEntity extends BaseEntity<PopupMediaEntity> {
    popup_id: number;
    media_id: number;
    order?: number;
    popup: PopupEntity;
    media: MediaEntity;
}
