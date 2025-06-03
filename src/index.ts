import { createImutableList } from './examples/imutable-list';

const imutableList = createImutableList(['a', 'b', 'c']);
console.log(imutableList.getData()); // [ 'a', 'b', 'c' ]

const newImutableList = imutableList.push('123').push('456').push('789');
console.log(imutableList.getData()); // [ 'a', 'b', 'c' ]
console.log(newImutableList.getData()); // [ 'a', 'b', 'c', '123', '456', '789' ]
