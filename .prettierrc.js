/** @type {import("prettier").Config} */
module.exports = {
    semi: true, // 문장 끝에 세미콜론 붙임
    singleQuote: true, // 문자열은 작은따옴표
    trailingComma: 'all', // 가능한 모든 곳에 후행 쉼표
    tabWidth: 4, // 들여쓰기 2칸
    useTabs: false, // 탭 대신 스페이스
    printWidth: 100, // 한 줄 최대 100자
    bracketSpacing: true, // 중괄호 사이에 공백 유지
    arrowParens: 'always', // 화살표 함수 매개변수 괄호 항상 유지 (TypeScript에 안전)
    endOfLine: 'lf', // 줄바꿈은 LF (Git/Unix 환경)
};
