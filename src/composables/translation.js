export default function translate(key) {
  const translation = {
    Average: 'Средняя',
    AverageKilometers: 'Средний километраж',
  }
  return translation[key] || key.toString()
}