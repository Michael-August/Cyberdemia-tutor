// /utils/constants.ts
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const baseUrl = "https://cyberdemia-backend.onrender.com/api/v1";
