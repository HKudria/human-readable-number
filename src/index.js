module.exports =function toReadable(number) {
    const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    // const hungers = ['one hundred','one hundred','one hundred','one hundred','one hundred','one hundred','one hundred','one hundred','one hundred']
    let str = ''
    if (number >= 100){
       str += first[~~(number/100)] + ' hundred'
        number = number%100
    }
    if( number >= 20 && number < 100){
        if (str){
            str += ' '
        }
        str += tens[~~(number/10)-2]
        number = number%10
    }
    if (number<20){
        if (str && number){
            str += ' '
        }
        if(str && number){
            str += first[number]
        }
        if (!str){
            str += first[number]
        }
    }
    return str
}



