//
// DocumentAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class DocumentAPI {

    /**

     - parameter clientUuid: (path)  
     - parameter uuid: (form)  
     - parameter name: (form)  
     - parameter docType: (form)  
     - parameter path: (form)  
     - parameter description: (form)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientDocumentCreate(clientUuid: UUID, uuid: UUID, name: String, docType: DocTypeEnum, path: String, description: String? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: Document?, _ error: Error?) -> Void)) {
        clientDocumentCreateWithRequestBuilder(clientUuid: clientUuid, uuid: uuid, name: name, docType: docType, path: path, description: description).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - POST /api/v2/clients/{client_uuid}/documents/
     - Create a document for a client
     - API Key:
       - type: apiKey Session 
       - name: cookieAuth
     - BASIC:
       - type: http
       - name: jwtAuth
     - API Key:
       - type: apiKey Authorization 
       - name: tokenAuth
     - parameter clientUuid: (path)  
     - parameter uuid: (form)  
     - parameter name: (form)  
     - parameter docType: (form)  
     - parameter path: (form)  
     - parameter description: (form)  (optional)
     - returns: RequestBuilder<Document> 
     */
    open class func clientDocumentCreateWithRequestBuilder(clientUuid: UUID, uuid: UUID, name: String, docType: DocTypeEnum, path: String, description: String? = nil) -> RequestBuilder<Document> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/documents/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableFormParams: [String: Any?] = [
            "uuid": uuid.encodeToJSON(),
            "name": name.encodeToJSON(),
            "doc_type": docType.encodeToJSON(),
            "description": description?.encodeToJSON(),
            "path": path.encodeToJSON(),
        ]

        let localVariableNonNullParameters = APIHelper.rejectNil(localVariableFormParams)
        let localVariableParameters = APIHelper.convertBoolToString(localVariableNonNullParameters)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Content-Type": "multipart/form-data",
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<Document>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter clientUuid: (path)  
     - parameter uuid: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientDocumentDelete(clientUuid: UUID, uuid: UUID, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: Void?, _ error: Error?) -> Void)) {
        clientDocumentDeleteWithRequestBuilder(clientUuid: clientUuid, uuid: uuid).execute(apiResponseQueue) { result -> Void in
            switch result {
            case .success:
                completion((), nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - DELETE /api/v2/clients/{client_uuid}/documents/{uuid}/
     - Delete a client document
     - API Key:
       - type: apiKey Session 
       - name: cookieAuth
     - BASIC:
       - type: http
       - name: jwtAuth
     - API Key:
       - type: apiKey Authorization 
       - name: tokenAuth
     - parameter clientUuid: (path)  
     - parameter uuid: (path)  
     - returns: RequestBuilder<Void> 
     */
    open class func clientDocumentDeleteWithRequestBuilder(clientUuid: UUID, uuid: UUID) -> RequestBuilder<Void> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/documents/{uuid}/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let uuidPreEscape = "\(APIHelper.mapValueToPathItem(uuid))"
        let uuidPostEscape = uuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{uuid}", with: uuidPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<Void>.Type = OpenAPIClient.requestBuilderFactory.getNonDecodableBuilder()

        return localVariableRequestBuilder.init(method: "DELETE", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**
     * enum for parameter docType
     */
    public enum DocType_clientDocumentList: String, CaseIterable {
        case bankDetails = "BANK_DETAILS"
        case contract = "CONTRACT"
        case employment = "EMPLOYMENT"
        case idPersonal = "ID_PERSONAL"
        case legal = "LEGAL"
        case maritalStatus = "MARITAL_STATUS"
        case medical = "MEDICAL"
        case others = "OTHERS"
        case pension = "PENSION"
        case transfers = "TRANSFERS"
    }

    /**

     - parameter clientUuid: (path)  
     - parameter client: (query)  (optional)
     - parameter description: (query)  (optional)
     - parameter docType: (query)  (optional)
     - parameter extraData: (query) Additional document attributes for the specific portal (optional)
     - parameter limit: (query) Number of results to return per page. (optional)
     - parameter name: (query)  (optional)
     - parameter offset: (query) The initial index from which to return the results. (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientDocumentList(clientUuid: UUID, client: Int? = nil, description: String? = nil, docType: [String]? = nil, extraData: [String: AnyCodable]? = nil, limit: Int? = nil, name: String? = nil, offset: Int? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: PaginatedDocumentList?, _ error: Error?) -> Void)) {
        clientDocumentListWithRequestBuilder(clientUuid: clientUuid, client: client, description: description, docType: docType, extraData: extraData, limit: limit, name: name, offset: offset).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - GET /api/v2/clients/{client_uuid}/documents/
     - List Document for a client
     - API Key:
       - type: apiKey Session 
       - name: cookieAuth
     - BASIC:
       - type: http
       - name: jwtAuth
     - API Key:
       - type: apiKey Authorization 
       - name: tokenAuth
     - parameter clientUuid: (path)  
     - parameter client: (query)  (optional)
     - parameter description: (query)  (optional)
     - parameter docType: (query)  (optional)
     - parameter extraData: (query) Additional document attributes for the specific portal (optional)
     - parameter limit: (query) Number of results to return per page. (optional)
     - parameter name: (query)  (optional)
     - parameter offset: (query) The initial index from which to return the results. (optional)
     - returns: RequestBuilder<PaginatedDocumentList> 
     */
    open class func clientDocumentListWithRequestBuilder(clientUuid: UUID, client: Int? = nil, description: String? = nil, docType: [String]? = nil, extraData: [String: AnyCodable]? = nil, limit: Int? = nil, name: String? = nil, offset: Int? = nil) -> RequestBuilder<PaginatedDocumentList> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/documents/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "client": client?.encodeToJSON(),
            "description": description?.encodeToJSON(),
            "doc_type": docType?.encodeToJSON(),
            "extra_data": extraData?.encodeToJSON(),
            "limit": limit?.encodeToJSON(),
            "name": name?.encodeToJSON(),
            "offset": offset?.encodeToJSON(),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<PaginatedDocumentList>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter clientUuid: (path)  
     - parameter uuid: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientDocumentRetrieve(clientUuid: UUID, uuid: UUID, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: Document?, _ error: Error?) -> Void)) {
        clientDocumentRetrieveWithRequestBuilder(clientUuid: clientUuid, uuid: uuid).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - GET /api/v2/clients/{client_uuid}/documents/{uuid}/
     - Retrieve a client document
     - API Key:
       - type: apiKey Session 
       - name: cookieAuth
     - BASIC:
       - type: http
       - name: jwtAuth
     - API Key:
       - type: apiKey Authorization 
       - name: tokenAuth
     - parameter clientUuid: (path)  
     - parameter uuid: (path)  
     - returns: RequestBuilder<Document> 
     */
    open class func clientDocumentRetrieveWithRequestBuilder(clientUuid: UUID, uuid: UUID) -> RequestBuilder<Document> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/documents/{uuid}/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let uuidPreEscape = "\(APIHelper.mapValueToPathItem(uuid))"
        let uuidPostEscape = uuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{uuid}", with: uuidPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<Document>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }
}
