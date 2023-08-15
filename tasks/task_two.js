let userBio = {
    occupation: 'teaching',
    height: '6ft',
    gender: 'female',
    nationality: 'Nigerian'
}


let userBio1 = {
    occupation: 'civil servant',
    height: '4ft',
    gender: 'male',
    nationality: 'Nigerian'
}
let userBio2 = {
    occupation: 'nurse',
    height: '5ft',
    gender: 'female',
    nationality: 'Nigerian'
}
function profile (key){

    let {gender, occupation} = key
    let statement = (`she is a ${gender}, and her occupation is ${occupation}`)
    console.log(statement);
}
profile(userBio)
profile(userBio1)
profile(userBio2)

// let {occupation} = userBio
// console.log(occupation)
