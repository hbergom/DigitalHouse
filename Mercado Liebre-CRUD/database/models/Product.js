module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define("Product",
       // Columnas
  {
   id: {
    type: dataTypes.INTEGER,
    allowNull: true,
    primaryKey:true,
    autoIncrement: true
   },

   name: {
    type: dataTypes.STRING,
    allowNull: false,
   },

   description: {
    type: dataTypes.STRING,
    allowNull: false,
   },

   price: {
    type: dataTypes.DOUBLE,
    allowNull: false,
   },

   category: {
    type: dataTypes.STRING,
    allowNull: false,
   },

   discount: {
    type: dataTypes.INTEGER,
    allowNull: true,
   },

   image: {
    type: dataTypes.STRING(45),
    allowNull: false,
}
},

  {
  tableName: 'productos', //Nombre de la tabla
  timestamps: false,  

  });
    return Product;  
  }
