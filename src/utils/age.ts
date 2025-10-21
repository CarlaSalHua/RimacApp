export function calculateAge(birthDay: string): number {
  // Convertir el string "dd-mm-yyyy" a una fecha válida
  const [day, month, year] = birthDay.split('-').map(Number);
  const birthDate = new Date(year, month - 1, day);

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Ajustar si aún no ha cumplido años este año
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}
