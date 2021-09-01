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


import com.squareup.moshi.Json

/**
 * 
 *
 * @param code 
 * @param order 
 * @param description 
 * @param created 
 */

data class RiskChoice (

    @Json(name = "code")
    val code: kotlin.String,

    @Json(name = "order")
    val order: kotlin.Int,

    @Json(name = "description")
    val description: kotlin.String,

    @Json(name = "created")
    val created: java.time.OffsetDateTime

)
