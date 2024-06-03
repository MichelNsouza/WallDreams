import axios from 'axios';

/*const api = axios.create({
  baseURL: 'http://ec2-54-207-67-252.sa-east-1.compute.amazonaws.com/api/walldreams'
});*/
const api = axios.create({
  baseURL: 'http://ec2-54-94-18-161.sa-east-1.compute.amazonaws.com/api/walldreams'
});

// Categorias
export const getTodasCategorias = () => api.get('/category/');
export const getCategoria = (id) => api.get(`/category/${id}`);
export const getMaisProcuradasCategorias = () => api.get('/category/most_castegories_searched');

// Wallpaper 
export const getTodosWallpapers = () => api.get('/wallpaper/');
export const getLikeWallpaper = (id) => api.get(`/wallpaper/like_wallpaper/${id}`);
export const getDislikeWallpaper = (id) => api.get(`/wallpaper/dislike_wallpaper/${id}`);
export const getMaisBaixadosWallpapers = () => api.get('/wallpaper/list_most_downloaded_wallpapers');
export const getLancamentosWallpapers = () => api.get('/wallpaper/list_latest_wallpapers_released');
export const getDownloadWallpaper = (id, resolucao, nome, email) => api.get(`/wallpaper/download_wallpaper/${id}/?resolution=${resolucao}&name=${nome}&email=${email}`);
export const getWallpaper = (id) => api.get(`/wallpaper/${id}`);
export const getWallpaperPesquisa = (pesquisa) => api.get(`/wallpaper/search/${pesquisa}`);

export const getWallpaperImg = (idWpp, resolucao) => api.get(`/wallpaper/v2/download_wallpaper/${idWpp}/?resolution=${resolucao}`);

export const createWallpaper = (formData) => api.post('/wallpaper/create', formData);