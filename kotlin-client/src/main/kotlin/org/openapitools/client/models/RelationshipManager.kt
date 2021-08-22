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
 * @param uuid 
 * @param email 
 * @param firstName 
 * @param lastName 
 * @param phoneNumber 
 * @param photo 
 */

data class RelationshipManager (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "email")
    val email: kotlin.String,

    @Json(name = "first_name")
    val firstName: kotlin.String? = null,

    @Json(name = "last_name")
    val lastName: kotlin.String? = null,

    @Json(name = "phone_number")
    val phoneNumber: kotlin.String? = null,

    @Json(name = "photo")
    val photo: java.net.URI? = null

)

