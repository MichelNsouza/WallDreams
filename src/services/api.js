import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-18-229-159-118.sa-east-1.compute.amazonaws.com/api/walldreams'
});

// Category endpoints
export const getTodasCategorias = () => api.get('/category');
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

export const getTeste = () => api.get('/wallpaper/download_wallpaper/5/');