import { BaseEntity } from '@/common/base/base.entity';
import { CompanyEntity, PopupMediaEntity } from '@entities';
export declare class PopupEntity extends BaseEntity<PopupEntity> {
    company_id: number;
    title: string;
    status: number;
    link_url?: string;
    valid_from?: Date;
    valid_to?: Date;
    width?: number;
    height?: number;
    position_x?: number;
    position_y?: number;
    is_show_close?: boolean;
    is_show_close_today?: boolean;
    company: CompanyEntity;
    attachments: PopupMediaEntity[];
}
