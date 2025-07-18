import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class IosAppCredentials extends pulumi.CustomResource {
    /**
     * Get an existing IosAppCredentials resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IosAppCredentialsState, opts?: pulumi.CustomResourceOptions): IosAppCredentials;
    /**
     * Returns true if the given object is an instance of IosAppCredentials.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IosAppCredentials;
    /**
     * EAS App Id
     */
    readonly appId: pulumi.Output<string>;
    /**
     * EAS App Identifier Id
     */
    readonly appIdentifierId: pulumi.Output<string>;
    /**
     * EAS App Build Credentials for App Store
     */
    readonly appStore: pulumi.Output<outputs.IosAppCredentialsAppStore | undefined>;
    /**
     * EAS App Store Api Key Id
     */
    readonly appStoreApiKeyId: pulumi.Output<string | undefined>;
    /**
     * EAS Apple Push Key Id
     */
    readonly pushKeyId: pulumi.Output<string | undefined>;
    /**
     * Create a IosAppCredentials resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IosAppCredentialsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IosAppCredentials resources.
 */
export interface IosAppCredentialsState {
    /**
     * EAS App Id
     */
    appId?: pulumi.Input<string>;
    /**
     * EAS App Identifier Id
     */
    appIdentifierId?: pulumi.Input<string>;
    /**
     * EAS App Build Credentials for App Store
     */
    appStore?: pulumi.Input<inputs.IosAppCredentialsAppStore>;
    /**
     * EAS App Store Api Key Id
     */
    appStoreApiKeyId?: pulumi.Input<string>;
    /**
     * EAS Apple Push Key Id
     */
    pushKeyId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IosAppCredentials resource.
 */
export interface IosAppCredentialsArgs {
    /**
     * EAS App Id
     */
    appId: pulumi.Input<string>;
    /**
     * EAS App Identifier Id
     */
    appIdentifierId: pulumi.Input<string>;
    /**
     * EAS App Build Credentials for App Store
     */
    appStore?: pulumi.Input<inputs.IosAppCredentialsAppStore>;
    /**
     * EAS App Store Api Key Id
     */
    appStoreApiKeyId?: pulumi.Input<string>;
    /**
     * EAS Apple Push Key Id
     */
    pushKeyId?: pulumi.Input<string>;
}
