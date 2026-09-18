import axios from 'axios';
// ✨ IMPORTANT: Import your Redux store so you can dispatch actions outside of React components.
// Adjust this path to wherever your Redux store is defined!
import { store } from '../store/store'; 

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
    withCredentials: true
});

// ✨ ADD THE INTERCEPTOR HERE
api.interceptors.response.use(
    (response) => {
        // If the request succeeds, just pass it through normally
        return response;
    },
    (error) => {
        // If the backend throws an error, check if it's a 401 (Unauthorized / Expired Token)
        if (error.response && error.response.status === 401) {
            console.warn("Session expired! Auto-logging out...");
            
            // 1. Wipe all sensitive and user-specific data from local storage
            localStorage.removeItem("auth");
            localStorage.removeItem("cartItems");

            // 2. Clear Redux states (Use 'store.dispatch' since we aren't in a React component)
            if (store) {
                store.dispatch({ type: "LOGOUT" });
                store.dispatch({ type: "CLEAR_CART" });
            }

            // 3. Redirect the user to the login page
            window.location.href = "/login";
        }
        
        // Return the error so the component that made the request can still handle it if needed
        return Promise.reject(error);
    }
);

api.interceptors.request.use(
    (config) => {
        // Grab the "auth" string from localStorage and parse it back into a JavaScript object
        const authDataString = localStorage.getItem("auth");
        
        if (authDataString) {
            const authData = JSON.parse(authDataString);
            const token = authData.jwtToken; 

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;