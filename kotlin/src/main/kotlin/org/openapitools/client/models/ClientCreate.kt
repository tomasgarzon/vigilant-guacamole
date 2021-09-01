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

import org.openapitools.client.models.OneOfLessThanEmploymentStatusEnumCommaBlankEnumCommaNullEnumGreaterThan
import org.openapitools.client.models.OneOfLessThanGenderEnumCommaBlankEnumCommaNullEnumGreaterThan
import org.openapitools.client.models.OneOfLessThanMaritalStatusEnumCommaBlankEnumCommaNullEnumGreaterThan
import org.openapitools.client.models.OneOfLessThanTitleEnumCommaBlankEnumCommaNullEnumGreaterThan

import com.squareup.moshi.Json

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param email 
 * @param birthdate 
 * @param title 
 * @param firstName 
 * @param lastName 
 * @param middleName 
 * @param gender 
 * @param maritalStatus 
 * @param language 
 * @param employmentStatus 
 * @param activated 
 * @param profile 
 * @param password 
 * @param referralCode 
 * @param utmSource 
 * @param utmMedium 
 * @param utmCampaign 
 * @param utmTerm 
 * @param utmContent 
 * @param tosConsent 
 * @param dataConsent 
 * @param marketingConsent 
 * @param extraData 
 * @param phoneNumber 
 */

data class ClientCreate (

    @Json(name = "email")
    val email: kotlin.String,

    @Json(name = "birthdate")
    val birthdate: java.time.LocalDate? = null,

    @Json(name = "title")
    val title: OneOfLessThanTitleEnumCommaBlankEnumCommaNullEnumGreaterThan? = null,

    @Json(name = "first_name")
    val firstName: kotlin.String? = null,

    @Json(name = "last_name")
    val lastName: kotlin.String? = null,

    @Json(name = "middle_name")
    val middleName: kotlin.String? = null,

    @Json(name = "gender")
    val gender: OneOfLessThanGenderEnumCommaBlankEnumCommaNullEnumGreaterThan? = null,

    @Json(name = "marital_status")
    val maritalStatus: OneOfLessThanMaritalStatusEnumCommaBlankEnumCommaNullEnumGreaterThan? = null,

    @Json(name = "language")
    val language: kotlin.String? = null,

    @Json(name = "employment_status")
    val employmentStatus: OneOfLessThanEmploymentStatusEnumCommaBlankEnumCommaNullEnumGreaterThan? = null,

    @Json(name = "activated")
    val activated: java.time.OffsetDateTime? = null,

    @Json(name = "profile")
    val profile: kotlin.collections.Map<kotlin.String, kotlin.Any>? = null,

    @Json(name = "password")
    val password: kotlin.String? = null,

    @Json(name = "referral_code")
    val referralCode: kotlin.String? = null,

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

    @Json(name = "tos_consent")
    val tosConsent: kotlin.Boolean? = null,

    @Json(name = "data_consent")
    val dataConsent: kotlin.Boolean? = null,

    @Json(name = "marketing_consent")
    val marketingConsent: kotlin.Boolean? = null,

    @Json(name = "extra_data")
    val extraData: kotlin.collections.Map<kotlin.String, kotlin.Any>? = null,

    @Json(name = "phone_number")
    val phoneNumber: kotlin.String? = null

)
