import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useAuthSession = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const checkTokenExpiration = () => {
            const token = localStorage.getItem("token");

            if (!token) return;

            try {
                // Decode the middle part (payload) of the JWT string
                const payload = JSON.parse(atob(token.split(".")[1]));
                
                // Convert expiration to milliseconds and compare with current time
                const isExpired = (payload.exp * 1000) < Date.now();

                if (isExpired) {
                    console.warn("Session expired! Purging user and cart data...");

                    // 1. Clear Local Storage
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    localStorage.removeItem("cartItems");

                    // 2. Clear Redux State
                    dispatch({ type: "LOGOUT" });
                    dispatch({ type: "CLEAR_CART" });

                    // 3. Optional: Redirect to login page if they are on a protected page
                    // window.location.href = "/login";
                }
            } catch (error) {
                console.error("Invalid token format found:", error);
            }
        };

        // Run the check immediately when the app loads
        checkTokenExpiration();

        // Set up an interval to check every 5 seconds in the background
        const interval = setInterval(checkTokenExpiration, 5000);

        // Clean up the interval when the app unmounts
        return () => clearInterval(interval);
    }, [dispatch]);
};