export function getTimeFromNumber(duration: number) {
  return {
    hours: Math.floor(duration / 60),
    minutes: Math.floor(duration % 60)
  }
}

export function getDurationTextFromNumber(
  duration: number,
  { withEmpty = false }: { withEmpty?: boolean } = {}
) {
  const { hours, minutes } = getTimeFromNumber(duration)

  if (withEmpty) {
    return `${hours}ч ${minutes}м`
  }

  const result = []
  if (hours) {
    result.push(`${hours}ч`)
  }

  result.push(`${minutes}м`)

  return result.join(' ')
}

export function getDurationDatetimeISO(duration: number) {
  const { hours, minutes } = getTimeFromNumber(duration)

  return `PT${hours}H${minutes}M`
}

export function getYearsRangeTextWithCurrent(startFrom: number, endFrom: number) {
  if (startFrom === endFrom) {
    return String(startFrom)
  }

  return `${startFrom} - ${endFrom}`
}