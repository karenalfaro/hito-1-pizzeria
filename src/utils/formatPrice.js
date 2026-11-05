// Recibe un número y lo devuelve con punto de miles
// Ejemplo: 25000 -> "25.000"
export const formatPrice = (precio) => {
  return precio.toLocaleString('es-CL')
}