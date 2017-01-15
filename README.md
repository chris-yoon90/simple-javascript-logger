# Simple JavaScript Logger

Simple JavaScript Logger wrapper that preserves line numbers. Written in TypeScript, built with WebPack.

Example:
```
var logger = new Logger('MyLogger', 4); //Logging level 1

logger.Log('Hello World');
logger.Info('Hello World');
logger.Warn('Hello World');
logger.Error('Hello World');
```
Above code will result in:

<img width="606" alt="screen shot 2017-01-15 at 1 17 45 am" src="https://cloud.githubusercontent.com/assets/2847067/21961530/b95e276a-dac0-11e6-8736-e493269efce7.png">


# Logging level
- Level 1: Only Error
- Level 2: Error and Warn
- Level 3: Error, Warn and Info
- Level 4: Error, Warn, Info and Log
