document.querySelector("button").addEventListener("click", function () {
  var test = document.querySelector("#taskInput").value;
  console.log(test);

  var listitem = document.createElement("li");
  console.log(listitem);
  listitem.innerHTML = test;
  var list = document.querySelector("#taskList");
  list.append(listitem);

  list.style.paddingLeft = "17px";
  listitem.style.border = "1px solid lightgray";

  listitem.addEventListener("click", function () {
    listitem.remove();
  });
  document.querySelector("#taskInput").value = "";
  document.querySelector("#taskInput").focus();
  listitem.style.listStyleType = "upper-greek";
  listitem.style.marginBottom = "10px";
  listitem.style.padding = "10px";
});
