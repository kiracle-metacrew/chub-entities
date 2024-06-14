export interface IPosition {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface ISection {
    code: number;
    name: string;
    type: string;
    title?: string;
    description?: string;
    skeleton_image?: string;
    settings: ISectionCustomSettings;
}
export declare enum Mode {
    AUTO = "auto",
    MANUAL = "manual"
}
export declare enum SubsectionMode {
    MANUAL = "manual",
    NEWEST = "newest",
    MOST_VIEWED = "most_viewed"
}
export declare enum DISPLAY_ORDER {
    MANUAL = "manual",
    MOST_VIEWED = "most_viewed",
    LATEST = "latest",
    NEWEST = "newest"
}
export interface IRefreshRule {
    mode: Mode;
    times?: string[];
}
export interface ISectionCustomSettings {
    title?: string;
    description?: string;
    mode?: string;
    grade?: number;
    article_ids?: number[];
    refresh_rule?: IRefreshRule;
    limit_article?: number;
    position?: IPosition;
    display_order?: DISPLAY_ORDER;
    section_type?: string;
    category_ids?: number[];
}
export interface IFooterConfigs {
    registration_number: string;
    company_registration_number?: string;
    chief_editor: string;
    publisher: string;
    youth_protection_officer?: string;
    address: string;
    main_phone: string;
}
export declare enum SECTION_CODE {
    HEADLINE = "headline",
    IMPORTANT = "important",
    LATEST = "latest",
    POPULAR = "popular",
    CATEGORY_Q = "category_q",
    CATEGORY_W = "category_w",
    CATEGORY_Z = "category_z"
}
export declare enum SECTION_TYPE {
    TEMPLATE = "template",
    DEFAULT = "default"
}
