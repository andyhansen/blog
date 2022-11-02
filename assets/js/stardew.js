// Horrible JS Lives Here

function extractFilter() {
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get("filter");
  return filter ? filter.toLowerCase() : null;
}


function filterRows(filter) {
  const seasonTds = Array.from(document.querySelectorAll("tr > td:nth-of-type(2)"));

  seasonTds.forEach((seasonTd) => {
    const season = seasonTd.innerText.toLowerCase();

    // Skip td if it's any of the season we care about
    if (season.includes("any") || season.includes(filter)) return;

    seasonTd.parentElement.classList.add("hidden")
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const filter = extractFilter();

  if (!filter || filter == "none") return;

  filterRows(filter);
});