import {test, expect} from '@playwright/test';

//basic assertions

let number = 10;

let obj = {"name":"shrey", "age":37};

let numbers = [10,20,30,40];

test('to be', async () => {

    expect(10).toBe(number);                                //expected vs actual
                                                           //expect(expected).toBe(actual)
});


test('to equal', async () => {

    expect(37).toEqual(obj.age);
    
});


test('to equal 1', async () => {
    expect("shrey").toEqual(obj.name);
})


test('to contain', async () => {

    expect("shrey").toContain(obj.name);

});


test('to contain1', async () => {

    expect(numbers).toContain(40);
    
});


let names = ["java", "javascript", "python"];

test('toBetruthy', async () => {

    for(let val of names){
        if(expect(names).toContain("java")){                 //expect should not be used like this
            console.log("names contains java");
        }
        else{
            console.log("names does not contain java");
        }
    }

});


test('test function', async () => {
    for(let val of names){
        if(val.match("java")){
            console.log("names contains java");
        }
        else{
            console.log("names doesn't contains java");
        }
    }
});