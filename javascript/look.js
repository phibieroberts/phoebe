const myForm =document.querySelector('#my-form');    
const taskInput=document.querySelector('#task');    
    
const msg =document.querySelector('.msg')  ;  
const itemList =document.querySelector('#items');    
myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    //console.log(nameInput.value);
   if(taskInput.value===''){
       //alert('please enter task');
       msg.classList.add('error');
       msg.innerHTML='please input todo';
setTimeout(()=>msg.remove(),3000);
   }else{
      const li =document.createElement('li');
      li.appendChild(document.createTextNode(`${taskInput.value}`));
   itemList.appendChild(li);
   //clear fields
   taskInput.value='';
 
function todoDelete(){
   var x=document.getElementById('item').innerHTML =style="display:block;"
x.remove();
   
}
   }
}