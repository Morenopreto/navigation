class Actividades {
  constructor(id, nombreCreador,fotoPerfil,diaEvento, horaEvento, nombreEvento, lugarEvento, clasificacionEvento, cantidadAsistentes, observaciones, imagenEvento) {
    this.id = id.toString();
    this.creadorEvento = {
      nombreCreador: nombreCreador,
      fotoPerfil: fotoPerfil,
    };
    this.diaEvento = diaEvento;
    this.horaEvento = horaEvento;
    this.nombreEvento = nombreEvento;
    this.lugarEvento = lugarEvento;
    this.clasificacionEvento = clasificacionEvento;
    this.cantidadAsistentes = cantidadAsistentes;
    this.observaciones = observaciones;
    this.imagenEvento = imagenEvento;
  }
}

const activity = new Actividades(
    1,
    "El creador",
    "https://tse4.mm.bing.net/th?id=OIP.RO6U0qe5IdH4VKU5hw2fBAHaHa&pid=Api&P=0&w=197&h=197",
    "Hoy",
    "20:00",
    'El primero de todos',
    "Evento creado con creador",
    "Tranqui de noche",
    10,
    "We are lucky to live in a glorious age that gives us everything we could ask for as a human race. What more could you need when you have meat covered in cheese nestled between bread as a complete meal.",
    "https://tse2.mm.bing.net/th?id=OIP.dKO3KAFRhhCDlFzH3tl5KAHaE7&pid=Api&P=0&w=253&h=169",
  );



export default Actividades;
