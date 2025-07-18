import * as pulumi from "@pulumi/pulumi";
export declare class AppVariable extends pulumi.CustomResource {
    /**
     * Get an existing AppVariable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppVariableState, opts?: pulumi.CustomResourceOptions): AppVariable;
    /**
     * Returns true if the given object is an instance of AppVariable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AppVariable;
    /**
     * The id of the app for the environment variable
     */
    readonly appId: pulumi.Output<string>;
    /**
     * The environments of the app for the environment variable
     */
    readonly environments: pulumi.Output<string[]>;
    /**
     * The name of the app for the environment variable
     */
    readonly name: pulumi.Output<string>;
    /**
     * The value of the app for the environment variable
     */
    readonly value: pulumi.Output<string>;
    /**
     * The visibility of the app for the environment variable
     */
    readonly visibility: pulumi.Output<string>;
    /**
     * Create a AppVariable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppVariableArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AppVariable resources.
 */
export interface AppVariableState {
    /**
     * The id of the app for the environment variable
     */
    appId?: pulumi.Input<string>;
    /**
     * The environments of the app for the environment variable
     */
    environments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the app for the environment variable
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the app for the environment variable
     */
    value?: pulumi.Input<string>;
    /**
     * The visibility of the app for the environment variable
     */
    visibility?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AppVariable resource.
 */
export interface AppVariableArgs {
    /**
     * The id of the app for the environment variable
     */
    appId: pulumi.Input<string>;
    /**
     * The environments of the app for the environment variable
     */
    environments: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the app for the environment variable
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the app for the environment variable
     */
    value: pulumi.Input<string>;
    /**
     * The visibility of the app for the environment variable
     */
    visibility: pulumi.Input<string>;
}
