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

import org.openapitools.client.models.DepositTypeEnum
import org.openapitools.client.models.StatusB6aEnum

import com.squareup.moshi.Json

/**
 * 
 *
 * @param uuid 
 * @param portfolio 
 * @param amount 
 * @param provider 
 * @param reference 
 * @param status 
 * @param reason Cancelled reason
 * @param completed 
 * @param depositType 
 * @param transactedAt 
 * @param extraData Additional deposit attributes for the specific portal
 */

data class DepositDetail (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "portfolio")
    val portfolio: kotlin.String,

    @Json(name = "amount")
    val amount: kotlin.Double,

    @Json(name = "provider")
    val provider: kotlin.String,

    @Json(name = "reference")
    val reference: kotlin.String,

    @Json(name = "status")
    val status: StatusB6aEnum? = null,

    /* Cancelled reason */
    @Json(name = "reason")
    val reason: kotlin.String? = null,

    @Json(name = "completed")
    val completed: java.time.OffsetDateTime? = null,

    @Json(name = "deposit_type")
    val depositType: DepositTypeEnum? = null,

    @Json(name = "transacted_at")
    val transactedAt: java.time.OffsetDateTime? = null,

    /* Additional deposit attributes for the specific portal */
    @Json(name = "extra_data")
    val extraData: kotlin.collections.Map<kotlin.String, kotlin.Any>? = null

)

