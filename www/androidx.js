const exec = require("cordova/exec");
const SERVICE = "AndroidX";

const androidx = {
  start: function(api_key, cb, err) {
    exec(cb, err, SERVICE, "start", [api_key]);
  },
};

if (typeof module != "undefined" && module.exports) {
  module.exports = androidx;
}
