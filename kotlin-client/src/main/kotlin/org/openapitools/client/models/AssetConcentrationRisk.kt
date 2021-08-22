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
 * @param name 
 * @param assetClass 
 * @param uuid 
 * @param `value` 
 * @param weight 
 */

data class AssetConcentrationRisk (

    @Json(name = "name")
    val name: kotlin.String,

    @Json(name = "asset_class")
    val assetClass: kotlin.String,

    @Json(name = "uuid")
    val uuid: kotlin.String,

    @Json(name = "value")
    val `value`: kotlin.Double,

    @Json(name = "weight")
    val weight: kotlin.Double

)
