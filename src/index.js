/** @jsx vNode */
import {vNode, View} from "../node_modules/@ocdla/view/view.js"
console.log("Loaded index.js"); 

const Profile = function(props) {

  return <h2>Hello, First Name: <span class="first-name">{props.firstName}</span> Last Name: <span class="last-name">{props.lastName}</span></h2>;
}


let root = View.createRoot("#app");
root.render(<Profile firstName="José" lastName="Bernal" />);

function* changeNames() {
  let firsts = ["Autumn", "Juan", "Pedro"];
  for(let i=0; i<firsts.length; i++) {
    console.log("yielding", firsts[i]);
    yield firsts[i];
  }
}

const changer = changeNames();

const intId = window.setInterval(() => {
  
  let first = changer.next().value;

  if(!first) {
    window.clearInterval(intId);
    return;
  }

  root.update(<Profile firstName={first} lastName="Bernal" />);
}, 1000);
