"use strict";

const regexs = /^(192\.168|127\.0|10\.[0-9][0-9]?[0-5]?|172\.(1[6-9]|2[0-9]|3[0-1]))(\.[0-9][0-9]{0,62})+\.?/;
const result = regexs.exec(window.location.hostname);

const originHost = "";
const originHostName = "";

const protocol = window.location.protocol;

export function webSocketUrl() {
    const wsProtocol = protocol === 'https:' ? "wss://" : "ws://";
    return wsProtocol + hostName() + serverPort();
}

export function serverHost() {
    return result == null ? originHost : currentHost();
}

export function currentHost() {
    return protocol + "//" + window.location.hostname;
}

export function webPort() {
    return result == null ? "" : ":3000";
}

export function serverPort() {
    return result == null ? "" : ":8000";
}

function hostName() {
    return result == null ? originHostName : window.location.hostname;
}
