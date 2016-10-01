"use strict";
function isNull(value) {
    if (value === null) {
        return false;
    }
    else {
        return true;
    }
}
function verify(args, cb) {
    let errors = [];
    for (let v of args) {
        let result = v();
        if (typeof result === "string") {
            errors.push(result);
        }
    }
    if (errors.length > 0) {
        cb(errors);
        return false;
    }
    else {
        return true;
    }
}
exports.verify = verify;
function objectVerifier(name, value) {
    return () => isNull(value) && typeof (value) === 'object' ? true : name;
}
exports.objectVerifier = objectVerifier;
function stringVerifier(name, value) {
    return () => isNull && typeof (value) === 'string' ? true : name;
}
exports.stringVerifier = stringVerifier;
function numberVerifier(name, value) {
    return () => isNull && typeof (value) === 'number' ? true : name;
}
exports.numberVerifier = numberVerifier;
function booleanVerifier(name, value) {
    return () => isNull && typeof (value) === 'boolean' ? true : name;
}
exports.booleanVerifier = booleanVerifier;
function arrayVerifier(name, value) {
    return () => isNull && value.constructor === Array ? true : name;
}
exports.arrayVerifier = arrayVerifier;
function uuidVerifier(name, value) {
    return () => isNull && value.length === 36 ? true : name;
}
exports.uuidVerifier = uuidVerifier;
