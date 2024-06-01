import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-54-207-67-252.sa-east-1.compute.amazonaws.com/api/walldreams'
});

//reserva P - http://ec2-54-94-18-161.sa-east-1.compute.amazonaws.com/

// Category endpoints
export const getTodasCategorias = () => api.get('/category/');
export const getCategoria = (id) => api.get(`/category/${id}`);

// Wallpaper endpoints
export const getTodosWallpapers = () => api.get('/wallpaper/');
export const getLikeWallpaper = (id) => api.get(`/wallpaper/like_wallpaper/${id}`);
export const getDislikeWallpaper = (id) => api.get(`/wallpaper/dislike_wallpaper/${id}`);
export const getMaisBaixadosWallpapers = () => api.get('/wallpaper/list_most_downloaded_wallpapers');
export const getLancamentosWallpapers = () => api.get('/wallpaper/list_latest_wallpapers_released');
export const downloadWallpaper = (id, params) => api.get(`/wallpaper/download_wallpaper/${id}`, { params });
export const getWallpaper = (id) => api.get(`/wallpaper/${id}`);


export const getWallpaperPesquisa = (pesquisa) => api.get(`/wallpaper/search/${pesquisa}`);
