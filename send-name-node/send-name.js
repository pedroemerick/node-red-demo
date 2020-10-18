module.exports = function(RED) {
    function sendNameNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = node.name;
            node.send(msg);
        });
    }
    RED.nodes.registerType("send-name",sendNameNode);
}