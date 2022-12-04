const Redis = require("ioredis");

const redis = new Redis({
  port: 14779,
  host: "redis-14779.c302.asia-northeast1-1.gce.cloud.redislabs.com",
  username: "default",
  password: "932uod2HfnVMnuHZLNtqVbYlKThBXetx",
});

module.exports = redis;
