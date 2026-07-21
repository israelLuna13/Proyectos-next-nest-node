export function isValidPage(value: number) {
  if (value == null) {
    return false;
  }

  if (typeof value !== "number" && isNaN(value)) {
    return false;
  }
  if (value <= 0) {
    return false;
  }

  if (!Number.isInteger(value)) {
    return false;
  }

  return true;
}
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function getPages(currentPage: number, totalPages: number) {
  const pages: (number | string)[] = [];

  // Si hay pocas páginas, mostramos todas
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Siempre mostrar la primera
  pages.push(1);

  // Mostrar "..." si estamos lejos del inicio
  if (currentPage > 4) {
    pages.push("...");
  }

  // Páginas alrededor de la actual
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Mostrar "..." si estamos lejos del final
  if (currentPage < totalPages - 3) {
    pages.push("...");
  }

  // Siempre mostrar la última
  pages.push(totalPages);

  return pages;
}