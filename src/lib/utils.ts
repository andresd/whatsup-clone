import dayjs from 'dayjs'

import duration from 'dayjs/plugin/duration'
import utc from 'dayjs/plugin/utc'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'

dayjs.extend(isYesterday)
dayjs.extend(isToday)
dayjs.extend(duration)
dayjs.extend(utc)

export const humanizeTimestamp = (timestamp?: number, daily?: boolean) => {
  if (!timestamp) {
    return 'XX:XX'
  }

  const now = dayjs.utc()                 // today's date
  const utc = dayjs.utc(timestamp)        // another date
  const duration = dayjs.duration(now.diff(utc))

  if (daily) {
    if (utc.isToday()) {
      return 'Today'
    }
  } else {
    if (duration.asSeconds() < 60) {
      return 'Now'
    }

    if (utc.isToday()) {
      return dayjs.utc(timestamp).format('HH:mm')
    }
  }
  if (utc.isYesterday())  {
    return 'Yesterday'
  }

  if (duration.asDays() < 7) {
    return dayjs.utc(timestamp).format('dddd')
  }

  return dayjs.utc(timestamp).format('DD/MM/YYYY')
}