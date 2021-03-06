/* global PLATFORM_BROWSER */

// Hide the differences in how the Thrift compiler generates code for the
// different platforms as well as expose a Platform class to abstract a few
// general differences in the platforms.
module.exports = {
    Platform        : require('./imp/platform/browser/platform_browser.js'),
    ThriftTransport : require('./imp/platform/browser/transport_httpthrift.js'),
    thrift          : require('./imp/platform/browser/thrift.js'),
    crouton_thrift  : require('./imp/platform/browser/crouton_thrift.js'),
};
