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
 * @param riskLevel 
 * @param balance 
 */

data class AUMPortfolioRisk (

    @Json(name = "risk_level")
    val riskLevel: kotlin.Int,

    @Json(name = "balance")
    val balance: kotlin.Double

)

