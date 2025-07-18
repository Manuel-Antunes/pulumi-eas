"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppStoreApiKeyOutput = exports.getAppStoreApiKey = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getAppStoreApiKey(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("eas:index/getAppStoreApiKey:getAppStoreApiKey", {
        "identifier": args.identifier,
    }, opts, utilities.getPackage());
}
exports.getAppStoreApiKey = getAppStoreApiKey;
function getAppStoreApiKeyOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("eas:index/getAppStoreApiKey:getAppStoreApiKey", {
        "identifier": args.identifier,
    }, opts, utilities.getPackage());
}
exports.getAppStoreApiKeyOutput = getAppStoreApiKeyOutput;
//# sourceMappingURL=getAppStoreApiKey.js.map