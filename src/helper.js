import users from './dummyUserData';

const secretKey = '$$KthesaKamzes2019$$';

const encodeToken = (payload) => {
    const encodedPayload = btoa(JSON.stringify(payload));
    const token = encodedPayload + secretKey;
    return token;
};

export const generateToken = (username) => {
  const user = users.find((user) => user.username === username);

  if (!user) {
    return null;
  }

  const payload = {
    id: user.id,
    username: user.username,
  };

  const expiration = Date.now() + 3600000; // Set expiration to 1 hour (in milliseconds)
  payload.exp = expiration;

  const token = encodeToken(payload);

  setCookie("starWarsUser", token, 1/24);

  return token;
};

export const decodeToken = (token) => {
    try {
      const extractedPayload = token.slice(0, -secretKey.length);
    const decodedPayload = atob(extractedPayload);
    return JSON.parse(decodedPayload);
    } catch (error) {
      alert('Error decoding token:', error);
      return null;
    }
  };
  
export const setCookie = (cname, cvalue, cdays) => {
    let cookie = cname + "=" + cvalue + ";path=/";
  
    if (cdays) {
      const date = new Date();
      date.setTime(date.getTime() + cdays * 24 * 60 * 60 * 1000);
      cookie += ";expires=" + date.toUTCString();
    }
  
    document.cookie = cookie;
};

export const getCookie = cname => {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
};

export const deleteCookie = cname => {
    setCookie(cname, "", -1);
};