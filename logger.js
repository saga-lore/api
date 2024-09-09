const Color = require('./color'); 
class Logger {
    constructor() {
        
    }
    getCurrTimestamp() {
        const now = new Date();
        const hour = now.getHours();   // Gets the hour (0-23)
        const minute = now.getMinutes(); // Gets the minutes (0-59)
        return [hour, minute];
    }

    getInfo(status, message, controller){
        const [hour, minute] = this.getCurrTimestamp();
        const information = [
            {
                Status: status,
                Message: message,
                Hour: hour,
                Minute: minute,
                Controller: controller
            }
        ];
        return information;
    }

    // Log function
    log(message, controller = '') {
        
        let log = "Logs"
        console.log(Color.green + log + Color.reset)
        
        const information = this.getInfo(message, controller);
        console.table(information);
    }
    // Warnning Function 
    warn(message, controller = ''){
        let warn = "Warning"
        console.log(Color.yellow + warn + Color.reset)
        const information = this.getInfo(message, controller);
        console.table(information)
    }
    // Error Function
    error(message, controller = ''){
        let warn = "Error"
        console.log(Color.red + warn + Color.reset)
        const information = this.getInfo(message, controller);
        console.table(information)
    }

}

module.exports = Logger;
