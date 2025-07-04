export type Result<T, E> = Ok<T> | Err<E>;

export type Ok<T> = {
    type: 'ok';
    data: T;
};

export type Err<T> = {
    type: 'err';
    reason: T;
};

export function ok<T>(data: T): Ok<T> {
    return { type: 'ok', data };
}

export function err<T>(reason: T): Err<T> {
    return { type: 'err', reason };
}

export function map<T, E, U>(result: Result<T, E>, mapper: (data: T) => U): Result<U, E> {
    switch (result.type) {
        case 'ok':
            return ok(mapper(result.data));
        case 'err':
            return result;
    }
}

export function then<T, E, U, F>(
    result: Result<T, E>,
    mapper: (data: T) => Result<U, F>,
): Result<U, E | F> {
    switch (result.type) {
        case 'ok':
            return mapper(result.data);
        case 'err':
            return result;
    }
}

export function mapErr<T, E, F>(result: Result<T, E>, mapper: (reason: E) => F): Result<T, F> {
    switch (result.type) {
        case 'ok':
            return result;
        case 'err':
            return err(mapper(result.reason));
    }
}

export function orElse<T, E>(result: Result<T, E>, other: T): T {
    switch (result.type) {
        case 'ok':
            return result.data;
        case 'err':
            return other;
    }
}

export function orElseGet<T, E>(result: Result<T, E>, getter: (reason: E) => T): T {
    switch (result.type) {
        case 'ok':
            return result.data;
        case 'err':
            return getter(result.reason);
    }
}

export function ifErr<T, E>(result: Result<T, E>, handleReason: (reason: E) => void): void {
    if (result.type === 'err') {
        handleReason(result.reason);
    }
}

export function ifOk<T, E>(result: Result<T, E>, handleData: (data: T) => void): void {
    if (result.type === 'ok') {
        handleData(result.data);
    }
}

export function handleResult<T, E>(
    result: Result<T, E>,
    handleData?: (data: T) => void,
    handleReason?: (reason: E) => void,
): void {
    if (handleData) {
        ifOk(result, handleData);
    }
    if (handleReason) {
        ifErr(result, handleReason);
    }
}

export function fromThrowable<T>(throwable: () => T): Result<T, Error> {
    try {
        const data = throwable();
        return ok(data);
    } catch (e) {
        if (typeof e === 'string') {
            return err(new Error(e));
        }
        if (e instanceof Error) {
            return err(e);
        }
        return err(new Error(JSON.stringify(e)));
    }
}
