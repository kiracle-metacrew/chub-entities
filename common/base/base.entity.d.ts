export declare class BaseEntity<TEntity> {
    id: number;
    constructor(entity?: Partial<TEntity>);
    created_at?: Date | string;
    updated_at?: Date | string;
    beforeInsert(): void;
    beforeUpdate(): void;
}
