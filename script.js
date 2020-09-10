let decimal = 178 //prompt(`Enter a decimal number between 0 and 255.`);
let decimalforbinary = decimal;


let binary128 = 0;
let binary64 = 0;
let binary32 = 0;
let binary16 = 0;
let binary8 = 0;
let binary4 = 0;
let binary2 = 0;
let binary1 = 0;
if(decimal >= 128)
{
    decimal -= 128;
    binary128=1;    
}
if(decimal >= 64)
{
    decimal -= 64;
    binary64 = 1;
}
if(decimal >= 32)
{
    decimal -= 32;
    binary32 = 1;
}
if(decimal >= 16)
{
    decimal -= 16;
    binary16 = 1;
}
if(decimal >= 8)
{
    decimal -= 8;
    binary8 = 1;
}
if(decimal >= 4)
{
    decimal -= 4;
    binary4 = 1;
}
if(decimal >= 2)
{
    decimal -= 2;
    binary2 = 1
}
if(decimal >= 1)
{
    decimal -= 1;
    binary1 = 1;
}
console.log(`${binary128}${binary64}${binary32}${binary16} ${binary8}${binary4}${binary2}${binary1}`);