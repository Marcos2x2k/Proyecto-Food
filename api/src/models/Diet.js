
//inyecto la coneccion a sequelize
const { DataTypes } = require('sequelize');



//Exporto la funcion que defino en mi modelo
module.exports = (sequelize) => {
    //ACA DEFINO EL MODELO
    const Diet = sequelize.define ('Diet', {
       name: {
        type: DataTypes.STRING,
        allowNull: true 
    },})//, {timestamps: false}); // Marca de tiempo timestamps para que pueda saber cuándo el dato 
                             // entró en la base de datos y cuándo se actualizó por última vez.
    return Diet;
};

// Tipo de dieta con las siguientes propiedades:
// ID (Crea automaticamente)
// Nombre 