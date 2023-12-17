import axios from "./axios";

const API = "http://localhost:4000/api"

// export const registerRequest = async (user) => {
//     try {
//         const res = await axios.post(`${API}/register`, user);
//         return res.data;
//     } catch (error) {
//         console.error("Error en la petición:", error);
//         throw error;
//     }
// }

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verify`);