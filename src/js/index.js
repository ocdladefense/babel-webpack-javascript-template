
import "../css/input.css";

// Dynamic import of package components:
// import MODULE_PATH + "/src/index.js";

if(MODULE_PATH)
await import(MODULE_PATH + "/src/index.js");

else
await import ("./main.js");

