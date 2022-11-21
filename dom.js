var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeEl);

//add Item
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;

    var li=document.createElement('li');

    //add clas
    li.className='list-group-item';
    var inputValue=document.createTextNode(newItem);
    li.appendChild(inputValue);

    itemList.appendChild(li);

    var deleteBtn=document.createElement('button');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    console.log(li);
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