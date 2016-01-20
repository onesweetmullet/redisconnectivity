var expect = require("chai").expect;
var redis = require("redis");
var client = redis.createClient();

describe("Redis tests", function () {
    describe("Redis connectivity test", function () {
        it("connects to Redis", function () {
            client.on('connect', function () {
                console.log('connected to redis');
            });
        });
    });

    describe("Redis storage test 1", function () {
        it("attempt to store simple key/value pair to Redis", function () {
            client.set('key1', 'value1', function (err, reply) {
                if (err)
                    console.log('err = ' + err);
                else
                    console.log('stored simple key/value pair to Redis successfully');
            });
        });
    });

    describe("Redis retrieval test 1", function () {
        it("attempt to get simple key/value pair from Redis", function () {
            client.get('key1', function (err, reply) {
                if (err)
                    console.log('err = ' + err);
                else
                    console.log('key1 = ' + reply);
            });
        });
    });

    describe("Redis storage test 2", function () {
        it("attempt to store complex object to Redis", function () {
            //var obj = [
            //    {'http://google.com': 'https://google.com'},
            //    {'http://yahoo.com':'https://yahoo.com'}
            //];
            var obj = [{'key1': 'value1'}, {'key2': 'value2'}];
            client.set('key2', JSON.stringify(obj), function (err, reply) {
                if (err)
                    console.log('err = ' + err);
                else
                    console.log('stored complex object to Redis successfully');
            });
        });
    });

    describe("Redis retrieval test 2", function () {
        it("attempt to get value from Redis", function () {
            client.get('key2', function (err, reply) {
                if (err)
                    console.log('err = ' + err);
                else {
                    var myObj = JSON.parse(reply);
                    console.log('myObj[0].key1 = ' + myObj[0].key1);
                }
            });
        });
    });
});