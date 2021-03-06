/* eslint-disable */

// This function is copied directly from https://github.com/litejs/browser-cookie-lite.
// It is licensed under the MIT License and authored by Lauri Rooden.
function cookie(name, value, ttl, path, domain, secure) {
    if (!self.document) {
        return '';
    }
    if (arguments.length > 1) {
        let newCookie = name + '=' + encodeURIComponent(value) +
            (ttl ? "; expires=" + new Date(+new Date()+(ttl*1000)).toUTCString() : '') +
            (path   ? "; path=" + path : '') +
            (domain ? "; domain=" + domain : '') +
            (secure ? "; secure" : '');
        self.document.cookie = newCookie;
        return newCookie;
    }
    return decodeURIComponent((("; "+self.document.cookie).split("; "+name+"=")[1]||"").split(";")[0]);
}

/* eslint-enable */

module.exports = {
    cookie : cookie,
};
