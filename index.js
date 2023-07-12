const sets = (set1, set2) => {
    let distinctElements = new Set();
    let sum = 0;

    // Iterate over Set1

    for (let element of set1) {
        if (!distinctElements.has(element)) {
            distinctElements.add(element);
            sum += element
        }
    }

    //  iterate over Set2

    for (let element of set2) {
        if (!distinctElements.has(element)) {
            distinctElements.add(element);
            sum += element
        }
    }

    return sum;

}

let set1 = [3, 1, 7, 9]
let set2 = [2, 4, 1, 9, 3];

const result = sets(set1, set2); 
console.log(result);