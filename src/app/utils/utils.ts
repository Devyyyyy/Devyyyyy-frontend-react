export type DateType = Date | string | number;
export const zero = (value: number | string) => value.toString().length === 1 ? `0${value}` : value;

export const dateFormater = (format: string, date: DateType = Date.now()): string => {
    console.log(date);
    const allowForm = date.toString().replace(/\.|\-|\s+/g, "/");
    const _date = new Date(allowForm);
    return format.replace(/(yyyy|mm|dd|MM|DD|H|i|s)/g, (t: string): any => {
        switch (t) {
            case "yyyy":
                return _date.getFullYear();
            case "mm":
                return _date.getMonth() + 1;
            case "dd":
                return _date.getDate();
            case "MM":
                return zero(_date.getMonth() + 1);
            case "DD":
                return zero(_date.getDate());
            case "H":
                return zero(_date.getHours());
            case "i":
                return zero(_date.getMinutes());
            case "s":
                return zero(_date.getSeconds());
            default:
                return "포멧을 선택해주세요.";
        }
    })
}

