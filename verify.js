"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
function isNull(value) {
    if (value === null) {
        return false;
    }
    else {
        return true;
    }
}
function verify(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = [];
        for (const v of args) {
            const result = v();
            if (typeof result === "string") {
                errors.push(result);
            }
        }
        if (errors.length > 0) {
            const error = new Error("参数无法通过验证: " + errors.join(", "));
            throw error;
        }
        else {
            return true;
        }
    });
}
exports.verify = verify;
function objectVerifier(name, value) {
    return () => isNull(value) && typeof (value) === 'object' ? true : name;
}
exports.objectVerifier = objectVerifier;
function stringVerifier(name, value) {
    return () => isNull(value) && typeof (value) === 'string' ? true : name;
}
exports.stringVerifier = stringVerifier;
function numberVerifier(name, value) {
    return () => isNull(value) && typeof (value) === 'number' ? true : name;
}
exports.numberVerifier = numberVerifier;
function booleanVerifier(name, value) {
    return () => isNull(value) && typeof (value) === 'boolean' ? true : name;
}
exports.booleanVerifier = booleanVerifier;
function arrayVerifier(name, value) {
    return () => isNull(value) && value.constructor === Array ? true : name;
}
exports.arrayVerifier = arrayVerifier;
function uuidVerifier(name, value) {
    return () => isNull(value) && value.length === 36 ? true : name;
}
exports.uuidVerifier = uuidVerifier;
function strictStringVerifier(name, value) {
    return () => isNull(value) && typeof (value) === 'string' && value.length > 0 ? true : name;
}
exports.strictStringVerifier = strictStringVerifier;
function dateVerifier(name, value) {
    return () => isNull(value) && typeof (value) === 'object' ? true : name;
}
exports.dateVerifier = dateVerifier;
