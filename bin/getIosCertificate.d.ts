import * as pulumi from "@pulumi/pulumi";
export declare function getIosCertificate(args: GetIosCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetIosCertificateResult>;
/**
 * A collection of arguments for invoking getIosCertificate.
 */
export interface GetIosCertificateArgs {
    serialNumber: string;
}
/**
 * A collection of values returned by getIosCertificate.
 */
export interface GetIosCertificateResult {
    readonly id: string;
    readonly serialNumber: string;
}
export declare function getIosCertificateOutput(args: GetIosCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIosCertificateResult>;
/**
 * A collection of arguments for invoking getIosCertificate.
 */
export interface GetIosCertificateOutputArgs {
    serialNumber: pulumi.Input<string>;
}
