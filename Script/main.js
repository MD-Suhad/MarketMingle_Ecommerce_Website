const imperative = [
   "React is declarative",
   "It is fast",
   "jsx is simple",
   "It is component way",
   "It is easy to learn",
   "It is fun to use"
];

function whylearnReact(){
      const whyReact = document.getElementById("why-react");
      const heading = document.createElement("h2");
      heading.innerText = "why-react?";
      heading.classList.add("heading");
      whyReact.appendChild(heading);
        

      for(let i = 0; i<imperative.length; i++){
         const list = document.createElement("li");
         list.innerText = imperative[i];
         whyReact.appendChild(list);
     }

   }






whylearnReact()



