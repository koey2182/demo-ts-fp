import { makeErrorResult, makeOkResult, Result } from './result';

export const run = () => {
    // foo 함수는 성공 Result를 반환합니다.
    function foo() {
        return makeOkResult('this is result');
    }

    // goo 함수는 실패 Result를 반환합니다.
    function goo(): Result<string, TypeError> {
        return makeErrorResult(new TypeError('Task was failed.'));
    }

    // 1. isError 메서드로 Result가 실패인지 확인할 수 있습니다.
    console.log('is foo() error?', foo().isError());
    console.log('is goo() error?', goo().isError());

    // 2. isOk 메서드로 Result가 성공인지 확인할 수 있습니다.
    console.log('is foo() ok?', foo().isOk());
    console.log('is goo() ok?', goo().isOk());

    // 3. ifError 메서드로 실패 Result인 경우 예외 객체를 처리할 수 있습니다.
    foo().ifError((e) => console.log('foo() error message:', e.message));
    goo().ifError((e) => console.log('goo() error message:', e.message));

    // 4. ifOk 메서드로 성공 Result인 경우 성공 응답을 처리할 수 있습니다.
    foo().ifOk((res) => console.log('foo() response:', res));
    goo().ifOk((res) => console.log('foo() response:', res));

    // 5. map 메서드로 성공 Result의 결과 타입을 변경할 수 있습니다.
    console.log(
        'foo() result length:',
        foo()
            .map((x) => x.length)
            .orElse(-1),
    );
    console.log(
        'goo() result length:',
        goo()
            .map((x) => x.length)
            .orElse(-1),
    );

    // 6. orElse 메서드로 실패 Result인 경우 기본값을 얻을 수 있습니다.
    console.log('foo().orElse:', foo().orElse('Hello, World!'));
    console.log('goo().orElse:', goo().orElse('Hello, World!'));

    // 7. orElseGet 메서드로 실패 Result인 경우 예외 타입에 따라 다른 기본값을 얻을 수 있습니다.
    console.log(
        'foo().orElseGet:',
        foo().orElseGet((e) => e.name),
    );
    console.log(
        'goo().orElseGet:',
        goo().orElseGet((e) => e.name),
    );

    // 8. orElseThrow 메서드로 실패 Result인 경우 에러를 던질 수 있습니다. 에러 유형에 따라 다른 에러를 던질 수도 있습니다.
    foo().orElseThrow((e) => e);
    goo().orElseThrow((e) => e);
};
