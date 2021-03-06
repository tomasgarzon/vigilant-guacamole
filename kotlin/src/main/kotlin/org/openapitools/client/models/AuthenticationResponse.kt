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
 * @param id 
 * @param email 
 * @param sessionToken 
 * @param status 
 * @param error 
 */

data class AuthenticationResponse (

    @Json(name = "id")
    val id: kotlin.String,

    @Json(name = "email")
    val email: kotlin.String,

    @Json(name = "session_token")
    val sessionToken: kotlin.String,

    @Json(name = "status")
    val status: kotlin.String? = null,

    @Json(name = "error")
    val error: kotlin.String? = null

)

