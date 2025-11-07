// config/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql', 
  host: 'pcdonathan',
  username: 'nthan_xp',
  password: 'nathan123',
  database: 'cadastro_de_usuario',
  port: 3306,
  logging: false, 
  define: {
    timestamps: true,
    underscored: true, 
  }
});

// Testar conexão
try {
  await sequelize.authenticate();
  console.log('Conexão com o banco estabelecida com sucesso.');
} catch (error) {
  console.error('Erro ao conectar com o banco:', error);
}

export default sequelize;