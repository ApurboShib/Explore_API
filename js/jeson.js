// javaScript object notation (JESON).
const user = {
    id : 222,
    name : 'joy shib',
    profession : 'student'
}
console.log(user); // js.
const stringifyed = JSON.stringify(user); 
console.log(stringifyed); // JESON.

const shop = {
    owner : 'Alia',
    address : {
        street : 'Kochukhet bhoot er golli',
        city : 'molakhet',
        country : 'teknaf'
    },
    products : ['laptop', 'monitor', 'printer', 'alu', 'begun', 'kochu'],
    revenue : 4545555,
    isOpen : true,
    isNew : false
}

console.log(shop);
// jeson.
const shopJESON = JSON.stringify(shop);
console.log(shopJESON);
// same way we also convert (jeson -> object).

const shopObj = JSON.parse(shopJESON);
console.log(shopObj);