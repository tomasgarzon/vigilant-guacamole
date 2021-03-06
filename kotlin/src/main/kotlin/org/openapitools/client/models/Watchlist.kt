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

import org.openapitools.client.models.RelatedAssetSerializerWithPermission

import com.squareup.moshi.Json

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param uuid 
 * @param name 
 * @param assets 
 */

data class Watchlist (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "name")
    val name: kotlin.String,

    @Json(name = "assets")
    val assets: kotlin.collections.List<RelatedAssetSerializerWithPermission>

)

