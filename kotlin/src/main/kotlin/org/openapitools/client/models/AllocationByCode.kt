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
 * @param code 
 * @param name 
 * @param balance 
 * @param weight 
 */

data class AllocationByCode (

    @Json(name = "code")
    val code: kotlin.String,

    @Json(name = "name")
    val name: kotlin.String,

    @Json(name = "balance")
    val balance: kotlin.Double,

    @Json(name = "weight")
    val weight: kotlin.Double

)

