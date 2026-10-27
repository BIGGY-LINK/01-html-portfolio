const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const themeButton = document.querySelector(".theme-toggle");
const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
const updateThemeButton = () => {
  const isDark = document.documentElement.dataset.theme === "dark" || (!document.documentElement.dataset.theme && colorScheme.matches);
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeButton.textContent = isDark ? "Light mode" : "Dark mode";
};
updateThemeButton();
themeButton.addEventListener("click", () => {
  document.documentElement.dataset.theme = themeButton.getAttribute("aria-pressed") === "true" ? "light" : "dark";
  localStorage.setItem("theme", document.documentElement.dataset.theme);
  updateThemeButton();
});
colorScheme.addEventListener("change", () => {
  if (!document.documentElement.dataset.theme) updateThemeButton();
});

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});
