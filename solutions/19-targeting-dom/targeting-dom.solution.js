/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  const firstLi = document.querySelector("li");
  console.log("firstLi", firstLi);

  const myId = document.querySelector("#myId");
  console.log("myId", myId);

  const allLi = document.querySelectorAll("li");
  allLi.forEach((li) => {
    console.log("allLi", li);
  });

  const allBgWarning = document.querySelectorAll(".bg-warning");
  allBgWarning.forEach((li) => {
    console.log(".bg-warning", li);
  });

  const targetButton = document.querySelector("#targetButton");
  console.log(targetButton);

  const targetLinks = document.querySelectorAll(".target-link");
  targetLinks.forEach((link) => console.log(link));

  const cells = document.querySelectorAll("#myRow > .col");
  cells.forEach((cell) => console.log("cell", cell));
})();
