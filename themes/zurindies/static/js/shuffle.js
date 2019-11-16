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

  projectEls = projectEls.sort(function() { return 0.5 - Math.random(); });
  newChildren = newChildren.concat(projectEls);

  newChildren.forEach(function(child) {
    projects.appendChild(child);
  });
}

window.addEventListener("DOMContentLoaded", (e) => {
  shuffleProjects();
});
