// Task 1 — Debounced Search

// Create a function:

// search(query)


// and debounce it with a delay of 400ms.
// Trigger it multiple times to confirm it fires only once after typing stops. 

// function debounce (fn,delay)
// {
//     let timer;
//     return function (...args)
//     {
//         clearTimeout(timer);
//         timer=setTimeout(()=>fn.apply(this,args),delay);
//     }

// }

// function searchQuery(value) {
//   console.log("Searching for:", value);
// }


// const debouncedSearch = debounce(searchQuery,5000);

// const inputElement = document.querySelector("#input");
// // console.log(inputElement);
// inputElement.addEventListener('input',(event)=>debouncedSearch(event.target.value))


// ✅ Task 2 — Debounced Input Logger

// As the user types into input:

// User typed: D
// User typed: De
// User typed: Dev


// Debounce the handler so it logs ONLY the final stable input.

// const heightOutput = document.querySelector("#height");
// const widthOutput = document.querySelector("#width");


// function debounced(fn,delay)
// {
//      let timer;
//     return function ()
//     {
//          clearTimeout(timer);
//         timer = setTimeout(() => {
//       fn.apply(this);
//     }, delay);
//     }
// }

// function reportWindowSize(){
// heightOutput.textContent=window.innerHeight;
// widthOutput.textContent=window.innerWidth;
//     console.log(window.innerHeight);
//     console.log(window.innerWidth); 
// }

// const debouncedWindowResize = debounced(reportWindowSize,500);

// window.onresize = debouncedWindowResize;


// ✅ Task 4 — Debounced Button Click

// If user rapidly clicks a button 10 times in 1 second,
// you should log "Button clicked!" only once.
// function debounce(fn,delay)
// {
//     let timer;
//     return function ()
//     {
//         clearTimeout(timer);
        
//        timer= setTimeout(() => {
//             fn.apply(this,clickss);
//         }, delay);
//     }
// }

// function clickss()
// {
//     console.log("button is clicked");
// }

// const debouncedClick = debounce(clickss,500);

// const button = document.getElementById("button");
// console.log(button);
// button.addEventListener("click",debouncedClick);


// ✅ Task 5 — Debounce with Immediate Option

// Create a debounce function with a boolean immediate parameter:

// debounce(fn, delay, immediate)


// Behavior:

// immediate = true → fire first click immediately

// Then ignore rapid events

// Fire again only after user stops

// (This is the lodash debounce behavior.)


// function debounce(fn,delay,immediate = false)
// {
//     let timer=null;
   
//     return function (...args)
//     { 
//         const callNow = immediate && !timer;

//         clearTimeout(timer);
        
//        timer = setTimeout(() => {
//             timer = null;
//             if (!immediate) {
//                 fn.apply(this, args);
//             }
//         }, delay);

        
//         if (callNow) {
//             fn.apply(this, args);
//         }
//     }
// }

// function clickss()
// {
//     console.log("button is clicked");
// }

// const debouncedClick = debounce(clickss,1000,true);

// const button = document.getElementById("button");
// console.log(button);
// button.addEventListener("click",debouncedClick);

// ✅ HOW IT WORKS (SIMPLE EXPLANATION)
// Case 1: immediate = false (Normal debounce)
// debounce(fn, 1000, false)


// Behavior:

// CLICK CLICK CLICK CLICK ----> wait 1s ----> fire once


// Only runs after user stops.

// Case 2: immediate = true (Your requirement ✅)
// debounce(fn, 1000, true)


// Behavior:

// CLICK -> RUN IMMEDIATELY
// CLICK CLICK CLICK -> ignored
// (wait 1 sec silence)
// CLICK -> RUN AGAIN


// This is exactly Lodash behavior.

// ✅ Task 6 — Debounced Auto-Save (Mock)

// Simulate auto-saving form content:

// Auto-saving... (after 1s of no typing)


// Requirements:

// Update a variable for each keypress

// Debounce the save function by 1000ms

// Only the final version is saved

// ❗ Bonus Debounce Challenge

// Implement your own debounce() WITHOUT setTimeout.

// (Hint: use requestAnimationFrame)

let content = "";

const input = document.getElementById("editor");
const status = document.getElementById("status");

function saveData() {
  status.innerText = "✅ Saved: " + content;
  console.log("Saved:", content);
}

// ✅ Debounce using setTimeout
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedSave = debounce(saveData, 1000);

input.addEventListener("input", (e) => {
  content = e.target.value;       // ✅ update variable each keypress
  status.innerText = "Auto-saving...";
  debouncedSave();                // ✅ debounce save
});
