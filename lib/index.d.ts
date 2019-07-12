interface Option {
    debuglog: boolean;
    StorageName: string;
    acceptBtnLabel: string;
    cancelBtnLabel: string;
    acceptBoxText: string;
    detailBtnLink: string;
    detailBtnLabel: string;
    hideCancelBtn: boolean;
}
declare global {
    interface Window {
        [name: string]: any;
    }
}
declare const _default: (trackingCode: string, option: Partial<Option>) => void;
export default _default;
