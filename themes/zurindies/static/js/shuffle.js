function shuffleArray(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var x = a[i];
    a[i] = a[j];
    a[j] = x;
  }

  return a;
}

function shuffleProjects() {
  var projects = document.getElementById("projects");

  var newChildren = [];
  var projectEls = [];
  while (projects.children.length) {
    var child = projects.children[0];
    if (child.className === "project") {
      projectEls.push(child);
    } else {
      newChildren.push(child);
    }

    projects.removeChild(child);
  }

  shuffleArray(projectEls);
  newChildren = newChildren.concat(projectEls);

  newChildren.forEach(function(child) {
    projects.appendChild(child);
  });
}

window.addEventListener("DOMContentLoaded", (e) => {
  shuffleProjects();
});
