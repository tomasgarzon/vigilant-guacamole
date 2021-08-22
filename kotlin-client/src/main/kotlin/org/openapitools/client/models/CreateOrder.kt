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

import org.openapitools.client.models.CreateOrderMethodEnum
import org.openapitools.client.models.DurationEnum
import org.openapitools.client.models.OrderTypeEnum
import org.openapitools.client.models.RelatedAssetSerializerWithAssetCategories

import com.squareup.moshi.Json

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param shares 
 * @param asset 
 * @param orderType 
 * @param method 
 * @param portfolio 
 * @param limitPrice 
 * @param stopPrice 
 * @param duration 
 */

data class CreateOrder (

    @Json(name = "shares")
    val shares: kotlin.Int,

    @Json(name = "asset")
    val asset: RelatedAssetSerializerWithAssetCategories,

    @Json(name = "order_type")
    val orderType: OrderTypeEnum,

    @Json(name = "method")
    val method: CreateOrderMethodEnum,

    @Json(name = "portfolio")
    val portfolio: kotlin.String? = null,

    @Json(name = "limit_price")
    val limitPrice: kotlin.Double? = null,

    @Json(name = "stop_price")
    val stopPrice: kotlin.Double? = null,

    @Json(name = "duration")
    val duration: DurationEnum? = null

)
