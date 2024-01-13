export function formatMillisecondsToTime(milliseconds) {
  // Convertir milisegundos a minutos y segundos
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Formatear los minutos y segundos con ceros a la izquierda si son menores que 10
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  // Devolver la cadena formateada "MM:SS"
  return `${formattedMinutes}:${formattedSeconds}`;
}