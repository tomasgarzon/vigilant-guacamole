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

import org.openapitools.client.models.Status260Enum

import com.squareup.moshi.Json

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param uuid 
 * @param created 
 * @param url 
 * @param amount 
 * @param charges 
 * @param number Invoice legal number
 * @param status 
 * @param dateFrom Beginning of charge period
 * @param dateTo End of charge period
 */

data class InvoiceDetails (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "created")
    val created: java.time.OffsetDateTime,

    @Json(name = "url")
    val url: java.net.URI,

    @Json(name = "amount")
    val amount: kotlin.Double,

    @Json(name = "charges")
    val charges: kotlin.collections.List<kotlin.String>,

    /* Invoice legal number */
    @Json(name = "number")
    val number: kotlin.String? = null,

    @Json(name = "status")
    val status: Status260Enum? = null,

    /* Beginning of charge period */
    @Json(name = "date_from")
    val dateFrom: java.time.LocalDate? = null,

    /* End of charge period */
    @Json(name = "date_to")
    val dateTo: java.time.LocalDate? = null

)

