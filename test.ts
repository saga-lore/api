/* eslint-disable */

import dayjs from "dayjs";
import colors from "colors";

type Log = {
  namespace: "default" | "error" | "test";
  message: string;
  date: string;
}

const logs: Log[] = [];

const getCurrentDate = () => dayjs().format('hh:mm:ss');

const log = (log: Omit<Log, "date">) => {
  logs.push({ ...log, date: getCurrentDate() });
};

// start logging every 50ms to console, clears console every time
setInterval(() => {
  const transformed = logs.reduce((acc: any, { namespace, message, date }, index) => {
    acc[index + 1] = {
      date: colors.yellow(date),
      namespace: namespace === "error" ? colors.red(message) : colors.cyan(namespace),
      message: colors.green(message),
    }; return acc
  }, {})

  console.clear();
  console.log("--------------[ Logs ]--------------");
  console.table(transformed);
}, 50);

// start logging every 5s to logs array, with random namespace, message and date .. just for testing
log({ message: "Hello", namespace: "test" });
setInterval(() => {
  log({ message: Math.random() + '', namespace: Math.random() < 0.5 ? "error" : "test" });
}, 5000);