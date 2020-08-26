/*** 
 * 
 * 
 *  **** VARIABLES
 * 
 *****************************************************************/

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;


/***
 * 
 * 
 *  **** BUTTON - FUNCTION
 * 
 *****************************************************************/

/** ADD THREE BUTTONS TO THE DOM. THE BUTTONS ARE:
 *  - UP
 *  - DOWN
 *  - REMOVE
 * 
 * YOU HAVE CRREATE THESE BUTTONS, ADD AN APPROPIATE CLASSNAME, GIVE IT TEXT AND THEN APPEND IT TO THE LI PAREMETER
 * THEN LOOP THROUGH THE LIS VARIABLE AND PASS EACH LIST ITEM AS AN ARGUEMENT TO THE ATTACHLISTITEMBUTTONS FUNCTION. **/


function addListitemsButtons (li){
  const upButton = document.createElement('button');
  upButton.className = 'up';
  upButton.textContent = 'Up';
  li.appendChild(upButton);

  const downButton = document.createElement('button');
  downButton.className = 'down';
  downButton.textContent = 'Down';
  li.appendChild(downButton);

  const removeButton = document.createElement('button');
  removeButton.className = 'up';
  removeButton.textContent = 'Up';
  li.appendChild(removeButton);
}

for (let i =0; i < lis.length; i++){
  addListitemsButtons(lis[i]);
}



/***
 * 
 * 
 *  **** MOVING LI ELEMENTS UP AND DOWN - FUNCTIONS
 * 
 *****************************************************************/

/** CREATE A FUNCTION WHICH ALLOWS USERS TO MOVE LI ELEMENTS UP AND DOWN.
 * 
 *  - THIS FUNCTION WILL THREE IF STATEMENTS.
 *  - EACH STATEMENT WILL CHECK IF THE USER HAS CLICKED ON THE RESPECTIVE BUTTON
 *  
 *  - IF THE USER CLICKS ON THE REMOVE BUTTON, THIS SHOULD REMOVE THE LIST ITEM FROM THE UL
 *  - IF THE USER CLICKS ON THE UP BUTTON, THE LI SHOULD MOVE UP, ONLY IF IT HAS A PREVIOUS ELEMENT SIBLING IN THE DOM
 *  - IF THE USER CLICKS ON THE DOWN BUTTON, THE LI SHOULD MOVE DOWN, ONLY IS THERE IS ANOTHER LI ELEMENT AFTER IT IN THE DOM
 * 
 * YOU HAVE CRREATE THESE BUTTONS, ADD AN APPROPIATE CLASSNAME, GIVE IT TEXT AND THEN APPEND IT TO THE LI PAREMETER
 * THEN LOOP THROUGH THE LIS VARIABLE AND PASS EACH LIST ITEM AS AN ARGUEMENT TO THE ATTACHLISTITEMBUTTONS FUNCTION. **/


listUl.addEventListener('click', (e) =>{
  if (e.target.tagName === 'BUTTON'){
    if(e.target.className === 'remove'){
      const li = e.target.parentNode;
      const ul = li.parentNode
      ul.removeChild(li);
    }

    if (e.target.className === 'up'){
      const li = e.target.parentNode;
      const prevLi = li.previousElementSibling;
      const ul = li.parentNode;
      if (prevLi){
        ul.insertBefore(li, prevLi)
      }
    }

    if (e.target.className === 'down'){
     const li = e.target.parentNode;
     const nextLi = li.nextElementSibling;
     const ul = li.parentNode;
     if (nextLi){
       ul.insertBefore(nextLi, li)
     }
    }
  }
})


/***
 * 
 * 
 *  **** ADDING A CLICK EVENT TO LIST TOOGLELIST VARIABLE
 * 
 *****************************************************************/

/** - WHEN THE USER CLICKS ON THE TOGGLE LIST BUTTON, IT NEEDS TO HIDE OR SHOW THE LIST DIV.
 *  - IN THE CLICK EVENT, YOU WILL CHANGE THE BUTTONS TEXT CONTENT DEPENDING IF THE DIV IS DISPLAYED OR NOT. **/


toggleList.addEventListener('click', () =>{
  if (listDiv.style.display === 'none'){
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});




/***
 * 
 * 
 *  **** ADDING A CLICK EVENT DESCRIPTIONBUTTON VARIABLE
 * 
 *****************************************************************/

/** - WHEN THIS BUTTON IS CLICKED, THE INNER HTML OF THE DESCRIPTIONP VARIBALBE NEEDS TO CHANGE DEPENDING ON WHAT EVER THE USER HAS TYPED IN THE INPUT FIELD
 *  - BE SURE TO CONCATENATE THE VALUE OF THE INPUT WITH A COLON. FOR EXAMPLE 'MY LIST IS:'
 *  - MAKE SURE TO CLEAR THE INPUT FIELD IN THE CLICK EVENT **/




descriptionButton.addEventListener('click', (e) =>{
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
})



/***
 * 
 * 
 *  **** ADDING A CLICK EVENT TO THE ADDITEMBUTTON VARIABLE
 * 
 *****************************************************************/

/** - IN THIS CLICK EVENT YOU WANT TO ADD A LIST ITEM WITH WHATEVER THE USER HAS TYPED IN THE INPUT FIELD, ALONG WITH ALL THREE BUTTONS
 *  - YOU WILL NEED TO CREATE A LIST ITEM AND GAIN REFERNECE TO ITS PARENT ELEMENT.
 *  - THEN YOU WILL NEED TO CALL A FUNCTION WHICH APPENDS THE BUTTONS AND PASS IT A ARGUEMENT
 *  - THEN APPEND THE LIST ITEM TO THE UL
 *  - BE SURE TO CLEAR THE ADD ITEM INPUT FIELD ONCE ITS BEEN CLICKED
 * 
 *  - BONUS - BRING UP AN ALERT MESSAGE IF THE ADD ITEM INPUT FIELD IS EMPTY. THE ALERT MESSAGE SHOULD ASK THE USER TO TYPE IN A LIST ITEM.
 *  -  **/

addItemButton.addEventListener('click', (e) =>{
  if(addItemInput.value === ''){
      alert(' Please type in a list item ');
  }
  else {
    const ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    addListitemsButtons(li);
    ul.appendChild(li);
    addItemInput.value = '';
  }
})
  
  
  

