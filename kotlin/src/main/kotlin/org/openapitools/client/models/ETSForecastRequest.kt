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
 * @param timeHorizon 
 * @param initialAmount 
 * @param riskLevel 
 * @param recurringAmount 
 * @param recurringPeriod 
 * @param favouriteCategories 
 * @param excludedCategories 
 */

data class ETSForecastRequest (

    @Json(name = "time_horizon")
    val timeHorizon: kotlin.Int,

    @Json(name = "initial_amount")
    val initialAmount: kotlin.Double,

    @Json(name = "risk_level")
    val riskLevel: kotlin.Int,

    @Json(name = "recurring_amount")
    val recurringAmount: kotlin.Double? = null,

    @Json(name = "recurring_period")
    val recurringPeriod: kotlin.Int? = null,

    @Json(name = "favourite_categories")
    val favouriteCategories: kotlin.collections.List<kotlin.String>? = null,

    @Json(name = "excluded_categories")
    val excludedCategories: kotlin.collections.List<kotlin.String>? = null

)
