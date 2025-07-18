import * as pulumi from "@pulumi/pulumi";
export declare function getIosPushKey(args: GetIosPushKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetIosPushKeyResult>;
/**
 * A collection of arguments for invoking getIosPushKey.
 */
export interface GetIosPushKeyArgs {
    identifier: string;
}
/**
 * A collection of values returned by getIosPushKey.
 */
export interface GetIosPushKeyResult {
    readonly id: string;
    readonly identifier: string;
}
export declare function getIosPushKeyOutput(args: GetIosPushKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIosPushKeyResult>;
/**
 * A collection of arguments for invoking getIosPushKey.
 */
export interface GetIosPushKeyOutputArgs {
    identifier: pulumi.Input<string>;
}
