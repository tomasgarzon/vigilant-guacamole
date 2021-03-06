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
 * @param uuid 
 * @param name 
 * @param portfolio 
 * @param goalAmount Desired amount needed to fulfill the goal
 * @param deadline Due date to reach the goal.
 * @param initialAmount Initial deposit amount to start from. No sense to start by 0
 * @param recurringAmount 
 * @param riskLevel 
 * @param created 
 */

data class PatchedGoal (

    @Json(name = "uuid")
    val uuid: java.util.UUID? = null,

    @Json(name = "name")
    val name: kotlin.String? = null,

    @Json(name = "portfolio")
    val portfolio: kotlin.String? = null,

    /* Desired amount needed to fulfill the goal */
    @Json(name = "goal_amount")
    val goalAmount: kotlin.Double? = null,

    /* Due date to reach the goal. */
    @Json(name = "deadline")
    val deadline: java.time.LocalDate? = null,

    /* Initial deposit amount to start from. No sense to start by 0 */
    @Json(name = "initial_amount")
    val initialAmount: kotlin.Double? = null,

    @Json(name = "recurring_amount")
    val recurringAmount: kotlin.Double? = null,

    @Json(name = "risk_level")
    val riskLevel: kotlin.Int? = null,

    @Json(name = "created")
    val created: java.time.OffsetDateTime? = null

)

