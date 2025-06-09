import { objectType } from 'nexus';

export const Lotto = objectType({
    name: 'Lotto',
    description:
        '1~45의 숫자 중 랜덤한 6개의 숫자와 1개의 추가 번호를 포함하는 로또입니다. 총 7개의 숫자는 모두 중복이 없습니다.',
    definition(t) {
        t.nonNull.list.nonNull.int('numbers', {
            description:
                '1~45 중 랜덤 6개의 숫자를 추출한 배열입니다. 각 숫자는 중복되지 않습니다.',
        });
        t.nonNull.int('additional', {
            description:
                '1~45 중 하나를 추출한 추가 번호입니다. 앞선 6개의 숫자와 중복되지 않습니다.',
        });
    },
});
