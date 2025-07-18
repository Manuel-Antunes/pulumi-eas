import * as pulumi from "@pulumi/pulumi";
export declare function getGoogleServiceAccountKey(args: GetGoogleServiceAccountKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetGoogleServiceAccountKeyResult>;
/**
 * A collection of arguments for invoking getGoogleServiceAccountKey.
 */
export interface GetGoogleServiceAccountKeyArgs {
    projectIdentifier: string;
}
/**
 * A collection of values returned by getGoogleServiceAccountKey.
 */
export interface GetGoogleServiceAccountKeyResult {
    readonly clientEmail: string;
    readonly clientIdentifier: string;
    readonly id: string;
    readonly projectIdentifier: string;
}
export declare function getGoogleServiceAccountKeyOutput(args: GetGoogleServiceAccountKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGoogleServiceAccountKeyResult>;
/**
 * A collection of arguments for invoking getGoogleServiceAccountKey.
 */
export interface GetGoogleServiceAccountKeyOutputArgs {
    projectIdentifier: pulumi.Input<string>;
}
