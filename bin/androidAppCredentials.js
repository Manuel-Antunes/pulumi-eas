"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidAppCredentials = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class AndroidAppCredentials extends pulumi.CustomResource {
    /**
     * Get an existing AndroidAppCredentials resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new AndroidAppCredentials(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of AndroidAppCredentials.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AndroidAppCredentials.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["buildCredentials"] = state ? state.buildCredentials : undefined;
            resourceInputs["fcmKey"] = state ? state.fcmKey : undefined;
            resourceInputs["googleServiceAccountKeyId"] = state ? state.googleServiceAccountKeyId : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.appId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appId'");
            }
            if ((!args || args.googleServiceAccountKeyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'googleServiceAccountKeyId'");
            }
            if ((!args || args.identifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identifier'");
            }
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["buildCredentials"] = args ? args.buildCredentials : undefined;
            resourceInputs["fcmKey"] = (args === null || args === void 0 ? void 0 : args.fcmKey) ? pulumi.secret(args.fcmKey) : undefined;
            resourceInputs["googleServiceAccountKeyId"] = args ? args.googleServiceAccountKeyId : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["fcmKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AndroidAppCredentials.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.AndroidAppCredentials = AndroidAppCredentials;
/** @internal */
AndroidAppCredentials.__pulumiType = 'eas:index/androidAppCredentials:AndroidAppCredentials';
//# sourceMappingURL=androidAppCredentials.js.map