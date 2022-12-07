const myForm = document.querySelector('#my-form')

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) 

{

  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') 

  {

    msg.classList.add('error');

    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);

  } 

  else 

  {

    var ObjectsPresent=[]

    if(localStorage.getItem('myObj'))

    {

      ObjectsPresent=JSON.parse(localStorage.getItem('myObj'))

    }

    let myNewObj={name:nameInput.value,email:emailInput.value}

    ObjectsPresent.push(myNewObj)

    let ObjectsPresent_serialized = JSON.stringify(ObjectsPresent)

    localStorage.setItem('myObj',ObjectsPresent_serialized)

    nameInput.value = '';

    emailInput.value = '';



    let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'))

    var html = "<table border='1|1'>"

    for(var i=0;i<myObj_deserialized.length;i++)

    {

      html+='<tr>'

      html+='<td>'+myObj_deserialized[i].name+'</td>';

      html+='<td>'+myObj_deserialized[i].email+'</td>';

      html+='<td> <button onclick="deleteRow('+i+')"> Delete </button> </td>'

      html+='<td> <button onclick="editRow('+i+')"> Edit </button> </td>'

      html+='</tr>'

    }

    document.getElementById("table").innerHTML = html   

  }

}



function deleteRow(i)

{

  let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'))

  myObj_deserialized.splice(i,1)

  localStorage.setItem('myObj',JSON.stringify(myObj_deserialized))

  myObj_deserialized = JSON.parse(localStorage.getItem('myObj'))

    var html = "<table border='1|1'>"

    for(var i=0;i<myObj_deserialized.length;i++)

    {

      html+='<tr>'

      html+='<td>'+myObj_deserialized[i].name+'</td>';

      html+='<td>'+myObj_deserialized[i].email+'</td>';

      html+='<td> <button onclick="deleteRow('+i+')"> Delete </button> </td>'

      html+='<td> <button onclick="editRow('+i+')"> Edit </button> </td>'

      html+='</tr>'

    }

    document.getElementById("table").innerHTML = html 

}



function editRow(i)

{

  let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'))

  nameInput.value = myObj_deserialized[i].name;

  emailInput.value = myObj_deserialized[i].email;

  deleteRow(i);

}