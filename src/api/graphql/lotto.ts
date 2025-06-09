import { mutationField, nonNull, objectType, queryField } from 'nexus';
import { makeLotto } from "../../dto/lotto";

export { LottoTypeDef } from "../../dto/lotto"

export const SelectLottoQuery = queryField("selectLotto", {
    type: nonNull("Lotto"),
    description: "로또 번호를 추첨합니다.",
    resolve: async (src, args, ctx, info) => {
        return makeLotto();
    }
})