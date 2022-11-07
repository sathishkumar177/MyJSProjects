var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='yellow';
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.backgroundColor='black';

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='yellow';
// console.log(itemList.parentElement.parentNode);
// itemList.parentElement.parentElement.style.backgroundColor='black';


//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='Yellow';

// itemList.firstElementChild.style.backgroundColor='pink';

// itemList.lastElementChild.style.backgroundColor='violet';

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor='Yellow';

//createElement

var newDiv=document.createElement('div');
newDiv.className='Hello';
newDiv.id='Hello-1';
newDiv.setAttribute('title','Hellow Div');

var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
console.log(newDiv);


var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv, h1);







