export function formatToSeason(season: string | number): string {
  let number: number = typeof season === 'string' ? parseInt(season, 10) : season;
  if (isNaN(number) || number < 1 || number > 99) {
    throw new Error('El input debe ser un número entre 1 y 99.');
  }
  return `S${number.toString().padStart(2, '0')}`;
}
