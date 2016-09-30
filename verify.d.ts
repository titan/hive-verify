export declare function verify(args: any[], cb: (errs: string[]) => string): boolean;
export declare function objectVerifier(name: string, value: Object): (() => boolean | string);
export declare function stringVerifier(name: string, value: string): (() => boolean | string);
export declare function numberVerifier(name: string, value: number): (() => boolean | string);
export declare function booleanVerifier(name: string, value: boolean): (() => boolean | string);
export declare function arrayVerifier(name: string, value: any[]): (() => Boolean | string);
