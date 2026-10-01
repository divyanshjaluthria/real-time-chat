export const WALLPAPER_SECTIONS = [
  { id: "desktop", title: "Desktop" },
  { id: "abstract", title: "Abstract" },
];

function defineWallpaper(id, category, label, source) {
  const optimizedName = source.replace(/\.jpe?g$/i, ".webp");

  return {
    id,
    category,
    label,
    url: `/wallpapers/optimized/${optimizedName}`,
    thumbnailUrl: `/wallpapers/thumbs/${optimizedName}`,
  };
}

export const WALLPAPERS = [
  defineWallpaper(
    "almas-salakhov",
    "desktop",
    "Almas Salakhov",
    "almas-salakhov-CfZ-zM7Kn8s-unsplash.jpg",
  ),
  defineWallpaper(
    "caglar-oskay",
    "desktop",
    "Caglar Oskay",
    "caglar-oskay-CLzrw26b1Is-unsplash.jpg",
  ),
  defineWallpaper(
    "cristina-gottardi",
    "desktop",
    "Cristina Gottardi",
    "cristina-gottardi-4L-AyDJM-yM-unsplash.jpg",
  ),
  defineWallpaper(
    "dan-otis",
    "desktop",
    "Dan Otis",
    "dan-otis-OYFHT4X5isg-unsplash.jpg",
  ),
  defineWallpaper(
    "daniel-leone",
    "desktop",
    "Daniel Leone",
    "daniel-leone-g30P1zcOzXo-unsplash.jpg",
  ),
  defineWallpaper("emre", "desktop", "Emre", "emre-CBh4D3l0EwM-unsplash.jpg"),
  defineWallpaper(
    "evan-brockett",
    "abstract",
    "Evan Brockett",
    "evan-brockett-EplYZrM5fEo-unsplash.jpg",
  ),
  defineWallpaper(
    "fabrizio-conti",
    "abstract",
    "Fabrizio Conti",
    "fabrizio-conti-lGYfGfLF6yo-unsplash.jpg",
  ),
  defineWallpaper(
    "geranimo",
    "abstract",
    "Geranimo",
    "geranimo-9yvADFNcXOc-unsplash.jpg",
  ),
  defineWallpaper(
    "jahanzeb-ahsan",
    "abstract",
    "Jahanzeb Ahsan",
    "jahanzeb-ahsan-_4Rwhef-LB0-unsplash.jpg",
  ),
  defineWallpaper(
    "jezael-melgoza",
    "abstract",
    "Jezael Melgoza",
    "jezael-melgoza-alY6_OpdwRQ-unsplash.jpg",
  ),
  defineWallpaper(
    "prometey-sanchez-noskov",
    "abstract",
    "Prometey Sanchez Noskov",
    "prometey-sanchez-noskov-c6M7AoevSXE-unsplash.jpg",
  ),
  defineWallpaper(
    "tobias-rademacher",
    "abstract",
    "Tobias Rademacher",
    "tobias-rademacher-NuBvAE6VfSM-unsplash.jpg",
  ),
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
