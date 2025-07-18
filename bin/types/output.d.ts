export interface AndroidAppCredentialsBuildCredential {
    /**
     * EAS Android Build Credential Id
     */
    id: string;
    /**
     * EAS Id of the Android Keystore
     */
    keystoreId: string;
    /**
     * Name of the Android Build Credential
     */
    name: string;
}
export interface IosAppCredentialsAppStore {
    /**
     * EAS Id of the Apple Distribution Certificate
     */
    certificateId: string;
    /**
     * EAS iOS Build Credential Id
     */
    id: string;
    /**
     * EAS Provisioning Profile Id
     */
    provisioningProfileId: string;
}
