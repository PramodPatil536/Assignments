function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}

const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = union(setA, setB);

console.log(result);


function intersection(setC, setD) {
    let intersectionSet = new Set();

    for (let i of setD) {
        if (setC.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

const setC = new Set(['apple', 'mango', 'orange']);
const setD = new Set(['grapes', 'apple', 'banana']);

const result2 = intersection(setC, setD);

console.log(result2);


function difference(setE, setF) {
    let differenceSet = new Set(setE)
    for (let i of setF) {
        differenceSet.delete(i)
    }
    return differenceSet
}


const setE = new Set(['grapes', 'apple', 'banana']);
const setF = new Set(['apple', 'mango', 'orange']);

const result3 = difference(setE, setF);

console.log(result3);