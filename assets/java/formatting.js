new Cleave(getHTML("militaryTime", false), {
    time: true,
    timePattern: ['h', 'm']
});

new Cleave(getHTML("inputNumber", false), {
    numeral: true,
    numeralDecimalMark: '',
    delimiter: ''
});