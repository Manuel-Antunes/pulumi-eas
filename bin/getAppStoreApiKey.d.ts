import * as pulumi from "@pulumi/pulumi";
export declare function getAppStoreApiKey(args: GetAppStoreApiKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetAppStoreApiKeyResult>;
/**
 * A collection of arguments for invoking getAppStoreApiKey.
 */
export interface GetAppStoreApiKeyArgs {
    identifier: string;
}
/**
 * A collection of values returned by getAppStoreApiKey.
 */
export interface GetAppStoreApiKeyResult {
    readonly id: string;
    readonly identifier: string;
    readonly issuerIdentifier: string;
    readonly name: string;
}
export declare function getAppStoreApiKeyOutput(args: GetAppStoreApiKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAppStoreApiKeyResult>;
/**
 * A collection of arguments for invoking getAppStoreApiKey.
 */
export interface GetAppStoreApiKeyOutputArgs {
    identifier: pulumi.Input<string>;
}
