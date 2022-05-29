function HTTPRequest(obj) {

    let failedProperty;

    if (obj.method == undefined) {
        failedProperty = 'Method';
    } else if (obj.uri == undefined) {
        failedProperty = 'URI';
    } else if (obj.version == undefined) {
        failedProperty = 'Version';
    } else if (obj.message == undefined) {
        failedProperty = 'Message';
    }

    if (failedProperty != undefined) {
        throw Error(`Invalid request header: Invalid ${failedProperty}`);
    }

    let messagePattern = /([<>\\\'\&\"]+)/g;
    let uriPattern = /[^\w+.]/g;
    
    if (obj.method != 'GET' && obj.method != 'POST' && obj.method != 'DELETE' && obj.method != 'CONNECT') {
        failedProperty = 'Method';
    } else if (obj.vesion != 'HTTP/0.9' && obj.version != 'HTTP/1.0' && obj.version != 'HTTP/1.1' && obj.version != 'HTTP/2.0') {
        failedProperty = 'Version';
    } else if (messagePattern.exec(obj.message) != null) {
        failedProperty = 'Message';
    } else if (uriPattern.exec(obj.uri) != null) {
        failedProperty = 'URI';
    }

    if (failedProperty != undefined) {
        throw Error(`Invalid request header: Invalid ${failedProperty}`);
    }

    return obj;
}
console.log(HTTPRequest({
    method: 'GET',
    uri: '%appdata%',
    version: 'HTTP/1.1',
    message: '-recursive'
}));