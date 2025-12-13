function twoSum(arr1, arr2, num){

    for(let i=0; i<arr1.length; i++){

        for(let j=0; j<arr2.length; j++){

            if(arr1[i] + arr2[j] == num){

                console.log(arr1[i] + " " + arr2[j]);

            }

        }


    }
}

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const num = 5;
twoSum(arr1, arr2, num);