import api from "./axios";

export const getArtworks = async () => {
    const response = await api.get("/artworks");
    return response.data;
};

export const getArtworkById = (id) => {
    return api.get(`/artworks/${id}`);
};

export const createArtwork = (data) => {
    return api.post("/artworks", data);
};

export const updateArtwork = (id, data) => {
    return api.patch(`/artworks/${id}`, data);
};

export const deleteArtwork = (id) => {
    return api.delete(`/artworks/${id}`);
};

export const publishArtwork = (id) => {
    return api.patch(`/artworks/${id}/publish`);
};