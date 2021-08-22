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
 * @param id 
 * @param uuid 
 * @param created 
 * @param updated 
 * @param `value` 
 * @param portal 
 * @param key 
 */

data class PortalSettingValueList (

    @Json(name = "id")
    val id: kotlin.Int,

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "created")
    val created: java.time.OffsetDateTime,

    @Json(name = "updated")
    val updated: java.time.OffsetDateTime,

    @Json(name = "value")
    val `value`: kotlin.String,

    @Json(name = "portal")
    val portal: kotlin.Int,

    @Json(name = "key")
    val key: kotlin.Int

)

