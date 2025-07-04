import { err, fromThrowable, mapErr, ok, Result } from './result';

export function parseJson<T>(json: string): Result<T, string> {
    return mapErr(
        fromThrowable(() => JSON.parse(json) as T),
        (e) => e.message,
    );
}
