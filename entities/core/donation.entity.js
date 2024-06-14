"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/base/base.entity");
const donation_constant_1 = require("../../common/constants/donation.constant");
let DonationEntity = class DonationEntity extends base_entity_1.BaseEntity {
};
exports.DonationEntity = DonationEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 36, nullable: true }),
    __metadata("design:type", String)
], DonationEntity.prototype, "payment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DonationEntity.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DonationEntity.prototype, "userid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DonationEntity.prototype, "request_payload", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DonationEntity.prototype, "response_payload", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], DonationEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'integer',
        comment: '0: initial ' +
            '20: create_success - ' +
            '30: create_error - ' +
            '40: pay_success - ' +
            '50: pay_error - ' +
            '60: consumption_success - ' +
            '70: consumption_error - ' +
            '80: refund_success - ' +
            '90: refund_error - ' +
            '100: payment_success',
        default: 0,
    }),
    __metadata("design:type", Number)
], DonationEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        comment: 'Decode transaction ID',
        nullable: true,
    }),
    __metadata("design:type", String)
], DonationEntity.prototype, "relation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        comment: 'Original transaction or receipt ID',
        nullable: true,
    }),
    __metadata("design:type", String)
], DonationEntity.prototype, "relation_text", void 0);
exports.DonationEntity = DonationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'donations' })
], DonationEntity);
//# sourceMappingURL=donation.entity.js.map