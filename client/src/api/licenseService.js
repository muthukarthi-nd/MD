// src/licenseService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/license'; 

export const getLicenses = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getLicense = async (licenseID) => {
    const response = await axios.get(API_URL, { params: { licenseID } });
    return response.data;
};

export const createLicense = async (licenseData) => {
    const response = await axios.post(API_URL, licenseData);
    return response.data;
};

export const updateLicense = async (id, licenseData) => {
    const response = await axios.put(`${API_URL}/one/${id}`, licenseData);
    return response.data;
};

export const removeGUID = async (id) => {
    const response = await axios.patch(`${API_URL}/one/${id}/removeGUID`);
    return response.data;
};

export const deleteLicense = async (id) => {
    const response = await axios.delete(`${API_URL}/two/${id}`);
    return response.data;
};
