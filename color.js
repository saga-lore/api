class Color {
    // Foreground Colors
    static black = '\x1b[30m';
    static red = '\x1b[31m';
    static green = '\x1b[32m';
    static yellow = '\x1b[33m';
    static blue = '\x1b[34m';
    static magenta = '\x1b[35m';
    static cyan = '\x1b[36m';
    static white = '\x1b[37m';
    static brightBlack = '\x1b[90m';
    static brightRed = '\x1b[91m';
    static brightGreen = '\x1b[92m';
    static brightYellow = '\x1b[93m';
    static brightBlue = '\x1b[94m';
    static brightMagenta = '\x1b[95m';
    static brightCyan = '\x1b[96m';
    static brightWhite = '\x1b[97m';

    // Text Styles
    static reset = '\x1b[0m'; // Reset to default color
    static bold = '\x1b[1m';
    static dim = '\x1b[2m';
    static italic = '\x1b[3m'; // May not be supported in all terminals
    static underline = '\x1b[4m';
    static blinking = '\x1b[5m';
    static reverse = '\x1b[7m';
    static hidden = '\x1b[8m';
}

module.exports = Color;
