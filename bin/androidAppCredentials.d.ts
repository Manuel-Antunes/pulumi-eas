import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class AndroidAppCredentials extends pulumi.CustomResource {
    /**
     * Get an existing AndroidAppCredentials resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AndroidAppCredentialsState, opts?: pulumi.CustomResourceOptions): AndroidAppCredentials;
    /**
     * Returns true if the given object is an instance of AndroidAppCredentials.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AndroidAppCredentials;
    /**
     * EAS App Id
     */
    readonly appId: pulumi.Output<string>;
    /**
     * EAS Android Build Credentials
     */
    readonly buildCredentials: pulumi.Output<outputs.AndroidAppCredentialsBuildCredential[] | undefined>;
    /**
     * FCM Google Service Account Key Id
     */
    readonly fcmKey: pulumi.Output<string | undefined>;
    /**
     * Google Service Account Key Id
     */
    readonly googleServiceAccountKeyId: pulumi.Output<string>;
    /**
     * Identifier of the Android App
     */
    readonly identifier: pulumi.Output<string>;
    /**
     * Create a AndroidAppCredentials resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AndroidAppCredentialsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AndroidAppCredentials resources.
 */
export interface AndroidAppCredentialsState {
    /**
     * EAS App Id
     */
    appId?: pulumi.Input<string>;
    /**
     * EAS Android Build Credentials
     */
    buildCredentials?: pulumi.Input<pulumi.Input<inputs.AndroidAppCredentialsBuildCredential>[]>;
    /**
     * FCM Google Service Account Key Id
     */
    fcmKey?: pulumi.Input<string>;
    /**
     * Google Service Account Key Id
     */
    googleServiceAccountKeyId?: pulumi.Input<string>;
    /**
     * Identifier of the Android App
     */
    identifier?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AndroidAppCredentials resource.
 */
export interface AndroidAppCredentialsArgs {
    /**
     * EAS App Id
     */
    appId: pulumi.Input<string>;
    /**
     * EAS Android Build Credentials
     */
    buildCredentials?: pulumi.Input<pulumi.Input<inputs.AndroidAppCredentialsBuildCredential>[]>;
    /**
     * FCM Google Service Account Key Id
     */
    fcmKey?: pulumi.Input<string>;
    /**
     * Google Service Account Key Id
     */
    googleServiceAccountKeyId: pulumi.Input<string>;
    /**
     * Identifier of the Android App
     */
    identifier: pulumi.Input<string>;
}
