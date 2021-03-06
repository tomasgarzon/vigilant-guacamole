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
 * @param valuationDatetime 
 * @param lastUpdate 
 * @param asset 
 * @param shares 
 * @param price 
 * @param currency 
 * @param `value` 
 * @param positionReturn 
 * @param unrealisedPl 
 * @param realisedPl 
 * @param earnings 
 * @param avgEntryPrice 
 * @param dailyPl 
 * @param weight 
 * @param fxRateAccount 
 * @param assetCurrencyValue 
 */

data class PortfolioPerformancePositions (

    @Json(name = "valuation_datetime")
    val valuationDatetime: java.time.OffsetDateTime,

    @Json(name = "last_update")
    val lastUpdate: java.time.OffsetDateTime,

    @Json(name = "asset")
    val asset: kotlin.String,

    @Json(name = "shares")
    val shares: kotlin.Double,

    @Json(name = "price")
    val price: kotlin.Double,

    @Json(name = "currency")
    val currency: kotlin.String,

    @Json(name = "value")
    val `value`: kotlin.Double,

    @Json(name = "position_return")
    val positionReturn: kotlin.Double,

    @Json(name = "unrealised_pl")
    val unrealisedPl: kotlin.Double,

    @Json(name = "realised_pl")
    val realisedPl: kotlin.Double,

    @Json(name = "earnings")
    val earnings: kotlin.Double,

    @Json(name = "avg_entry_price")
    val avgEntryPrice: kotlin.Double,

    @Json(name = "daily_pl")
    val dailyPl: kotlin.Double,

    @Json(name = "weight")
    val weight: kotlin.Double? = null,

    @Json(name = "fx_rate_account")
    val fxRateAccount: kotlin.Double? = null,

    @Json(name = "asset_currency_value")
    val assetCurrencyValue: kotlin.Double? = null

)

