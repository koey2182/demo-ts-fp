import { nonNull, queryField } from "nexus";

export const SelectObjectsQuery = queryField("selectObjects", {
    type: nonNull("String"),
    description: "객체 생성하기",
    resolve: async (src, args, ctx, info) => {
        const worksheetSchema = {
            columns: [
                {property: "title", label: "제목", required: true, type: "string"},
                {property: "price", label: "가격", required: true, type: "number"},
            ]
        } as const;

        const objects = parseObjects(worksheetSchema);
        objects.data.forEach(x => {
            console.log(x.title);
        })
        
        return JSON.stringify(objects);
    }
})

type WorkSheetSchema<T extends readonly ColumnSchema[]> = {
    columns: T
}

type ColumnSchema = {
    property: string;
    label: string;
    required: boolean | undefined;
    type: DataType;
}

type DataType = "string" | "number"

type WorkSheetObject<T extends readonly ColumnSchema[]> = {
    data: RowObject<T>[]
}

type RowObject<T extends readonly ColumnSchema[]> = {
    [K in T[number] as K["property"]]: K["required"] extends true ? 
    TypeFromDataType<K["type"]> : 
    TypeFromDataType<K["type"]> | null
}

type TypeFromDataType<T extends DataType> = 
T extends "string" ? string : 
T extends "number" ? number :
unknown

const data = [
    ["제목", "가격", "숨기기", "생성일시", "URL", "HTML"],
    ["한우 맛있겠다", 123000, true, new Date(2025, 6, 11), "https://images.unsplash.com/photo-1690983322025-aab4f95a0269?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJTg2JThDJUVBJUIzJUEwJUVBJUI4JUIwfGVufDB8fDB8fHww", null]
]

const parseObjects = <T extends readonly ColumnSchema[]>(sheetSchema: WorkSheetSchema<T>): WorkSheetObject<T> => {
    return {
        data: [{}]
    } as WorkSheetObject<T>;
}