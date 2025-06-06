export type Result<T, E extends Error> = {
    isError(): boolean;
    isOk(): boolean;
    orElse(other: T): T;
    orElseGet(f: (e: E) => T): T;
    orElseThrow<R extends Error>(f: (e: E) => R): void;
    ifError(f: (e: E) => void): void;
    ifOk(f: (v: T) => void): void;
    map<R>(f: (v: T) => R): Result<R, E>;
};

const makeResult = <T, E extends Error>(
    value: T | undefined | null,
    error: E | undefined | null,
): Result<T, E> => {
    if (value != null && error != null)
        throw new Error('Result의 값과 에러는 동시에 존재할 수 없습니다.');
    if (value == null && error == null)
        throw new Error('Result의 값과 에러는 동시에 존재하지 않을 수 없습니다.');

    return {
        isError: () => error != null,
        isOk: () => value != null,
        orElse: (other) => value ?? other,
        orElseGet: (f) => value ?? f(error!),
        orElseThrow: (f) => {
            if (error != null) throw f(error);
        },
        ifError: (f) => {
            if (error != null) f(error);
        },
        ifOk: (f) => {
            if (value != null) f(value);
        },
        map: (f) => {
            const newValue = value != null ? f(value) : undefined;
            return makeResult(newValue, error);
        },
    };
};

export const makeOkResult = <T, E extends Error>(v: T): Result<T, E> =>
    makeResult<T, E>(v, undefined);

export const makeErrorResult = <T, E extends Error>(error: E): Result<T, E> =>
    makeResult<T, E>(undefined, error);
