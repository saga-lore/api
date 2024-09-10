
import colors from "colors";

type Info = {
  namespace: string; // Can be "default", "error", or "log"
  message: string;
  date: string;
};

class Logger {
  logs: Info[] = [];
  errors: Info[] = [];

  constructor() {
    this.logs = [];
    this.errors = [];

    // Start intervals on instantiation
    this.startLoggingInterval();
  }

  getCurrentTimestamp(): string {
    const dateNow = new Date();
    const hours = dateNow.getHours().toString().padStart(2, '0');
    const minutes = dateNow.getMinutes().toString().padStart(2, '0');
    const seconds = dateNow.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }

  
  // Method to start logging interval
    startLoggingInterval() {
        setInterval(() => {
            const transformedFLogs = this.transformation(this.logs);
            const transformedFErrors = this.transformation(this.errors);
            console.clear();
            console.log("----------------- [ Logs ] ------------------");
            console.table(transformedFLogs);
            console.log("\n------------------ [ Errors ] ---------------")
            console.table(transformedFErrors);
            }, 1000);
    }
    // Transformation function (transform form logs or errors to object that containe index)
    transformation(array: Info[]): any[] {
        const transformed = array.reduce((acc: any, { namespace, message, date }, index) => {
            acc[index + 1] = {
              namespace: namespace === "error" ? colors.red(namespace) : colors.cyan(namespace),
              message: colors.green(message),
              date: colors.yellow(date),
            }; return acc
          }, {})

        return transformed;
    }   

    // The Omit<Type, Keys> utility type in TypeScript creates a new type by excluding specific properties (Keys) from an existing type (Type).

    log(log: Omit<Info, "date">) {
    this.logs.push({ ...log, date: this.getCurrentTimestamp() });
    }

    error(log: Omit<Info, "date">) {
        this.errors.push({ ...log, date: this.getCurrentTimestamp() });
    }
}

// Create an instance of the Logger class
const logger = new Logger();

// Call the log method with the correct parameters
logger.log({ message: "This is programming", namespace: "log" });
logger.log({ message: "This is gramming", namespace: "log" });
logger.log({ message: "This is progrng", namespace: "log" });
logger.error({ message: "the name of the function is not correct", namespace: "error" });

