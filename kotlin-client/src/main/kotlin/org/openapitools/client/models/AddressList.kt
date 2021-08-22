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
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param uuid 
 * @param line1 
 * @param line2 
 * @param postcode 
 * @param locality 
 * @param country 
 * @param region 
 */

data class AddressList (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "line1")
    val line1: kotlin.String,

    @Json(name = "line2")
    val line2: kotlin.String,

    @Json(name = "postcode")
    val postcode: kotlin.String,

    @Json(name = "locality")
    val locality: kotlin.String,

    @Json(name = "country")
    val country: kotlin.String,

    @Json(name = "region")
    val region: kotlin.String

)
