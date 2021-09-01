/**
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 */
export interface PatchedApplicationClientUpdate {
    email?: string;

    birthdate?: string;

    tos_consent?: boolean;

    marketing_consent?: boolean;

    data_consent?: boolean;

    tos_consent_date?: string;

    tax_information?: Array<string>;

    country_birth?: models.CountryField;

    last_login?: string;

    referred_by?: string;

    successful_referrals?: number;

    kyc_verified?: boolean;

    is_verified?: boolean;

    fee_segments?: Array<string>;

    extra_data?: { [key: string]: any; };

    portfolios?: Array<string>;

    onboarded_by?: string;

    risk_level?: number;

    onboarding_token?: string;

    password?: string;

    email_verified_last_request?: string;

    uuid?: string;

    created?: string;

    updated?: string;

    comments?: string;

    status?: models.models.StatusB65Enum;

    email_verified?: boolean;

    email_verify_last_request?: string;

    title?: models.models.TitleEnum | models.BlankEnum | models.NullEnum;

    first_name?: string;

    middle_name?: string;

    last_name?: string;

    gender?: models.models.GenderEnum | models.BlankEnum | models.NullEnum;

    marital_status?: models.models.MaritalStatusEnum | models.BlankEnum | models.NullEnum;

    phone_number?: string;

    phone_number_verified?: string;

    language?: string;

    employment_status?: models.models.EmploymentStatusEnum | models.BlankEnum | models.NullEnum;

    profession?: string;

    referral_code?: string;

    activated?: string;

    utm_source?: string;

    utm_medium?: string;

    utm_campaign?: string;

    utm_term?: string;

    utm_content?: string;

    marketing_consent_date?: string;

    data_consent_date?: string;

}
