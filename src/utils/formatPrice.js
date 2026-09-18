export const formatPrice= (amount) =>{
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
    }).format(amount);
}

export const formatRevenue = (amount) => {
    if(amount >= 1e9) {
        return (amount / 1e9).toFixed(2) + "B";
    } else if(amount >= 1e6) {
        return (amount / 1e6).toFixed(2) + "M";
    } else if(amount >= 1e3) {
        return (amount / 1e3).toFixed(2) + "K";
    } else return amount.toString();
};