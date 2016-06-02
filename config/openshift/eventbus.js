module.exports = {
    bridge: 'http://' + process.env.FRONTEND_SERVICE_HOST + ':' +process.env.FRONTEND_SERVICE_PORT + '/eventbus'
};
