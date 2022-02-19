let food =[
    {name:'Apple', 
    
    price:'$0.75'},
    
    {name : 'orange',
    
    price : '$1.00'}];
    const foodList = document.querySelector('.foodList')
const ul =document.createElement('ul')
 for(let item of food){
     const li= document.createElement('li');
     li.innerHTML=item.name;
     li.appendChild(document.createTextNode('Pear'))
     ul.appendChild(li)
    console.log(ul)
    

         
     }