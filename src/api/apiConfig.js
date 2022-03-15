const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4af4f77761b8e59f2c51d729bf18aa43",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
