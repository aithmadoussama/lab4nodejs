document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.format-date').forEach((el) => {
    const text = el.textContent.trim();
    if (!text) return;

    const d = new Date(text);
    if (!isNaN(d)) {
      el.textContent = d.toLocaleDateString('fr-FR');
    }
  });
});