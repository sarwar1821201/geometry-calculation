//console.log('clicked');

// for first card
 let serial=0;

document.getElementById('first-card').addEventListener('click',function(){
      serial +=1;   
    const firstElement= document.getElementById('first-name').innerText;
    const valueForBase= document.getElementById('first-input');
    const valueForHeight= document.getElementById('last-input');

   if(isNaN(valueForBase.value) || isNaN(valueForHeight.value) || valueForBase.value==='' || valueForHeight.value==='' ||  valueForBase.value<=0 || valueForHeight.value<=0
    ){
         alert("please enter any valid number");
    }

    const totalCalculation = 0.5 * parseFloat(valueForBase.value) * parseFloat(valueForHeight.value);
    displayData(firstElement, totalCalculation);
});

//for second card

document.getElementById('second-card').addEventListener('click',function(){
    serial +=1;
    const secondElement= document.getElementById('second-name').innerText;
    const valueForWidth=document.getElementById('width-input');
    const valueForLength= document.getElementById('length-input');
  
    if(isNaN(valueForWidth.value) || isNaN(valueForLength.value) || valueForWidth.value==='' || valueForLength.value==='' || valueForWidth.value<=0 || valueForLength.value<=0 ){
         alert("please enter any valid number");
    }
    
    const totalCalculation= parseFloat(valueForWidth.value) * parseFloat(valueForLength.value);
    displayData(secondElement, totalCalculation);
})

// for third card calculation
document.getElementById('third-card').addEventListener('click', function(){
    serial +=1;
    //get the data from html
    const thirdElement= document.getElementById('third-name').innerText;
    const baseValue= document.getElementById('base-value').innerText;
    const heightValue= document.getElementById('height-value').innerText;
    //console.log(baseValue, heightValue,thirdElement);
    const totalCalculation= parseFloat (baseValue)  * parseFloat(heightValue);
   // console.log(typeof totalCalculation);

   // show the data 
     
    displayData(thirdElement,totalCalculation);
});

// for fourth card calculation
 document.getElementById('fourth-card').addEventListener('click', function(){
     serial +=1;
     //get data from html
     const fourthElement= document.getElementById('fourth-name').innerText;
     const d1Value= document.getElementById('d1-value').innerText;
     const d2Value= document.getElementById('d2-value').innerText;

     const totalCalculation= 0.5 * parseFloat(d1Value) * parseFloat(d2Value);

     displayData(fourthElement,totalCalculation)
 });


 //for fifth card calculation
 document.getElementById('fifth-card').addEventListener('click', function(){
    serial +=1;
    const fifthElement= document.getElementById('fifth-name').innerText;
    const pValue= document.getElementById('p-value').innerText;
    const baseValue= document.getElementById('base-value').innerText;

    const totalCalculation=0.5 * parseFloat (pValue) * parseFloat(baseValue);
    displayData(fifthElement,totalCalculation);

 });


 // for last card calculation

 document.getElementById('last-card').addEventListener('click', function(){
    serial +=1;
    const lastElement= document.getElementById('last-name').innerText;
    const areaValue= document.getElementById('area-value').innerText;
    const baseValues= document.getElementById('base-values').innerText;
   
    const calculation= (3.14)* parseFloat(areaValue) * parseFloat(baseValues) ;
     
    const totalCalculation= calculation.toFixed(2);
    displayData(lastElement,totalCalculation);
     
 });

document.getElementById('blog-btn').addEventListener('click',function(){
    //console.log('hello');
    window.location.href='blog.html';
});

function displayData(nameOfElement,totalCalculation){
    const container= document.getElementById('table-container')

    const tr= document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${nameOfElement}</td>
    <td>${totalCalculation}cm<sup>2</sup></td>
    <td> <a
     class="capitalize text-white bg-amber-500 px-3 py-2 font-semibold rounded-md">
     Convert to m <sup>2</sup>
     </a>
    </td>

    `
    container.appendChild(tr);
}
   
