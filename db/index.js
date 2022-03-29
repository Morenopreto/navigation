import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('eventos.db')

const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS eventos (
          id INTEGER PRIMARY KEY NOT NULL,
          nombreCreador TEXT NOT NULL,
          fotoPerfil TEXT NOT NULL,
          diaEvento TEXT NOT NULL,
          horaEvento TEXT NOT NULL,
          nombreEvento TEXT NOT NULL,
          lugarEvento TEXT NOT NULL,
          clasificacionEvento TEXT NOT NULL,
          cantidadAsistentes INTEGER NOT NULL,
          observaciones TEXT NOT NULL,
          imagenEvento TEXT NOT NULL
        )`,
        [],
        () => { resolve() },
        (_, err) => { reject(err) },
      )
    });
  })

  return promise;
}

export const insertEvento = (nombreCreador ,fotoPerfil ,diaEvento ,horaEvento ,nombreEvento ,lugarEvento ,clasificacionEvento ,cantidadAsistentes ,observaciones ,imagenEvento) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO eventos (nombreCreador ,fotoPerfil ,diaEvento ,horaEvento ,nombreEvento ,lugarEvento ,clasificacionEvento ,cantidadAsistentes ,observaciones ,imagenEvento)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nombreCreador ,fotoPerfil ,diaEvento ,horaEvento ,nombreEvento ,lugarEvento ,clasificacionEvento ,cantidadAsistentes ,observaciones ,imagenEvento],
        (_, result) => { resolve(result) },
        (_, err) => { reject(err)},
      )
    })
  })

  return promise;
} 
export const loadEvento = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM eventos',
        [],
        (_, result) => { resolve(result) },
        (_, err) => { reject(err) },
      )
    })
  })

  return promise;
}

export {init}