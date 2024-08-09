import { createConnection } from 'mysql2/promise'

export const newConnection = async () => {
  try {
    const connection = await createConnection ({
      host: "localhost",
      user: "root",
      database: "tasks"
    })
    await connection.connect();
    console.log("conectado a la base de datos correctamente");
    return connection
  } catch (error) {
    console.log("Error al conectarse a la base de datos");
  }
}
