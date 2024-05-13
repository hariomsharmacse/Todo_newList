const button = document.getElementById('btn');
const inputBox = document.getElementById('input_text');
const outputBoxes = document.querySelectorAll('.boxes');
const deleteBtn = document.querySelectorAll('.delete_btn');


button.addEventListener('click', () => {
    let newDiv = document.createElement('div');
    let newBtn = document.createElement('button');
    let btnTrack = [];
 
    
    // newBtn.classList.add('delete_btn');
    newBtn.className = "delete_btn";
    newBtn.innerText = "❌";
    // console.log(inputBox.value);
    newDiv.classList.add('box');
    newDiv.innerText = inputBox.value;
    outputBoxes.forEach((box) => {
        box.appendChild(newDiv);
        newDiv.appendChild(newBtn);
    })
    
  let allBtn = document.querySelectorAll('button');

  allBtn.forEach((btn, index) => {
    btn.id = "btn"+(index+1)
    btnTrack.push(btn.id);
  })

  newBtn.addEventListener('click', () => {
    console.log(newBtn.id);
    console.log(btnTrack)
    if(!btnTrack.includes(btn.id)){
        console.log('yes it is')

        outputBoxes.forEach((box) => {
            box.removeChild(newDiv);
            newDiv.removeChild(newBtn);
        })

    }
  })


   
   
})






