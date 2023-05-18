// 3. Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true') // will not be printed
if ("0") console.log('#2 zero is true') // print
if (null) console.log('null is true') // will not be printed, becuase null = false = no value
if (-1) console.log('negative is true') // print
if (1) console.log('positive is true') // print