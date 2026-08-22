export default class Storage {
  constructor() {}

  getData() {
    let pelis = JSON.parse(localStorage.getItem("pelis"));

    if (!pelis || pelis.length < 1) {
      pelis = [
        {
          id: 0,
          title: "Nada",
          descripcion: "no valido",
          image: "nula",
        },
      ];

      this.id = 1;
    } else {
      this.id = pelis[pelis.length - 1].id + 1;
    }
    return pelis;
  }

  getLastId() {
    return this.id;
  }

  save(data) {
    localStorage.setItem("pelis", JSON.stringify(data));    
  }
}