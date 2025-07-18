// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AndroidAppCredentialsBuildCredential {
    /**
     * EAS Android Build Credential Id
     */
    id?: pulumi.Input<string>;
    /**
     * EAS Id of the Android Keystore
     */
    keystoreId: pulumi.Input<string>;
    /**
     * Name of the Android Build Credential
     */
    name: pulumi.Input<string>;
}

export interface IosAppCredentialsAppStore {
    /**
     * EAS Id of the Apple Distribution Certificate
     */
    certificateId: pulumi.Input<string>;
    /**
     * EAS iOS Build Credential Id
     */
    id?: pulumi.Input<string>;
    /**
     * EAS Provisioning Profile Id
     */
    provisioningProfileId: pulumi.Input<string>;
}
