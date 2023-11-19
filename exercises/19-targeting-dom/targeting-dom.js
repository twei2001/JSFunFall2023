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
  console.log(document.querySelector("ul li"));
  console.log(document.querySelector("#myId"));
  const list = document.querySelectorAll('.bg-warning');
  list.forEach((list) =>{
    console.log(list)
  })
  console.log(document.querySelector(".mb-4 li:nth-child(2)"));
  const links = document.querySelectorAll('.social-media');
  links.forEach((link) =>{
    console.log(link)
  })
  console.log(document.querySelector("#myRow div"));
  console.log(document.querySelector("#myRow div:nth-child(2)"));
})();

