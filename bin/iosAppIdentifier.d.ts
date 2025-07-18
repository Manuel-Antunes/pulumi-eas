import * as pulumi from "@pulumi/pulumi";
export declare class IosAppIdentifier extends pulumi.CustomResource {
    /**
     * Get an existing IosAppIdentifier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IosAppIdentifierState, opts?: pulumi.CustomResourceOptions): IosAppIdentifier;
    /**
     * Returns true if the given object is an instance of IosAppIdentifier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IosAppIdentifier;
    /**
     * Apple App Identifier
     */
    readonly identifier: pulumi.Output<string>;
    /**
     * Create a IosAppIdentifier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IosAppIdentifierArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IosAppIdentifier resources.
 */
export interface IosAppIdentifierState {
    /**
     * Apple App Identifier
     */
    identifier?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IosAppIdentifier resource.
 */
export interface IosAppIdentifierArgs {
    /**
     * Apple App Identifier
     */
    identifier: pulumi.Input<string>;
}
