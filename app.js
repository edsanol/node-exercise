const { faker } = require('@faker-js/faker')
const FS = require('./modules/fileSystem')

for(let i = 0; i <=1000; i++){
    let randomName = faker.name.findName()

    let name = new FS(randomName)
}
