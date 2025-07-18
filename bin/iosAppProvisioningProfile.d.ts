import * as pulumi from "@pulumi/pulumi";
export declare class IosAppProvisioningProfile extends pulumi.CustomResource {
    /**
     * Get an existing IosAppProvisioningProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IosAppProvisioningProfileState, opts?: pulumi.CustomResourceOptions): IosAppProvisioningProfile;
    /**
     * Returns true if the given object is an instance of IosAppProvisioningProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IosAppProvisioningProfile;
    /**
     * EAS Apple App Identifier Id
     */
    readonly appIdentifierId: pulumi.Output<string>;
    /**
     * Base64 encoded Provisioning Profile file
     */
    readonly base64: pulumi.Output<string>;
    /**
     * Create a IosAppProvisioningProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IosAppProvisioningProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IosAppProvisioningProfile resources.
 */
export interface IosAppProvisioningProfileState {
    /**
     * EAS Apple App Identifier Id
     */
    appIdentifierId?: pulumi.Input<string>;
    /**
     * Base64 encoded Provisioning Profile file
     */
    base64?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IosAppProvisioningProfile resource.
 */
export interface IosAppProvisioningProfileArgs {
    /**
     * EAS Apple App Identifier Id
     */
    appIdentifierId: pulumi.Input<string>;
    /**
     * Base64 encoded Provisioning Profile file
     */
    base64: pulumi.Input<string>;
}
