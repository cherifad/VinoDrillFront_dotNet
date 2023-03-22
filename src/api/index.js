import axios from 'axios';
import config from '../utils/config';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const api = axios.create({
    baseURL: config.backend_url + '/api',
});

const getSejours = () => api.get(`/Sejour`);
const getSejourById = id => api.get(`/Sejour/${id}`);
const getSejourWithHebergement = id => api.get(`/Sejour/${id}?hebergement=true`);
const updateSejourById = (id, payload) => api.put(`/Sejour/${id}`, payload, {
    headers: {
        'Authorization': 'Bearer ' + authStore.token
    }
});
const deleteSejourById = id => api.delete(`/Sejour/${id}`);

const getThemes = () => api.get(`/Theme`);
const getThemeById = id => api.get(`/Theme/${id}`);
const updateThemeById = (id, payload) => api.put(`/Theme/${id}`, payload);
const deleteThemeById = id => api.delete(`/Theme/${id}`);

const getDestinations = () => api.get(`/Destination`);
const getDestinationById = id => api.get(`/Destination/${id}`);

const getHebergements = () => api.get(`/Hebergement`);
const getHebergementById = id => api.get(`/Hebergement/${id}`);
const newHebergement = payload => api.post(`/Hebergement`, payload);

const getDomaines = () => api.get(`/Cave`);
const getDomaineById = id => api.get(`/Cave/${id}`);

const getActivites = () => api.get(`/Activite`);
const getActiviteById = id => api.get(`/Activite/${id}`);
const newActivite = payload => api.post(`/Activite`, payload);

const getSociete = () => api.get(`/Societe`);
const getSocieteById = id => api.get(`/Societe/${id}`);

const getReviews = (idsejour) => api.get(`/Avis?sejour=${idsejour}`);

const uploadImage = (payload) => api.post(`/Upload`, payload);

const getCommandes = () => api.get(`/Commande`);
const getCommandeById = (id, details) => details ? api.get(`/Commande/${id}?full=true`) : api.get(`/Commande/${id}`);

const getHotelById = id => api.get(`/Hotel/${id}`);

const addAvis = payload => api.post(`/Avis`, payload);
const editAvis = (id, payload) => api.put(`/Avis/${id}`, payload);

const checkCoupon = payload => api.post(`/Coupon/Check`, payload);

const apis = {
    getThemes,
    getThemeById,
    updateThemeById,
    deleteThemeById,
    getSejours,
    getSejourById,
    getSejourWithHebergement,
    updateSejourById,
    deleteSejourById,
    getDestinations,
    getDestinationById,
    getHebergements,
    getHebergementById,
    getDomaines,
    getDomaineById,
    getActivites,
    getActiviteById,
    getSociete,
    getSocieteById,
    newActivite,
    getReviews,
    newHebergement,
    uploadImage,
    getCommandes,
    getCommandeById,
    getHotelById,
    addAvis,
    editAvis,
    checkCoupon,
};

export default apis;