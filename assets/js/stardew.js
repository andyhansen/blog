// Horrible JS Lives Here

function extractFilter() {
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get("filter");
  return filter ? filter.toLowerCase() : null;
}

function deactivateLink(filter) {
  const links = Array.from(document.querySelectorAll("a"));

  links.forEach((link) => {
    if (link.innerText.toLowerCase() == filter) {
      const replacementElement = document.createTextNode(link.innerText);

      link.parentElement.replaceChildren(replacementElement)
    }
  })
}

function filterRows(filter) {
  const seasonTds = Array.from(document.querySelectorAll("tr > td:nth-of-type(2)"));

  seasonTds.forEach((seasonTd) => {
    const season = seasonTd.innerText.toLowerCase();

    // Hide rows which don't contain "any" or the relevant season
    if (!season.includes("any") && !season.includes(filter)) {
      seasonTd.parentElement.classList.add("hidden")
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const filter = extractFilter();

  deactivateLink(filter || "none")

  if (!filter || filter == "none") return;

  filterRows(filter);
});