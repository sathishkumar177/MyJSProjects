// console.log(document.domain);
// console.dir(document);

document.title='New title';
console.log(document.title);
var header=document.getElementById('header-title');
header.innerText='Hello      All';
//header.textContent='Hello       All';
console.log(header.innerText);
// console.log();


var headerTitle = document.getElementById('main-header');
headerTitle.style.borderBottom = 'solid 3px #000';


var addItem = document.querySelector('.title');
addItem.style.color = 'green';
addItem.fontweight = 'bold';