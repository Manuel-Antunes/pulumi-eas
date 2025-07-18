import * as pulumi from "@pulumi/pulumi";
export declare class App extends pulumi.CustomResource {
    /**
     * Get an existing App resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppState, opts?: pulumi.CustomResourceOptions): App;
    /**
     * Returns true if the given object is an instance of App.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is App;
    /**
     * display name
     */
    readonly name: pulumi.Output<string>;
    /**
     * app slug
     */
    readonly slug: pulumi.Output<string>;
    /**
     * Create a App resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering App resources.
 */
export interface AppState {
    /**
     * display name
     */
    name?: pulumi.Input<string>;
    /**
     * app slug
     */
    slug?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a App resource.
 */
export interface AppArgs {
    /**
     * display name
     */
    name?: pulumi.Input<string>;
    /**
     * app slug
     */
    slug: pulumi.Input<string>;
}
