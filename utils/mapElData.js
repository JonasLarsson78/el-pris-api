/* {
"SEK_per_kWh": 0.64118,
"EUR_per_kWh": 0.05919,
"EXR": 10.832655,
"time_start": "2026-04-25T00:00:00+02:00",
"time_end": "2026-04-25T00:15:00+02:00"
}, */

const formateDate = (date) =>
  new Date(date).toLocaleString('sv-SE', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

export default (data) => {
  return data.map((obj) => {
    return {
      startTime: formateDate(obj.time_start),
      endTime: formateDate(obj.time_end),
      pris: Number((obj.SEK_per_kWh * 100).toFixed(2)),
      unit: 'öre',
    }
  })
}
