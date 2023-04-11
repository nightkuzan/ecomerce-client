import dayjs from "dayjs";
import "dayjs/locale/th";
dayjs.locale("th");

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import minMax from "dayjs/plugin/minMax";
dayjs.extend(minMax);

export default function(Vue) {
    Vue.prototype.$dayjs = dayjs;
}