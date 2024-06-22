const button = document.getElementById('btn');
const inputBox = document.getElementById('input_text');
const box = document.querySelector('.boxes');
const deleteBtn = document.querySelectorAll('.delete_btn');
let localstorageValues = JSON.parse(localStorage.getItem("todoList")) || [];


button.addEventListener('click', () => {
  let value = inputBox.value.trim();
  localstorageValues.push(value);
  
  localStorage.setItem("todoList", JSON.stringify(localstorageValues));
  
  // console.log(localstorageValues);
  
  let newDiv = document.createElement('div');
  let newBtn = document.createElement('button');

        newBtn.classList.add('delete_btn');
        newBtn.className = "delete_btn";
        newBtn.innerText = "❌";
        // console.log(inputBox.value);
        newDiv.classList.add('box');
        newDiv.innerText = inputBox.value;
        inputBox.value = "";
    
        box.appendChild(newDiv);
        newDiv.appendChild(newBtn);

        newBtn.addEventListener('click', (e) => {
          removeBtn(e);
      })
      
   
})

// console.log(localstorageValues);

function setAllvalues() {
  localstorageValues.forEach(element => {
    let newDiv = document.createElement('div');
    let newBtn = document.createElement('button');

    newBtn.className = "delete_btn";
        newBtn.innerText = "❌";
        // console.log(inputBox.value);
        newDiv.classList.add('box');
        newDiv.innerText = element;
        inputBox.value = "";
    
        box.appendChild(newDiv);
        newDiv.appendChild(newBtn);
        
        newBtn.addEventListener('click', (event) => {
        removeBtn(event);
      })

    });
}

setAllvalues();

function removeBtn(data) {
  let currTarget = data.target;
  let previousValue = currTarget.parentNode;
  box.removeChild(previousValue);
  let dataofPre = (previousValue.innerText).slice(0, -1);

  let indexofPre = localstorageValues.indexOf(dataofPre);
  // console.log(dataofPre);
  localstorageValues.splice(indexofPre, 1);
  // console.log(localstorageValues);
  localStorage.setItem("todoList", JSON.stringify(localstorageValues));
}







