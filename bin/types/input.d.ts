import * as pulumi from "@pulumi/pulumi";
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
