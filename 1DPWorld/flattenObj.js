let user = {
    name: 'John',
    address: {
        country: 'India',
        state: 'India',
        education: {
            school: "APS",
            year: 2021
        }
    }
};

const getFlatObj = (nestedObj) => {
    const flatObj = {}
    const flat = (nestedObj, prefix) => {
        for(let [key, value] of Object.entries(nestedObj)){
            if(typeof value==='object'){
                flat(value, `${prefix}.${key}`)
            } else{
                flatObj[`${prefix}.${key}`] = value
            }
        }
    }
    flat(nestedObj, 'user')
    return flatObj
}
const flatObj = getFlatObj(user);
console.log(flatObj);
