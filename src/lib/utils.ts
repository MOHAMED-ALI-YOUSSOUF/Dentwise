import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

// Fonction pour formater les numéros de téléphone de Djibouti
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  // On retire tout sauf les chiffres
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  // Ajouter le préfixe +253 si nécessaire
  let formatted = phoneNumber.startsWith("253") ? phoneNumber : `253${phoneNumber}`;

  // Vérifier qu'il y a bien 12 chiffres (+253 + 8 chiffres locaux)
  if (formatted.length !== 12) return value;

  // Formatage : +253 XX XXX XXX
  return `+${formatted.slice(0, 3)} ${formatted.slice(3, 5)} ${formatted.slice(5, 8)} ${formatted.slice(8, 11)}`;
};


//  ai generated 🎉
export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
};

export const APPOINTMENT_TYPES = [
  { id: "checkup", name: "Bilan régulier", duration: "60 min", price: "21 240 FDJ" },
  { id: "cleaning", name: "Nettoyage des dents", duration: "45 min", price: "15 930 FDJ" },
  { id: "consultation", name: "Consultation", duration: "30 min", price: "13 275 FDJ" },
  { id: "emergency", name: "Urgence dentaire", duration: "30 min", price: "26 550 FDJ" },
];

