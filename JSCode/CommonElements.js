const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];

const set1 = new Set([]);
const commonElements = new Set([]);

for(num of arr1){
    set1.add(num);
}

for(num of arr2){
    if(set1.has(num)){
        commonElements.add(num);
    }
}

console.log(commonElements);