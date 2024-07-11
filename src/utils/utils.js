export const base64urlDecode = (str) => {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}