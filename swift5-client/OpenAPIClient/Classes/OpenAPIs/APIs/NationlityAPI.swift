//
// NationlityAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class NationlityAPI {

    /**

     - parameter clientUuid: (path)  
     - parameter nationalityCreate: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientNationalityCreate(clientUuid: UUID, nationalityCreate: NationalityCreate, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: NationalityCreate?, _ error: Error?) -> Void)) {
        clientNationalityCreateWithRequestBuilder(clientUuid: clientUuid, nationalityCreate: nationalityCreate).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - POST /api/v2/clients/{client_uuid}/nationalities/
     - Create nationality for a client
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
     - parameter nationalityCreate: (body)  
     - returns: RequestBuilder<NationalityCreate> 
     */
    open class func clientNationalityCreateWithRequestBuilder(clientUuid: UUID, nationalityCreate: NationalityCreate) -> RequestBuilder<NationalityCreate> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/nationalities/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: nationalityCreate)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<NationalityCreate>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter clientUuid: (path)  
     - parameter limit: (query) Number of results to return per page. (optional)
     - parameter offset: (query) The initial index from which to return the results. (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientNationlitiesList(clientUuid: UUID, limit: Int? = nil, offset: Int? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: PaginatedNationalityListList?, _ error: Error?) -> Void)) {
        clientNationlitiesListWithRequestBuilder(clientUuid: clientUuid, limit: limit, offset: offset).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - GET /api/v2/clients/{client_uuid}/nationalities/
     - List nationlities for a client
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
     - parameter limit: (query) Number of results to return per page. (optional)
     - parameter offset: (query) The initial index from which to return the results. (optional)
     - returns: RequestBuilder<PaginatedNationalityListList> 
     */
    open class func clientNationlitiesListWithRequestBuilder(clientUuid: UUID, limit: Int? = nil, offset: Int? = nil) -> RequestBuilder<PaginatedNationalityListList> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/nationalities/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "limit": limit?.encodeToJSON(),
            "offset": offset?.encodeToJSON(),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<PaginatedNationalityListList>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter clientUuid: (path)  
     - parameter nationalityUuid: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientNationlityDelete(clientUuid: UUID, nationalityUuid: UUID, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: Void?, _ error: Error?) -> Void)) {
        clientNationlityDeleteWithRequestBuilder(clientUuid: clientUuid, nationalityUuid: nationalityUuid).execute(apiResponseQueue) { result -> Void in
            switch result {
            case .success:
                completion((), nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - DELETE /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/
     - Delete a client nationality
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
     - parameter nationalityUuid: (path)  
     - returns: RequestBuilder<Void> 
     */
    open class func clientNationlityDeleteWithRequestBuilder(clientUuid: UUID, nationalityUuid: UUID) -> RequestBuilder<Void> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let nationalityUuidPreEscape = "\(APIHelper.mapValueToPathItem(nationalityUuid))"
        let nationalityUuidPostEscape = nationalityUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{nationality_uuid}", with: nationalityUuidPostEscape, options: .literal, range: nil)
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

     - parameter clientUuid: (path)  
     - parameter nationalityUuid: (path)  
     - parameter patchedNationalityUpdate: (body)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientNationlityPartialUpdate(clientUuid: UUID, nationalityUuid: UUID, patchedNationalityUpdate: PatchedNationalityUpdate? = nil, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: NationalityUpdate?, _ error: Error?) -> Void)) {
        clientNationlityPartialUpdateWithRequestBuilder(clientUuid: clientUuid, nationalityUuid: nationalityUuid, patchedNationalityUpdate: patchedNationalityUpdate).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - PATCH /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/
     - Partial Update a client nationality
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
     - parameter nationalityUuid: (path)  
     - parameter patchedNationalityUpdate: (body)  (optional)
     - returns: RequestBuilder<NationalityUpdate> 
     */
    open class func clientNationlityPartialUpdateWithRequestBuilder(clientUuid: UUID, nationalityUuid: UUID, patchedNationalityUpdate: PatchedNationalityUpdate? = nil) -> RequestBuilder<NationalityUpdate> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let nationalityUuidPreEscape = "\(APIHelper.mapValueToPathItem(nationalityUuid))"
        let nationalityUuidPostEscape = nationalityUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{nationality_uuid}", with: nationalityUuidPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: patchedNationalityUpdate)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<NationalityUpdate>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "PATCH", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter clientUuid: (path)  
     - parameter nationalityUuid: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientNationlityRetrieve(clientUuid: UUID, nationalityUuid: UUID, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: NationalityList?, _ error: Error?) -> Void)) {
        clientNationlityRetrieveWithRequestBuilder(clientUuid: clientUuid, nationalityUuid: nationalityUuid).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - GET /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/
     - Retrieve a client nationality
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
     - parameter nationalityUuid: (path)  
     - returns: RequestBuilder<NationalityList> 
     */
    open class func clientNationlityRetrieveWithRequestBuilder(clientUuid: UUID, nationalityUuid: UUID) -> RequestBuilder<NationalityList> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let nationalityUuidPreEscape = "\(APIHelper.mapValueToPathItem(nationalityUuid))"
        let nationalityUuidPostEscape = nationalityUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{nationality_uuid}", with: nationalityUuidPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<NationalityList>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }

    /**

     - parameter clientUuid: (path)  
     - parameter nationalityUuid: (path)  
     - parameter nationalityUpdate: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func clientNationlityUpdate(clientUuid: UUID, nationalityUuid: UUID, nationalityUpdate: NationalityUpdate, apiResponseQueue: DispatchQueue = OpenAPIClient.apiResponseQueue, completion: @escaping ((_ data: NationalityUpdate?, _ error: Error?) -> Void)) {
        clientNationlityUpdateWithRequestBuilder(clientUuid: clientUuid, nationalityUuid: nationalityUuid, nationalityUpdate: nationalityUpdate).execute(apiResponseQueue) { result -> Void in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     - PUT /api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/
     - Update a client nationality
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
     - parameter nationalityUuid: (path)  
     - parameter nationalityUpdate: (body)  
     - returns: RequestBuilder<NationalityUpdate> 
     */
    open class func clientNationlityUpdateWithRequestBuilder(clientUuid: UUID, nationalityUuid: UUID, nationalityUpdate: NationalityUpdate) -> RequestBuilder<NationalityUpdate> {
        var localVariablePath = "/api/v2/clients/{client_uuid}/nationalities/{nationality_uuid}/"
        let clientUuidPreEscape = "\(APIHelper.mapValueToPathItem(clientUuid))"
        let clientUuidPostEscape = clientUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{client_uuid}", with: clientUuidPostEscape, options: .literal, range: nil)
        let nationalityUuidPreEscape = "\(APIHelper.mapValueToPathItem(nationalityUuid))"
        let nationalityUuidPostEscape = nationalityUuidPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{nationality_uuid}", with: nationalityUuidPostEscape, options: .literal, range: nil)
        let localVariableURLString = OpenAPIClient.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: nationalityUpdate)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<NationalityUpdate>.Type = OpenAPIClient.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "PUT", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters)
    }
}
