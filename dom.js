var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeEl);

filter.addEventListener('keyup', filterItems);
//localStorage.removeItem('Sathishkumar');

//add Item
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var newItem2=document.getElementById('item2').value;

    var li=document.createElement('li');

    //add clas
    li.className='list-group-item';
    var inputValue=document.createTextNode(`${newItem} ${newItem2}`);
   var inputValue2=document.createTextNode(newItem2);
   //var inputvaluefinal=''+inputValue+' '+inputValue2;
    li.appendChild(inputValue);

    itemList.appendChild(li);
    //itemList.appendChild(li.appendChild(inputValue2));

    var deleteBtn=document.createElement('button');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    localStorage.setItem(newItem, newItem2);

    //console.log(li);
}

function removeEl(e){
    if(e.target.classList.contains('delete')){
        console.log(1);
        if(confirm('Are you sure')){
            var x=e.target.parentElement; 
        }
        itemList.removeChild(x);
    }

}

function filterItems(e){
    var text= e.target.value.toLowerCase();
    var item=itemList.getElementsByTagName('li');
    Array.from(item).forEach(function(item){

        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}