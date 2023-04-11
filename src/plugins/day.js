import dayjs from 'dayjs'

import 'dayjs/locale/th'
dayjs.locale('th')

import buddhistEra from 'dayjs/plugin/buddhistEra'
dayjs.extend(buddhistEra)
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

const registerDayjs = (app) => {
  app.config.globalProperties.$dayjs = dayjs
}

export { registerDayjs, dayjs }
