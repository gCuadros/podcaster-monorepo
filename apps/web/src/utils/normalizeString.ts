// Elimina espacios en blanco y caracteres especiales
export const normalizeString = (text?: string) =>
  (text || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
