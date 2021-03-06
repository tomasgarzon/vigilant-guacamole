/**
 * Nucoro API
 *
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models

import org.openapitools.client.models.CountryField
import org.openapitools.client.models.OneOfLessThanEmploymentStatusEnumCommaBlankEnumCommaNullEnumGreaterThan
import org.openapitools.client.models.OneOfLessThanGenderEnumCommaBlankEnumCommaNullEnumGreaterThan
import org.openapitools.client.models.OneOfLessThanMaritalStatusEnumCommaBlankEnumCommaNullEnumGreaterThan
import org.openapitools.client.models.OneOfLessThanTitleEnumCommaBlankEnumCommaNullEnumGreaterThan
import org.openapitools.client.models.StatusB65Enum

import com.squareup.moshi.Json

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param email 
 * @param birthdate 
 * @param tosConsent 
 * @param marketingConsent 
 * @param dataConsent 
 * @param tosConsentDate 
 * @param taxInformation 
 * @param countryBirth 
 * @param lastLogin 
 * @param referredBy 
 * @param successfulReferrals 
 * @param kycVerified 
 * @param isVerified 
 * @param feeSegments 
 * @param extraData 
 * @param portfolios 
 * @param onboardedBy 
 * @param riskLevel 
 * @param onboardingToken 
 * @param password 
 * @param emailVerifiedLastRequest 
 * @param uuid 
 * @param created 
 * @param updated 
 * @param comments 
 * @param status 
 * @param emailVerified 
 * @param emailVerifyLastRequest 
 * @param title 
 * @param firstName 
 * @param middleName 
 * @param lastName 
 * @param gender 
 * @param maritalStatus 
 * @param phoneNumber 
 * @param phoneNumberVerified 
 * @param language 
 * @param employmentStatus 
 * @param profession 
 * @param referralCode 
 * @param activated 
 * @param utmSource 
 * @param utmMedium 
 * @param utmCampaign 
 * @param utmTerm 
 * @param utmContent 
 * @param marketingConsentDate 
 * @param dataConsentDate 
 */

data class PatchedApplicationClientUpdate (

    @Json(name = "email")
    val email: kotlin.String? = null,

    @Json(name = "birthdate")
    val birthdate: java.time.LocalDate? = null,

    @Json(name = "tos_consent")
    val tosConsent: kotlin.Boolean? = null,

    @Json(name = "marketing_consent")
    val marketingConsent: kotlin.Boolean? = null,

    @Json(name = "data_consent")
    val dataConsent: kotlin.Boolean? = null,

    @Json(name = "tos_consent_date")
    val tosConsentDate: java.time.LocalDate? = null,

    @Json(name = "tax_information")
    val taxInformation: kotlin.collections.List<kotlin.String>? = null,

    @Json(name = "country_birth")
    val countryBirth: CountryField? = null,

    @Json(name = "last_login")
    val lastLogin: java.time.OffsetDateTime? = null,

    @Json(name = "referred_by")
    val referredBy: kotlin.String? = null,

    @Json(name = "successful_referrals")
    val successfulReferrals: kotlin.Int? = null,

    @Json(name = "kyc_verified")
    val kycVerified: kotlin.Boolean? = null,

    @Json(name = "is_verified")
    val isVerified: kotlin.Boolean? = null,

    @Json(name = "fee_segments")
    val feeSegments: kotlin.collections.List<kotlin.String>? = null,

    @Json(name = "extra_data")
    val extraData: kotlin.collections.Map<kotlin.String, kotlin.Any>? = null,

    @Json(name = "portfolios")
    val portfolios: kotlin.collections.List<kotlin.String>? = null,

    @Json(name = "onboarded_by")
    val onboardedBy: kotlin.String? = null,

    @Json(name = "risk_level")
    val riskLevel: kotlin.Int? = null,

    @Json(name = "onboarding_token")
    val onboardingToken: kotlin.String? = null,

    @Json(name = "password")
    val password: kotlin.String? = null,

    @Json(name = "email_verified_last_request")
    val emailVerifiedLastRequest: java.time.OffsetDateTime? = null,

    @Json(name = "uuid")
    val uuid: java.util.UUID? = null,

    @Json(name = "created")
    val created: java.time.OffsetDateTime? = null,

    @Json(name = "updated")
    val updated: java.time.OffsetDateTime? = null,

    @Json(name = "comments")
    val comments: kotlin.String? = null,

    @Json(name = "status")
    val status: StatusB65Enum? = null,

    @Json(name = "email_verified")
    val emailVerified: kotlin.Boolean? = null,

    @Json(name = "email_verify_last_request")
    val emailVerifyLastRequest: java.time.OffsetDateTime? = null,

    @Json(name = "title")
    val title: OneOfLessThanTitleEnumCommaBlankEnumCommaNullEnumGreaterThan? = null,

    @Json(name = "first_name")
    val firstName: kotlin.String? = null,

    @Json(name = "middle_name")
    val middleName: kotlin.String? = null,

    @Json(name = "last_name")
    val lastName: kotlin.String? = null,

    @Json(name = "gender")
    val gender: OneOfLessThanGenderEnumCommaBlankEnumCommaNullEnumGreaterThan? = null,

    @Json(name = "marital_status")
    val maritalStatus: OneOfLessThanMaritalStatusEnumCommaBlankEnumCommaNullEnumGreaterThan? = null,

    @Json(name = "phone_number")
    val phoneNumber: kotlin.String? = null,

    @Json(name = "phone_number_verified")
    val phoneNumberVerified: java.time.OffsetDateTime? = null,

    @Json(name = "language")
    val language: kotlin.String? = null,

    @Json(name = "employment_status")
    val employmentStatus: OneOfLessThanEmploymentStatusEnumCommaBlankEnumCommaNullEnumGreaterThan? = null,

    @Json(name = "profession")
    val profession: kotlin.String? = null,

    @Json(name = "referral_code")
    val referralCode: kotlin.String? = null,

    @Json(name = "activated")
    val activated: java.time.OffsetDateTime? = null,

    @Json(name = "utm_source")
    val utmSource: kotlin.String? = null,

    @Json(name = "utm_medium")
    val utmMedium: kotlin.String? = null,

    @Json(name = "utm_campaign")
    val utmCampaign: kotlin.String? = null,

    @Json(name = "utm_term")
    val utmTerm: kotlin.String? = null,

    @Json(name = "utm_content")
    val utmContent: kotlin.String? = null,

    @Json(name = "marketing_consent_date")
    val marketingConsentDate: java.time.LocalDate? = null,

    @Json(name = "data_consent_date")
    val dataConsentDate: java.time.LocalDate? = null

)

