
let  DOB = 2000,
    year = 2023,
    name = 'chidimma',
    location = 'awka'

const user = (DOB, year, name, location) => {
    let age = `${year - DOB}`
    let profile = `hello ${name} from ${location}, your current age is ${age}`
    console.log(profile);
    return age
}
const finalProfile = user(DOB, year, name, location)
console.log(finalProfile);



