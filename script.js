// Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
// «.@» или «@@», «_@», «@-», «--» и т.п.
// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и
// т.п.) не может быть длиной менее 2 и более 11 символов.
let email = 'ts.lo1Nick@gpf'
let arraySymbol = ['_', '-', '.', '@']
const enlgishSymbols = 'abcdefghijklmnopqrstuvwxyz'.split('')

const checkEmail = (email) => {
    if(enlgishSymbols.includes(email[0].toLowerCase()) && enlgishSymbols.includes(email[email.length - 1])) {
        for(let i=0; i<email.length - 1; i++) {
            if(arraySymbol.includes(email[i]) && arraySymbol.includes(email[i+1])) {
                return console.log('email is not correct')
            }
        }
        if(email.length - email.lastIndexOf('@') > 2) {
            if(email.indexOf('.') > 1) {
                const difference = email.lastIndexOf('@') - email.lastIndexOf('.')
                if(difference > 2 && difference < 11) {
                    const endOfEmail = email.length - 1 - email.lastIndexOf('@')
                    if( endOfEmail > 2 && endOfEmail < 11) {
                        console.log('correct')
                    } else {
                        console.log('email is not correct')
                    }
                }
            }
        }
    } else {
        return console.log('email is not correct')
    }
    
    
}
checkEmail(email)
