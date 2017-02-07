

function isNull(value: any) {
    if (value === null) {
        return false;
    } else {
        return true;
    }
}
export async function verify(args: any[], cb?: (errs: string[]) => void): Promise<boolean> {
    let errors = [];
    for (let v of args) {
        let result = v();
        if (typeof result === "string") {
            errors.push(result);
        }
    }
    if (errors.length > 0) {
        if (cb) {
            cb(errors);
            return false
        } else {
            throw errors;
        }
    } else {
        return true;
    }
}
export function objectVerifier(name: string, value: Object): (() => boolean | string) {
    return () => isNull(value) && typeof (value) === 'object' ? true : name;
}
export function stringVerifier(name: string, value: string): (() => boolean | string) {
    return () => isNull(value) && typeof (value) === 'string' ? true : name;
}
export function numberVerifier(name: string, value: number): (() => boolean | string) {
    return () => isNull(value) && typeof (value) === 'number' ? true : name;
}
export function booleanVerifier(name: string, value: boolean): (() => boolean | string) {
    return () => isNull(value) && typeof (value) === 'boolean' ? true : name;
}
export function arrayVerifier(name: string, value: any[]): (() => boolean | string) {
    return () => isNull(value) && value.constructor === Array ? true : name;
}
export function uuidVerifier(name: string, value: string): (() => boolean | string) {
    return () => isNull(value) && value.length === 36 ? true : name;
}
export function strictStringVerifier(name: string, value: string): (() => boolean | string) {
    return () => isNull(value) && typeof (value) === 'string' && value.length > 0 ? true : name;
}
export function dateVerifier(name: string, value: Date): (() => boolean | string) {
    return () => isNull(value) && typeof (value) === 'object' ? true : name;
}


