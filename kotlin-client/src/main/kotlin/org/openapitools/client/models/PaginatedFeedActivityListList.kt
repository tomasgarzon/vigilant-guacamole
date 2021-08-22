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

import org.openapitools.client.models.FeedActivityList

import com.squareup.moshi.Json

/**
 * 
 *
 * @param count 
 * @param next 
 * @param previous 
 * @param results 
 */

data class PaginatedFeedActivityListList (

    @Json(name = "count")
    val count: kotlin.Int? = null,

    @Json(name = "next")
    val next: java.net.URI? = null,

    @Json(name = "previous")
    val previous: java.net.URI? = null,

    @Json(name = "results")
    val results: kotlin.collections.List<FeedActivityList>? = null

)

