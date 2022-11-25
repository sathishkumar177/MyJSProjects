var form=document.getElementById('addForm');
var userList=document.getElementById('users');


form.addEventListener('submit', addUser);
userList.addEventListener('click', removeEl);

//localStorage.removeItem('object');

function addUser(e){
    e.preventDefault();
    var newItem=document.getElementById('name').value;
    var newItem2=document.getElementById('email').value;

    var li=document.createElement('li');

    li.className='list-users';
   // var inputValue=document.createTextNode(`${newItem} ${newItem2}`);
  // var inputValue2=document.createTextNode(newItem2);
    
    //itemList.appendChild(li.appendChild(inputValue2));

    let obj ={
        firstname: newItem,
        lastname: newItem2
    }
    let obj_serialised = JSON.stringify(obj);
    localStorage.setItem(newItem2, obj_serialised);

    //console.log(li);
    var parsedUser=document.createTextNode(localStorage.getItem(newItem2));
    console.log(localStorage.getItem(newItem2));
    console.log(parsedUser);
    li.appendChild(parsedUser);

    userList.appendChild(li);
    
    var deleteBtn=document.createElement('button');
    
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    
    deleteBtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(deleteBtn);
    
    
}
    


function removeEl(e){
    if(e.target.classList.contains('delete')){
        console.log(1);
        if(confirm('Are you sure')){
            var x=e.target.parentElement; 
        }
        userList.removeChild(x);
    }

}
console.log(allStorage());
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}