export const WALLPAPER_SECTIONS = [
  { id: "desktop", title: "Desktop" },
  { id: "abstract", title: "Abstract" },
];

export const WALLPAPERS = [
  {
    id: "almas-salakhov",
    category: "desktop",
    label: "Almas Salakhov",
    url: "/wallpapers/almas-salakhov-CfZ-zM7Kn8s-unsplash.jpg",
  },
  {
    id: "caglar-oskay",
    category: "desktop",
    label: "Caglar Oskay",
    url: "/wallpapers/caglar-oskay-CLzrw26b1Is-unsplash.jpg",
  },
  {
    id: "cristina-gottardi",
    category: "desktop",
    label: "Cristina Gottardi",
    url: "/wallpapers/cristina-gottardi-4L-AyDJM-yM-unsplash.jpg",
  },
  {
    id: "dan-otis",
    category: "desktop",
    label: "Dan Otis",
    url: "/wallpapers/dan-otis-OYFHT4X5isg-unsplash.jpg",
  },
  {
    id: "daniel-leone",
    category: "desktop",
    label: "Daniel Leone",
    url: "/wallpapers/daniel-leone-g30P1zcOzXo-unsplash.jpg",
  },
  {
    id: "emre",
    category: "desktop",
    label: "Emre",
    url: "/wallpapers/emre-CBh4D3l0EwM-unsplash.jpg",
  },
  {
    id: "evan-brockett",
    category: "abstract",
    label: "Evan Brockett",
    url: "/wallpapers/evan-brockett-EplYZrM5fEo-unsplash.jpg",
  },
  {
    id: "fabrizio-conti",
    category: "abstract",
    label: "Fabrizio Conti",
    url: "/wallpapers/fabrizio-conti-lGYfGfLF6yo-unsplash.jpg",
  },
  {
    id: "geranimo",
    category: "abstract",
    label: "Geranimo",
    url: "/wallpapers/geranimo-9yvADFNcXOc-unsplash.jpg",
  },
  {
    id: "jahanzeb-ahsan",
    category: "abstract",
    label: "Jahanzeb Ahsan",
    url: "/wallpapers/jahanzeb-ahsan-_4Rwhef-LB0-unsplash.jpg",
  },
  {
    id: "jezael-melgoza",
    category: "abstract",
    label: "Jezael Melgoza",
    url: "/wallpapers/jezael-melgoza-alY6_OpdwRQ-unsplash.jpg",
  },
  {
    id: "prometey-sanchez-noskov",
    category: "abstract",
    label: "Prometey Sanchez Noskov",
    url: "/wallpapers/prometey-sanchez-noskov-c6M7AoevSXE-unsplash.jpg",
  },
  {
    id: "tobias-rademacher",
    category: "abstract",
    label: "Tobias Rademacher",
    url: "/wallpapers/tobias-rademacher-NuBvAE6VfSM-unsplash.jpg",
  },
];

export function frameStyleFromUrl(url) {
  return {
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export function getWallpaperById(id) {
  return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0];
}
