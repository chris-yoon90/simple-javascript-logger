# Simple JavaScript Logger

Simple JavaScript Logger wrapper that preserves line numbers. Written in TypeScript, built with WebPack.

Example:
```
var logger = new Logger('MyLogger', 4); //Logging level 1

logger.log('Hello World');
logger.Info('Hello World');
logger.Warn('Hello World');
logger.Error('Hello World');
```

# Logging level
- Level 1: Only Error
- Level 2: Error and Warn
- Level 3: Error, Warn and Info
- Level 4: Error, Warn, Info and Log