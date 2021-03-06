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

package org.openapitools.client.apis

import org.openapitools.client.models.Assessment
import org.openapitools.client.models.PaginatedAssessmentList
import org.openapitools.client.models.PatchedAssessment

import org.openapitools.client.infrastructure.ApiClient
import org.openapitools.client.infrastructure.ClientException
import org.openapitools.client.infrastructure.ClientError
import org.openapitools.client.infrastructure.ServerException
import org.openapitools.client.infrastructure.ServerError
import org.openapitools.client.infrastructure.MultiValueMap
import org.openapitools.client.infrastructure.RequestConfig
import org.openapitools.client.infrastructure.RequestMethod
import org.openapitools.client.infrastructure.ResponseType
import org.openapitools.client.infrastructure.Success
import org.openapitools.client.infrastructure.toMultiValue

class RiskAssessmentApi(basePath: kotlin.String = defaultBasePath) : ApiClient(basePath) {
    companion object {
        @JvmStatic
        val defaultBasePath: String by lazy {
            System.getProperties().getProperty("org.openapitools.client.baseUrl", "http://localhost")
        }
    }

    /**
    * 
    * Create a risk assessment for a client
    * @param clientUuid  
    * @param assessment  
    * @return Assessment
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Suppress("UNCHECKED_CAST")
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientRiskAssessmentCreate(clientUuid: java.util.UUID, assessment: Assessment) : Assessment {
        val localVariableConfig = clientRiskAssessmentCreateRequestConfig(clientUuid = clientUuid, assessment = assessment)

        val localVarResponse = request<Assessment, Assessment>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as Assessment
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
    * To obtain the request config of the operation clientRiskAssessmentCreate
    *
    * @param clientUuid  
    * @param assessment  
    * @return RequestConfig
    */
    fun clientRiskAssessmentCreateRequestConfig(clientUuid: java.util.UUID, assessment: Assessment) : RequestConfig<Assessment> {
        val localVariableBody = assessment
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.POST,
            path = "/api/v2/clients/{client_uuid}/risk-assessments/".replace("{"+"client_uuid"+"}", "$clientUuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

    /**
    * 
    * Delete a client risk assessment
    * @param clientUuid  
    * @param uuid  
    * @return void
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientRiskAssessmentDelete(clientUuid: java.util.UUID, uuid: java.util.UUID) : Unit {
        val localVariableConfig = clientRiskAssessmentDeleteRequestConfig(clientUuid = clientUuid, uuid = uuid)

        val localVarResponse = request<Unit, Unit>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> Unit
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
    * To obtain the request config of the operation clientRiskAssessmentDelete
    *
    * @param clientUuid  
    * @param uuid  
    * @return RequestConfig
    */
    fun clientRiskAssessmentDeleteRequestConfig(clientUuid: java.util.UUID, uuid: java.util.UUID) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.DELETE,
            path = "/api/v2/clients/{client_uuid}/risk-assessments/{uuid}/".replace("{"+"client_uuid"+"}", "$clientUuid").replace("{"+"uuid"+"}", "$uuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

    /**
    * 
    * List Risk Assessment for a client
    * @param clientUuid  
    * @param limit Number of results to return per page. (optional)
    * @param offset The initial index from which to return the results. (optional)
    * @param status  (optional)
    * @return PaginatedAssessmentList
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Suppress("UNCHECKED_CAST")
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientRiskAssessmentList(clientUuid: java.util.UUID, limit: kotlin.Int?, offset: kotlin.Int?, status: kotlin.collections.List<kotlin.String>?) : PaginatedAssessmentList {
        val localVariableConfig = clientRiskAssessmentListRequestConfig(clientUuid = clientUuid, limit = limit, offset = offset, status = status)

        val localVarResponse = request<Unit, PaginatedAssessmentList>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as PaginatedAssessmentList
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
    * To obtain the request config of the operation clientRiskAssessmentList
    *
    * @param clientUuid  
    * @param limit Number of results to return per page. (optional)
    * @param offset The initial index from which to return the results. (optional)
    * @param status  (optional)
    * @return RequestConfig
    */
    fun clientRiskAssessmentListRequestConfig(clientUuid: java.util.UUID, limit: kotlin.Int?, offset: kotlin.Int?, status: kotlin.collections.List<kotlin.String>?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, List<kotlin.String>>()
            .apply {
                if (limit != null) {
                    put("limit", listOf(limit.toString()))
                }
                if (offset != null) {
                    put("offset", listOf(offset.toString()))
                }
                if (status != null) {
                    put("status", toMultiValue(status.toList(), "multi"))
                }
            }
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/api/v2/clients/{client_uuid}/risk-assessments/".replace("{"+"client_uuid"+"}", "$clientUuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

    /**
    * 
    * Partial Update a client risk assessment
    * @param clientUuid  
    * @param uuid  
    * @param patchedAssessment  (optional)
    * @return Assessment
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Suppress("UNCHECKED_CAST")
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientRiskAssessmentPartialUpdate(clientUuid: java.util.UUID, uuid: java.util.UUID, patchedAssessment: PatchedAssessment?) : Assessment {
        val localVariableConfig = clientRiskAssessmentPartialUpdateRequestConfig(clientUuid = clientUuid, uuid = uuid, patchedAssessment = patchedAssessment)

        val localVarResponse = request<PatchedAssessment, Assessment>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as Assessment
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
    * To obtain the request config of the operation clientRiskAssessmentPartialUpdate
    *
    * @param clientUuid  
    * @param uuid  
    * @param patchedAssessment  (optional)
    * @return RequestConfig
    */
    fun clientRiskAssessmentPartialUpdateRequestConfig(clientUuid: java.util.UUID, uuid: java.util.UUID, patchedAssessment: PatchedAssessment?) : RequestConfig<PatchedAssessment> {
        val localVariableBody = patchedAssessment
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.PATCH,
            path = "/api/v2/clients/{client_uuid}/risk-assessments/{uuid}/".replace("{"+"client_uuid"+"}", "$clientUuid").replace("{"+"uuid"+"}", "$uuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

    /**
    * 
    * Retrieve a client risk assessment
    * @param clientUuid  
    * @param uuid  
    * @return Assessment
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Suppress("UNCHECKED_CAST")
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientRiskAssessmentRetrieve(clientUuid: java.util.UUID, uuid: java.util.UUID) : Assessment {
        val localVariableConfig = clientRiskAssessmentRetrieveRequestConfig(clientUuid = clientUuid, uuid = uuid)

        val localVarResponse = request<Unit, Assessment>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as Assessment
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
    * To obtain the request config of the operation clientRiskAssessmentRetrieve
    *
    * @param clientUuid  
    * @param uuid  
    * @return RequestConfig
    */
    fun clientRiskAssessmentRetrieveRequestConfig(clientUuid: java.util.UUID, uuid: java.util.UUID) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/api/v2/clients/{client_uuid}/risk-assessments/{uuid}/".replace("{"+"client_uuid"+"}", "$clientUuid").replace("{"+"uuid"+"}", "$uuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

}
