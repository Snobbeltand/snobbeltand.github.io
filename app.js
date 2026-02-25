fetch("projects.json")
  .then((response) => response.json())
  .then((data) => {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    document.appendChild(div);
    div.appendChild(ul);
    data.forEach((project) => {
      const li = document.createElement("li");
      li.textContent = project.name;
      ul.appendChild(li);
    });
  });
