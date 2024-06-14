import { BaseEntity } from '@/common/base/base.entity';
import { DONATION_STATUS } from '@/common/constants/donation.constant';
export declare class DonationEntity extends BaseEntity<DonationEntity> {
    payment_id: string;
    order_id: string;
    userid: string;
    request_payload: string;
    response_payload: string;
    amount: number;
    status: DONATION_STATUS;
    relation_id: string;
    relation_text: string;
}
