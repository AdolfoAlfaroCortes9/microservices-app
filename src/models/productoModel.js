const { pool } = require('../db.js');

// Obtener todos los productos
const getAllProductos = async () => {
  const res = await pool.query('SELECT * FROM ge_productos');
  return res.rows;
};

// Obtener un producto por su código
const getProductoById = async (cod_producto) => {
  const res = await pool.query('SELECT * FROM ge_productos WHERE cod_producto = $1', [cod_producto]);
  return res.rows[0];
};

// Crear un nuevo producto
const createProducto = async (producto) => {
  const { cod_producto, des_producto, ind_real } = producto;
  const res = await pool.query(
    'INSERT INTO ge_productos (cod_producto, des_producto, ind_real) VALUES ($1, $2, $3) RETURNING *',
    [cod_producto, des_producto, ind_real]
  );
  return res.rows[0];
};

// Actualizar un producto existente
const updateProducto = async (cod_producto, producto) => {
  const {  ind_real, des_producto } = producto;
  const res = await pool.query(
    'UPDATE ge_productos SET cod_producto = $1, ind_real = $2 WHERE des_producto = $3 RETURNING *',
    [cod_producto, des_producto, ind_real]
  );
  return res.rows[0];
};

// Eliminar un producto
const deleteProducto = async (cod_producto) => {
  await pool.query('DELETE FROM ge_productos WHERE cod_producto = $1', [cod_producto]);
};

module.exports = { 
  getAllProductos, 
  getProductoById, 
  createProducto, 
  updateProducto, 
  deleteProducto 
};