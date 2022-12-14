const servicios_recientes = [
  {
    id: 1,
    foto: require("../images/hombre1.jpg"),
    categoria: "Automotriz",
    nombre: "Juan Diego Pérez",
    calificacion: "4.6",
    numeroServicios: 21,
    precio: "$$$",
    detalles:
      "Soy mecánico con experiencia de más de 15 años, cuento con un taller bien equipado para solucionar problemas mecánicos pero también eléctricos de modelos nuevos. Contáctate conmigo para conversar lo que necesitas",
    especialidades: [
      "Soluciones a sistemas eléctricos",
      "Cambio de líquidos",
      "Revisión de chasis",
      "Ajustes de carrocería",
    ],
    ubicacion: "Avenida Ballivián, entre calles 16 y 17",
  },
  {
    id: 2,
    foto: require("../images/mujer1.jpg"),
    categoria: "Mueblería",
    nombre: "María Jiménez",
    calificacion: "3.8",
    numeroServicios: 65,
    precio: "$$",
    detalles:
      "Soy una mujer independiente, fuerte y capaz. Me rijo por las leyes de la estética, que dicen: ¨La belleza está en el ojo del que mira¨",
    especialidades: [
      "Acomodación de espacios compartidos",
      "Organización de oficinas",
      "Colocación de ornamento en espacios abiertos",
    ],
    ubicacion: "Calle Fernando Guachalla, edificio Malvinas",
  },
  {
    id: 3,
    foto: require("../images/mujer2.jpg"),
    categoria: "Vidriería",
    nombre: "Luisa Durán",
    calificacion: "4.1",
    numeroServicios: 39,
    precio: "$$$$",
    detalles:
      "Tengo experiencia en el manejo y corte de vidrios con más de 20 años. Trabajo en proyectos de vitrales artísticos y de material robusto para vivienda.",
    especialidades: [
      "Corte fino de piezas",
      "Entrega pronta de órdenes",
      "Experiencia con grandes empresas",
    ],
    ubicacion: "Avenida Hernando Siles, entre calles 5 y 6",
  },
];

const categorias = [
  {
    id: 1,
    titulo: "Limpieza de Hogar",
    logo: require("../images/Limpieza.png"),
  },
  {
    id: 2,
    titulo: "Electricista",
    logo: require("../images/Electricista.webp"),
  },
  {
    id: 3,
    titulo: "Plomería",
    logo: require("../images/Plomeria.png"),
  },
  {
    id: 4,
    titulo: "Automotriz",
    logo: require("../images/Automotriz.png"),
  },
];

export { categorias, servicios_recientes };
