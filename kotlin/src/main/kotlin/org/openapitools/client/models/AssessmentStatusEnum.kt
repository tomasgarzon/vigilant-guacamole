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
 * Values: pENDING,cOMPLETED,oUTDATED
 */

enum class AssessmentStatusEnum(val value: kotlin.String) {

    @Json(name = "PENDING")
    pENDING("PENDING"),

    @Json(name = "COMPLETED")
    cOMPLETED("COMPLETED"),

    @Json(name = "OUTDATED")
    oUTDATED("OUTDATED");

    /**
     * Override toString() to avoid using the enum variable name as the value, and instead use
     * the actual value defined in the API spec file.
     *
     * This solves a problem when the variable name and its value are different, and ensures that
     * the client sends the correct enum values to the server always.
     */
    override fun toString(): String = value

    companion object {
        /**
         * Converts the provided [data] to a [String] on success, null otherwise.
         */
        fun encode(data: Any?): kotlin.String? = if (data is AssessmentStatusEnum) "$data" else null

        /**
         * Returns a valid [AssessmentStatusEnum] for [data], null otherwise.
         */
        fun decode(data: Any?): AssessmentStatusEnum? = data?.let {
          val normalizedData = "$it".lowercase()
          values().firstOrNull { value ->
            it == value || normalizedData == "$value".lowercase()
          }
        }
    }
}
