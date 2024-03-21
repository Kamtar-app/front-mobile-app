export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  // Rayon moyen de la Terre en kilomètres
  const R = 6371;

  // Convertir les coordonnées degrés en radians
  const radLat1 = toRadians(lat1);
  const radLon1 = toRadians(lon1);
  const radLat2 = toRadians(lat2);
  const radLon2 = toRadians(lon2);

  // Calculer la différence de latitude et de longitude
  const dLat = radLat2 - radLat1;
  const dLon = radLon2 - radLon1;

  // Formule de la haversine pour calculer la distance
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(radLat1) *
    Math.cos(radLat2) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance en kilomètres
  return Math.round(R * c * 100) / 100;
};

const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};


export const searchCurrentLocationString = async (locationData) => {
  try {
    const response = await fetch(`${process.env.API_GOUV_END_POINT}/reverse/?lon=${locationData.longitude}&lat=${locationData.latitude}&limit=1`);
    const data = await response.json();
    if (data.features) {
      return data.features[0].properties.context;
    }
    return null;
  } catch (error) {
    console.error("Erreur lors de la récupération des données de l'API", error);
  }
};

export const FRANCE_DEFAULT_LOCATION = {
  latitude: 46.603354,
  longitude: 1.888334,
  latitudeDelta: 10,
  longitudeDelta: 10,
};