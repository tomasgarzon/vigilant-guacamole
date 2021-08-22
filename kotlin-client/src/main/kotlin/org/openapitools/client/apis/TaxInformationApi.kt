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

package org.openapitools.client.apis

import org.openapitools.client.models.PaginatedTaxInformationListList
import org.openapitools.client.models.PatchedTaxInformationCreateUpdate
import org.openapitools.client.models.TaxInformationCreateUpdate
import org.openapitools.client.models.TaxInformationList

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

class TaxInformationApi(basePath: kotlin.String = defaultBasePath) : ApiClient(basePath) {
    companion object {
        @JvmStatic
        val defaultBasePath: String by lazy {
            System.getProperties().getProperty("org.openapitools.client.baseUrl", "http://localhost")
        }
    }

    /**
    * 
    * Create a tax inforation for a client
    * @param clientUuid  
    * @param taxInformationCreateUpdate  
    * @return TaxInformationCreateUpdate
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Suppress("UNCHECKED_CAST")
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientTaxInformationCreate(clientUuid: java.util.UUID, taxInformationCreateUpdate: TaxInformationCreateUpdate) : TaxInformationCreateUpdate {
        val localVariableConfig = clientTaxInformationCreateRequestConfig(clientUuid = clientUuid, taxInformationCreateUpdate = taxInformationCreateUpdate)

        val localVarResponse = request<TaxInformationCreateUpdate, TaxInformationCreateUpdate>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as TaxInformationCreateUpdate
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
    * To obtain the request config of the operation clientTaxInformationCreate
    *
    * @param clientUuid  
    * @param taxInformationCreateUpdate  
    * @return RequestConfig
    */
    fun clientTaxInformationCreateRequestConfig(clientUuid: java.util.UUID, taxInformationCreateUpdate: TaxInformationCreateUpdate) : RequestConfig<TaxInformationCreateUpdate> {
        val localVariableBody = taxInformationCreateUpdate
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.POST,
            path = "/api/v2/clients/{client_uuid}/tax-informations/".replace("{"+"client_uuid"+"}", "$clientUuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

    /**
    * 
    * Delete a client tax inforation
    * @param clientUuid  
    * @param taxInformationUuid  
    * @return void
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientTaxInformationDelete(clientUuid: java.util.UUID, taxInformationUuid: java.util.UUID) : Unit {
        val localVariableConfig = clientTaxInformationDeleteRequestConfig(clientUuid = clientUuid, taxInformationUuid = taxInformationUuid)

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
    * To obtain the request config of the operation clientTaxInformationDelete
    *
    * @param clientUuid  
    * @param taxInformationUuid  
    * @return RequestConfig
    */
    fun clientTaxInformationDeleteRequestConfig(clientUuid: java.util.UUID, taxInformationUuid: java.util.UUID) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.DELETE,
            path = "/api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/".replace("{"+"client_uuid"+"}", "$clientUuid").replace("{"+"tax_information_uuid"+"}", "$taxInformationUuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

    /**
    * 
    * List tax information for a client
    * @param clientUuid  
    * @param limit Number of results to return per page. (optional)
    * @param offset The initial index from which to return the results. (optional)
    * @return PaginatedTaxInformationListList
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Suppress("UNCHECKED_CAST")
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientTaxInformationList(clientUuid: java.util.UUID, limit: kotlin.Int?, offset: kotlin.Int?) : PaginatedTaxInformationListList {
        val localVariableConfig = clientTaxInformationListRequestConfig(clientUuid = clientUuid, limit = limit, offset = offset)

        val localVarResponse = request<Unit, PaginatedTaxInformationListList>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as PaginatedTaxInformationListList
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
    * To obtain the request config of the operation clientTaxInformationList
    *
    * @param clientUuid  
    * @param limit Number of results to return per page. (optional)
    * @param offset The initial index from which to return the results. (optional)
    * @return RequestConfig
    */
    fun clientTaxInformationListRequestConfig(clientUuid: java.util.UUID, limit: kotlin.Int?, offset: kotlin.Int?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, List<kotlin.String>>()
            .apply {
                if (limit != null) {
                    put("limit", listOf(limit.toString()))
                }
                if (offset != null) {
                    put("offset", listOf(offset.toString()))
                }
            }
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/api/v2/clients/{client_uuid}/tax-informations/".replace("{"+"client_uuid"+"}", "$clientUuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

    /**
    * 
    * Partial Update a client tax inforation
    * @param clientUuid  
    * @param taxInformationUuid  
    * @param patchedTaxInformationCreateUpdate  (optional)
    * @return TaxInformationCreateUpdate
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Suppress("UNCHECKED_CAST")
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientTaxInformationPartialUpdate(clientUuid: java.util.UUID, taxInformationUuid: java.util.UUID, patchedTaxInformationCreateUpdate: PatchedTaxInformationCreateUpdate?) : TaxInformationCreateUpdate {
        val localVariableConfig = clientTaxInformationPartialUpdateRequestConfig(clientUuid = clientUuid, taxInformationUuid = taxInformationUuid, patchedTaxInformationCreateUpdate = patchedTaxInformationCreateUpdate)

        val localVarResponse = request<PatchedTaxInformationCreateUpdate, TaxInformationCreateUpdate>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as TaxInformationCreateUpdate
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
    * To obtain the request config of the operation clientTaxInformationPartialUpdate
    *
    * @param clientUuid  
    * @param taxInformationUuid  
    * @param patchedTaxInformationCreateUpdate  (optional)
    * @return RequestConfig
    */
    fun clientTaxInformationPartialUpdateRequestConfig(clientUuid: java.util.UUID, taxInformationUuid: java.util.UUID, patchedTaxInformationCreateUpdate: PatchedTaxInformationCreateUpdate?) : RequestConfig<PatchedTaxInformationCreateUpdate> {
        val localVariableBody = patchedTaxInformationCreateUpdate
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.PATCH,
            path = "/api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/".replace("{"+"client_uuid"+"}", "$clientUuid").replace("{"+"tax_information_uuid"+"}", "$taxInformationUuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

    /**
    * 
    * Retrieve a client tax inforation
    * @param clientUuid  
    * @param taxInformationUuid  
    * @return TaxInformationList
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Suppress("UNCHECKED_CAST")
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientTaxInformationRetrieve(clientUuid: java.util.UUID, taxInformationUuid: java.util.UUID) : TaxInformationList {
        val localVariableConfig = clientTaxInformationRetrieveRequestConfig(clientUuid = clientUuid, taxInformationUuid = taxInformationUuid)

        val localVarResponse = request<Unit, TaxInformationList>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as TaxInformationList
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
    * To obtain the request config of the operation clientTaxInformationRetrieve
    *
    * @param clientUuid  
    * @param taxInformationUuid  
    * @return RequestConfig
    */
    fun clientTaxInformationRetrieveRequestConfig(clientUuid: java.util.UUID, taxInformationUuid: java.util.UUID) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/".replace("{"+"client_uuid"+"}", "$clientUuid").replace("{"+"tax_information_uuid"+"}", "$taxInformationUuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

    /**
    * 
    * Update a client tax inforation
    * @param clientUuid  
    * @param taxInformationUuid  
    * @param taxInformationCreateUpdate  
    * @return TaxInformationCreateUpdate
    * @throws UnsupportedOperationException If the API returns an informational or redirection response
    * @throws ClientException If the API returns a client error response
    * @throws ServerException If the API returns a server error response
    */
    @Suppress("UNCHECKED_CAST")
    @Throws(UnsupportedOperationException::class, ClientException::class, ServerException::class)
    fun clientTaxInformationUpdate(clientUuid: java.util.UUID, taxInformationUuid: java.util.UUID, taxInformationCreateUpdate: TaxInformationCreateUpdate) : TaxInformationCreateUpdate {
        val localVariableConfig = clientTaxInformationUpdateRequestConfig(clientUuid = clientUuid, taxInformationUuid = taxInformationUuid, taxInformationCreateUpdate = taxInformationCreateUpdate)

        val localVarResponse = request<TaxInformationCreateUpdate, TaxInformationCreateUpdate>(
            localVariableConfig
        )

        return when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as TaxInformationCreateUpdate
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
    * To obtain the request config of the operation clientTaxInformationUpdate
    *
    * @param clientUuid  
    * @param taxInformationUuid  
    * @param taxInformationCreateUpdate  
    * @return RequestConfig
    */
    fun clientTaxInformationUpdateRequestConfig(clientUuid: java.util.UUID, taxInformationUuid: java.util.UUID, taxInformationCreateUpdate: TaxInformationCreateUpdate) : RequestConfig<TaxInformationCreateUpdate> {
        val localVariableBody = taxInformationCreateUpdate
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()

        return RequestConfig(
            method = RequestMethod.PUT,
            path = "/api/v2/clients/{client_uuid}/tax-informations/{tax_information_uuid}/".replace("{"+"client_uuid"+"}", "$clientUuid").replace("{"+"tax_information_uuid"+"}", "$taxInformationUuid"),
            query = localVariableQuery,
            headers = localVariableHeaders,
            body = localVariableBody
        )
    }

}
