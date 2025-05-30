const obj1={ name:"abes ec"};
const obj2={ addess:"ghaziabad"};
const obj3={ ...obj1,...obj2};
console.log(obj3);
const obj4=Object.assign({},obj1,obj2);
console.log(obj4);