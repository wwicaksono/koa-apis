/**
 * Response middleware for koajs
 *
 * @author Nick Rucci <nick@rucci.io>
 * @link https://github.com/potatogopher/koa-response-handler
 */

/**
 * Status codes
 *
 * TODO: add all status codes
 */

/**
 * Modified by: Wisnu W
 * Modified date: 12 Nov 2018
 */

const statusCodes = {
    CONTINUE: 100,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    REQUEST_TIME_OUT: 408,
    CONFLICT: 409,
    GONE: 410,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    IM_A_TEAPOT: 418,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIME_OUT: 504,
  };
  
  module.exports = (opts = {}) => {
    const { contentType = 'text/plain' } = opts;
  
    return async (ctx, next) => {
      // 100 CONTINUE
      ctx.response.continue = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.CONTINUE;
      };
  
      // 200 OK
      ctx.response.ok = (res = null, type = 'application/json') => {
        ctx.type = type;
        ctx.body = res;
        ctx.status = statusCodes.OK;
      };
  
      // 201 CREATED
      ctx.response.created = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.CREATED;
      };
  
      // 202 ACCEPTED
      ctx.response.accepted = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.ACCEPTED;
      };
  
      // 204 NO CONTENT
      ctx.response.noContent = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.NO_CONTENT;
      };
  
      // 400 BAD REQUEST
      ctx.response.badRequest = (res = null, type = contentType) => {
        ctx.type = type;
        ctx.body = res;
        ctx.status = statusCodes.BAD_REQUEST;
      };
  
      // 401 UNAUTHORIZED
      ctx.response.unauthorized = (res = null, type = 'application/json') => {
        ctx.type = type;
        ctx.body = res;
        ctx.status = statusCodes.UNAUTHORIZED;
      };
  
      // 403 FORBIDDEN
      ctx.response.forbidden = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.FORBIDDEN;
      };
  
      // 404 NOT FOUND
      ctx.response.notFound = (res = null, type = 'application/json') => {
        ctx.type = type;
        ctx.body = res;
        ctx.status = statusCodes.NOT_FOUND;
      };
  
      // 405 METHOD NOT ALLOWED
      ctx.response.methodNotAllowed = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.METHOD_NOT_ALLOWED;
      };
  
      // 406 NOT ACCEPTABLE
      ctx.response.notAcceptable = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.NOT_ACCEPTABLE;
      };
  
      // 408 REQUEST TIME OUT
      ctx.response.requestTimeOut = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.REQUEST_TIME_OUT;
      };
  
      // 409 CONFLICT
      ctx.response.conflict = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.CONFLICT;
      };
  
      // 410 GONE
      ctx.response.gone = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.GONE;
      };
  
      // 413 PAYLOAD TOO LARGE
      ctx.response.payloadTooLarge = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.PAYLOAD_TOO_LARGE;
      };
  
      // 414 URI TOO LONG
      ctx.response.uriTooLong = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.URI_TOO_LONG;
      };
  
      // 418 I'M A TEAPOT
      ctx.response.teapot = (res = 'I\'m a teapot') => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.IM_A_TEAPOT;
      };
  
      // 500 INTERNAL SERVER ERROR
      ctx.response.internalServerError = (res = null, type = 'application/json') => {
        ctx.type = type;
        ctx.body = res;
        ctx.status = statusCodes.INTERNAL_SERVER_ERROR;
      };
  
      // 501 NOT IMPLEMENTED
      ctx.response.notImplemented = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.NOT_IMPLEMENTED;
      };
  
      // 502 BAD GATEWAY
      ctx.response.badGateway = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.BAD_GATEWAY;
      };
  
      // 503 SERVICE UNAVAILABLE
      ctx.response.serviceUnavailable = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.SERVICE_UNAVAILABLE;
      };
  
      // 504 GATEWAY TIME OUT
      ctx.response.gatewayTimeOut = (res = null) => {
        ctx.type = contentType;
        ctx.body = res;
        ctx.status = statusCodes.GATEWAY_TIME_OUT;
      };
  
      return next();
    };
  };
  