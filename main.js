requestIdleCallback(() => {
  var i = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("。", () => (i++, i % 2 ? "&#x1f917;" : "&#x1f497;"))
  var i = 0
  document.body.innerHTML = document.body.innerHTML.replaceAll("<br>", () => (i++, i % 2 ? "&#x1f647;<p style='margin:0;'></p>" : "&#x1f603;<p style='margin:0;'></p>"))
  document.body.innerHTML = document.body.innerHTML.replaceAll("、", "&#x1f3b5;")
})
