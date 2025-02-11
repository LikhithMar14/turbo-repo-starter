const JWT_SECRET = process.env.JWT_SECRET || "123434";
const HTTP_SERVER_PORT = process.env.HTTP_SERVER_PORT || 3001;
const WEB_SOCKET_SERVER_PORT = process.env.WEB_SOCKET_SERVER_PORT || 8080;

 const STATUS_CODES = {
    CONTINUE: 100,
    SWITCHING_PROTOCOL: 101,
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    NOT_MODIFIED: 304,
    REDIRECTED: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    ALREADY_EXISTS:409,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
} ;


export { JWT_SECRET, HTTP_SERVER_PORT, WEB_SOCKET_SERVER_PORT,STATUS_CODES};


