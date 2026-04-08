// import { formatTarget } from "./target";
// import { greet } from "./greeting";

// const message = greet(formatTarget("Rspack"));

// console.log(message);

if (typeof document !== "undefined") {
  const root = document.createElement("main");
  root.textContent = "some content";
  document.body.append(root);
}
