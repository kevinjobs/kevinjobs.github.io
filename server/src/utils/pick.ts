export default function pick(obj: object, keys: string[]) {
    return keys.reduce((o, k) => {
        if (obj && Object.prototype.hasOwnProperty.call(obj, k)) {
            o[k] = obj[k];
        }
        return o;
    }, {});
}
