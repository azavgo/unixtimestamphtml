## Utility to convert dates into UNIX timestamps and to convert UNIX timestamps into dates 

### Features: 
1. A date is converted into UNIX timestamp. The time part of the date is always set to 00:00:00. E.g. 25 December 2021 is converted into 1640390400 UNIX timestamp. That means that this UNIX timestamp specifically reflects 25 December 00:00:00 timestamp;
1. A UNIX timestamp is converted into a date, the time part embedded into the UNIX timestamp will not be shown. E.g. the UNIX timestamp 1640435420 will be converted into 15 December 2021, but not into 25 December 2021 12:30:20 pm. 