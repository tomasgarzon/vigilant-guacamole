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

import org.openapitools.client.models.ResultEnum
import org.openapitools.client.models.StatusBd7Enum
import org.openapitools.client.models.VerifyTypeEnum

import com.squareup.moshi.Json

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 *
 * @param uuid 
 * @param verifyType 
 * @param status 
 * @param result 
 * @param created 
 * @param updated 
 * @param verificationDocuments 
 */

data class VerificationList (

    @Json(name = "uuid")
    val uuid: java.util.UUID,

    @Json(name = "verify_type")
    val verifyType: VerifyTypeEnum,

    @Json(name = "status")
    val status: StatusBd7Enum,

    @Json(name = "result")
    val result: ResultEnum,

    @Json(name = "created")
    val created: java.time.OffsetDateTime,

    @Json(name = "updated")
    val updated: java.time.OffsetDateTime,

    @Json(name = "verification_documents")
    val verificationDocuments: kotlin.collections.List<kotlin.String>

)

