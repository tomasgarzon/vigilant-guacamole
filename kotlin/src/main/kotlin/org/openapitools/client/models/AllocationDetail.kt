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
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param valuationDate 
 * @param cashActive 
 * @param performance 
 * @param positions 
 * @param balance 
 * @param invested 
 * @param earnings 
 * @param tradeTotal 
 */

data class AllocationDetail (

    @Json(name = "valuation_date")
    val valuationDate: java.time.LocalDate,

    @Json(name = "cash_active")
    val cashActive: kotlin.Double,

    @Json(name = "performance")
    val performance: kotlin.Double,

    @Json(name = "positions")
    val positions: kotlin.collections.List<kotlin.String>,

    @Json(name = "balance")
    val balance: kotlin.Double? = null,

    @Json(name = "invested")
    val invested: kotlin.Double? = null,

    @Json(name = "earnings")
    val earnings: kotlin.Double? = null,

    @Json(name = "trade_total")
    val tradeTotal: kotlin.Double? = null

)

