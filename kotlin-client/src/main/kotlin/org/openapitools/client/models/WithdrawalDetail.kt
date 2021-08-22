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

import org.openapitools.client.models.Status14bEnum

import com.squareup.moshi.Json

/**
 * 
 *
 * @param uuid 
 * @param portfolio 
 * @param amount 
 * @param provider 
 * @param status 
 * @param created 
 * @param withdrawalType 
 * @param reason Cancelled reason
 * @param completed 
 * @param purpose Withdrawal reason
 * @param extraData Additional withdrawal attributes for the specific portal
 */

data class WithdrawalDetail (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "portfolio")
    val portfolio: kotlin.String,

    @Json(name = "amount")
    val amount: kotlin.Double,

    @Json(name = "provider")
    val provider: kotlin.String,

    @Json(name = "status")
    val status: Status14bEnum,

    @Json(name = "created")
    val created: java.time.OffsetDateTime,

    @Json(name = "withdrawal_type")
    val withdrawalType: kotlin.String,

    /* Cancelled reason */
    @Json(name = "reason")
    val reason: kotlin.String? = null,

    @Json(name = "completed")
    val completed: java.time.OffsetDateTime? = null,

    /* Withdrawal reason */
    @Json(name = "purpose")
    val purpose: kotlin.String? = null,

    /* Additional withdrawal attributes for the specific portal */
    @Json(name = "extra_data")
    val extraData: kotlin.collections.Map<kotlin.String, kotlin.Any>? = null

)

