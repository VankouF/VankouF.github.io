const buttons = document.querySelectorAll(".filter-button");
const papers = document.querySelectorAll(".publication");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    papers.forEach((paper) => {
      const visible = filter === "all" || paper.dataset.category === filter;
      paper.classList.toggle("is-hidden", !visible);
    });
  });
});
