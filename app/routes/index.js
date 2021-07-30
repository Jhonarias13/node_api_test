const router = require('express').Router();
const fs = require('fs');

const pathRouter = `${__dirname}`;


const removeExtension = fileName => {
    return fileName.split('.').shift();
}

fs.readdirSync(pathRouter).filter(file => {

    const fileWithOutExtension = removeExtension(file)

    let skip = ['index'].includes(fileWithOutExtension);

    if (!skip) {
        router.use(`/${fileWithOutExtension}`, require(`./${fileWithOutExtension}`));
        console.log('RUTA CARGADA ---->', fileWithOutExtension);
    } 
});

module.exports = router;