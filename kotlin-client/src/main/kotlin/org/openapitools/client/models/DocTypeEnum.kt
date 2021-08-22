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
 * Values: iDPERSONAL,bANKDETAILS,eMPLOYMENT,mARITALSTATUS,pENSION,lEGAL,tRANSFERS,mEDICAL,cONTRACT,oTHERS
 */

enum class DocTypeEnum(val value: kotlin.String) {

    @Json(name = "ID_PERSONAL")
    iDPERSONAL("ID_PERSONAL"),

    @Json(name = "BANK_DETAILS")
    bANKDETAILS("BANK_DETAILS"),

    @Json(name = "EMPLOYMENT")
    eMPLOYMENT("EMPLOYMENT"),

    @Json(name = "MARITAL_STATUS")
    mARITALSTATUS("MARITAL_STATUS"),

    @Json(name = "PENSION")
    pENSION("PENSION"),

    @Json(name = "LEGAL")
    lEGAL("LEGAL"),

    @Json(name = "TRANSFERS")
    tRANSFERS("TRANSFERS"),

    @Json(name = "MEDICAL")
    mEDICAL("MEDICAL"),

    @Json(name = "CONTRACT")
    cONTRACT("CONTRACT"),

    @Json(name = "OTHERS")
    oTHERS("OTHERS");

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
        fun encode(data: Any?): kotlin.String? = if (data is DocTypeEnum) "$data" else null

        /**
         * Returns a valid [DocTypeEnum] for [data], null otherwise.
         */
        fun decode(data: Any?): DocTypeEnum? = data?.let {
          val normalizedData = "$it".lowercase()
          values().firstOrNull { value ->
            it == value || normalizedData == "$value".lowercase()
          }
        }
    }
}
