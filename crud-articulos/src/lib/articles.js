import api from "./api";

async function getAll() {
    return await api.get(`/posts`);
}

async function getById(id) {
    return await api.get(`/posts/${id}`);
}

async function create(data) {
    return await api.post(`/posts`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}

async function update(id, data) {
    return await api.put(`/posts/${id}`, data);
}

async function deleteArticle(id) {
    return await api.delete(`/posts/${id}`);
}

export const Article = {
    getAll,
    getById,
    create,
    update,
    delete: deleteArticle,
};