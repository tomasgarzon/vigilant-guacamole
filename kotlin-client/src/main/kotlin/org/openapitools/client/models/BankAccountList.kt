/**
 * Nucoro API v2
 *
 * No description
 *
 * The version of the OpenAPI document: 1.0.0
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


import com.squareup.moshi.Json

/**
 * 
 *
 * @param uuid 
 * @param accountNumber 
 * @param accountSortCode 
 * @param accountHolderName 
 * @param joint 
 * @param bankName 
 * @param iban 
 * @param swiftCode 
 */

data class BankAccountList (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "account_number")
    val accountNumber: kotlin.String,

    @Json(name = "account_sort_code")
    val accountSortCode: kotlin.String,

    @Json(name = "account_holder_name")
    val accountHolderName: kotlin.String,

    @Json(name = "joint")
    val joint: kotlin.Boolean,

    @Json(name = "bank_name")
    val bankName: kotlin.String,

    @Json(name = "iban")
    val iban: kotlin.String,

    @Json(name = "swift_code")
    val swiftCode: kotlin.String

)

