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

import org.openapitools.client.models.Status2efEnum

import com.squareup.moshi.Json

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param uuid 
 * @param name 
 * @param portfolioType 
 * @param status 
 * @param created 
 * @param activated 
 * @param advisor 
 * @param adviceEngine 
 * @param riskLevel 
 * @param timeHorizon 
 * @param currency 
 * @param extraData 
 * @param client 
 */

data class PortfolioUpdate (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "name")
    val name: kotlin.String,

    @Json(name = "portfolio_type")
    val portfolioType: kotlin.String,

    @Json(name = "status")
    val status: Status2efEnum,

    @Json(name = "created")
    val created: java.time.OffsetDateTime,

    @Json(name = "activated")
    val activated: java.time.OffsetDateTime,

    @Json(name = "advisor")
    val advisor: kotlin.String,

    @Json(name = "advice_engine")
    val adviceEngine: kotlin.String,

    @Json(name = "risk_level")
    val riskLevel: kotlin.Int? = null,

    @Json(name = "time_horizon")
    val timeHorizon: kotlin.Int? = null,

    @Json(name = "currency")
    val currency: kotlin.String? = null,

    @Json(name = "extra_data")
    val extraData: kotlin.collections.Map<kotlin.String, kotlin.Any>? = null,

    @Json(name = "client")
    val client: kotlin.String? = null

)

