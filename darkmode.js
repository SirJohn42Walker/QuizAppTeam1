const colorScheme =
  localStorage.getItem("color-scheme") || getPreferredColorScheme();
document.documentElement.setAttribute("data-color-scheme", colorScheme);

const getPreferredColorScheme = () => {
  const darkQuery = "(prefers-color-scheme.dark)"; //fragt ab, ob der User im Browser das Farbschema auf dunkel gesetzt hat.
  const darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
  if (darkMQL.media === darkQuery && darkMQL.matches) {
    return "dark";
  }
  return "default";
};

document.getElementById("button").onclick = () => {
  const colorScheme =
    document.documentElement.getAttribute("data-color-scheme");
  document.documentElement.setAttribute(
    "data-color-scheme",
    colorScheme === "default" ? "dark" : "default"
  );
};

document.getElementById("button").onclick = () => {
  const colorScheme =
    document.documentElement.getAttribute("data-color-scheme");
  const newColorScheme = colorScheme === "default" ? "dark" : "default";
  document.documentElement.setAttribute("data-color-scheme", newColorScheme);
  localStorage.setItem("color-scheme", newColorScheme);
};
