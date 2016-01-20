var redis = require("redis");
var client = redis.createClient();

exports.getValue = function(keyName, callback)
{
    client.exists(keyName, function(err, reply) {
        if (reply === 1)
        {
            client.get(keyName, function(err, reply) {
                if (err)
                    callback(err);
                else {
                    try {
                        callback(JSON.parse(reply));
                    } catch (ex) {
                        callback(reply);
                    }
                }
            });
        }
        else
        {
            callback('the specified key: \'' + keyName + '\' does not exist');
        }
    });

};