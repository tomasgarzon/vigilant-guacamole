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

import org.openapitools.client.models.AssetCategory
import org.openapitools.client.models.AssetTypeEnum
import org.openapitools.client.models.Status6f6Enum

import com.squareup.moshi.Json

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param uuid 
 * @param name 
 * @param isin 
 * @param ticker 
 * @param status 
 * @param market 
 * @param currency 
 * @param extraData 
 * @param categories 
 * @param assetType 
 */

data class AssetList (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "name")
    val name: kotlin.String,

    @Json(name = "isin")
    val isin: kotlin.String,

    @Json(name = "ticker")
    val ticker: kotlin.String,

    @Json(name = "status")
    val status: Status6f6Enum,

    @Json(name = "market")
    val market: kotlin.String,

    @Json(name = "currency")
    val currency: kotlin.String,

    @Json(name = "extra_data")
    val extraData: kotlin.collections.Map<kotlin.String, kotlin.Any>,

    @Json(name = "categories")
    val categories: kotlin.collections.List<AssetCategory>,

    @Json(name = "asset_type")
    val assetType: AssetTypeEnum

)

