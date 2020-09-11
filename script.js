let decimal = prompt(`Enter a decimal number between 0 and 255.`);
let decimalforbinary = decimal;

//binary

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

//hexidecimal

rem1 = decimalforbinary % 16;
dec1 = decimalforbinary / 16;
rem2 = Math.floor(dec1) % 16

//remainder1

if(rem1 == 10) {
    rem1 = "A";

}

if(rem1 == 11) {
    rem1 = "B";
    
}

if(rem1 == 12) {
    rem1 = "C";
    
}

if(rem1 == 13) {
    rem1 = "D";
    
}

if(rem1 == 14) {
    rem1 = "E";
    
}

if(rem1 == 15) {
    rem1 = "F";
    
}

//remainder 2

if(rem2 == 10) {
    rem2 = "A";
    
}

if(rem2 == 11) {
    rem2 = "B";
    
}

if(rem2 == 12) {
    rem2 = "C";
    
}

if(rem2 == 13) {
    rem2 = "D";
    
}

if(rem2 == 14) {
    rem2 = "E";
    
}

if(rem2 == 15) {
    rem2 = "F";
    
}

console.log(`The binary of ${decimalforbinary} is ${binary128}${binary64}${binary32}${binary16} ${binary8}${binary4}${binary2}${binary1}`);

console.log(`The hexadecimal of ${decimalforbinary} is ${rem2}${rem1}`);
