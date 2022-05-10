function remove(r) {
    var element = document.querySelectorAll("div.left, div.css-8p6k7j, div.css-ph3dp7, div.css-z6uel0, div.scroll-container, div.header-content, div.sidenav-packager, div.jsx-79b5b80f4519a531, div.css-cg4is2").forEach(e => e.remove());   
 
}

setTimeout(remove, 2000); //execute remove after 2000 milliseconds (2 seconds)    

function removetools(t){
let elements = document.querySelectorAll('[data-testid=sidenav-packager]');

for (let element of elements) {
  element.style.display = "none";
    }
}    
    
setTimeout(removetools, 1000); //execute removetools after 1000 milliseconds (1 seconds)