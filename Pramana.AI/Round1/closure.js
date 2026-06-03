function outer(){
    let count = 0
    return function inner(){
        count++
        console.log(count);
    }
}
const increment = outer()
increment()
increment()



const testPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1000);
});

async function asyncCall() {
    console.log('asyncCall start');
    const result = await testPromise();
    console.log(result);
}

asyncCall();

testPromise().then(console.log);

console.log('Script end');

// Script start
// asyncCall start
// Script end
// Promise resolved