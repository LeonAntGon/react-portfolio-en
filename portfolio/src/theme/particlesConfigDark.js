export default {
  fullScreen: false,
  background: {
    color: {
      value: "#000",
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      enable: true,
      opacity: 0.5,
      width: 1,
      color: "#f3f3f3",
    },
    collisions: {
      enable: false,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 2, // Puedes ajustar la velocidad según tus preferencias
      attract: {
        enable: true,
        rotateX: 3000,
        rotateY: 3000,
      },
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
      },
      value: 100,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab", // Hace que las partículas se repelan del puntero
      },
    },
  },
};
