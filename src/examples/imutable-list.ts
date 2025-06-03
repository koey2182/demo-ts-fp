export type ImutableList<T> = {
    getData: () => T[];
    push: (value: T) => ImutableList<T>;
};

export const createImutableList = <T>(data: T[]): ImutableList<T> => ({
    getData: () => data.slice(),
    push: (value: T) => {
        const copy = data.slice();
        copy.push(value);
        return createImutableList(copy);
    },
});
