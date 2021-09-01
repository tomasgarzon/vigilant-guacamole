/**
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as $ from 'jquery';
import * as models from '../model/models';
import { COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


export class DocumentApi {
    protected basePath = 'http://localhost';
    public defaultHeaders: Array<string> = [];
    public defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings = undefined;
    public configuration: Configuration = new Configuration();

    constructor(basePath?: string, configuration?: Configuration, defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
        if (defaultExtraJQueryAjaxSettings) {
            this.defaultExtraJQueryAjaxSettings = defaultExtraJQueryAjaxSettings;
        }
    }

    private extendObj<T1 extends object, T2 extends T1>(objA: T2, objB: T2): T1|T2 {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }

    /**
     * Create a document for a client
     * @param clientUuid 
     * @param uuid 
     * @param name 
     * @param docType 
     * @param path 
     * @param description 
     */
    public clientDocumentCreate(clientUuid: string, uuid: string, name: string, docType: models.DocTypeEnum, path: string, description?: string, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.Document;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/documents/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        let formParams = new FormData();
        let reqHasFile = false;

        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientDocumentCreate.');
        }

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling clientDocumentCreate.');
        }

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling clientDocumentCreate.');
        }

        // verify required parameter 'docType' is not null or undefined
        if (docType === null || docType === undefined) {
            throw new Error('Required parameter docType was null or undefined when calling clientDocumentCreate.');
        }

        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling clientDocumentCreate.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        if (uuid !== null && uuid !== undefined) {
            formParams.append('uuid', <any>uuid);
        }
        if (name !== null && name !== undefined) {
            formParams.append('name', <any>name);
        }
        if (docType !== null && docType !== undefined) {
            formParams.append('doc_type', <any>docType);
        }
        if (description !== null && description !== undefined) {
            formParams.append('description', <any>description);
        }
        if (path !== null && path !== undefined) {
            formParams.append('path', <any>path);
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (cookieAuth) required
        // authentication (jwtAuth) required
        // http basic authentication required
        if (this.configuration.username || this.configuration.password) {
            headerParams['Authorization'] = 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password);
        }

        // authentication (tokenAuth) required
        if (this.configuration.apiKey) {
            headerParams['Authorization'] = this.configuration.apiKey;
        }

        if (!reqHasFile) {
            headerParams['Content-Type'] = 'application/x-www-form-urlencoded';
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }
        requestOptions.data = formParams;
        if (reqHasFile) {
            requestOptions.contentType = false;
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred<
            { response: JQueryXHR; body: models.Document;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.Document, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * Delete a client document
     * @param clientUuid 
     * @param uuid 
     */
    public clientDocumentDelete(clientUuid: string, uuid: string, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body?: any;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/documents/{uuid}/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid))).replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientDocumentDelete.');
        }

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling clientDocumentDelete.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (cookieAuth) required
        // authentication (jwtAuth) required
        // http basic authentication required
        if (this.configuration.username || this.configuration.password) {
            headerParams['Authorization'] = 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password);
        }

        // authentication (tokenAuth) required
        if (this.configuration.apiKey) {
            headerParams['Authorization'] = this.configuration.apiKey;
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'DELETE',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred<
            { response: JQueryXHR; body?: any;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * List Document for a client
     * @param clientUuid 
     * @param client 
     * @param description 
     * @param docType 
     * @param extraData Additional document attributes for the specific portal
     * @param limit Number of results to return per page.
     * @param name 
     * @param offset The initial index from which to return the results.
     */
    public clientDocumentList(clientUuid: string, client?: number, description?: string, docType?: Array<'BANK_DETAILS' | 'CONTRACT' | 'EMPLOYMENT' | 'ID_PERSONAL' | 'LEGAL' | 'MARITAL_STATUS' | 'MEDICAL' | 'OTHERS' | 'PENSION' | 'TRANSFERS'>, extraData?: { [key: string]: any; }, limit?: number, name?: string, offset?: number, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.PaginatedDocumentList;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/documents/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientDocumentList.');
        }

        if (client !== null && client !== undefined) {
            queryParameters['client'] = <string><any>client;
        }
        if (description !== null && description !== undefined) {
            queryParameters['description'] = <string><any>description;
        }
        if (docType) {
            queryParameters['doc_type'] = [];
            docType.forEach((element: any) => {
                queryParameters['doc_type'].push(element);
            });
        }
        if (extraData !== null && extraData !== undefined) {
            queryParameters['extra_data'] = <string><any>extraData;
        }
        if (limit !== null && limit !== undefined) {
            queryParameters['limit'] = <string><any>limit;
        }
        if (name !== null && name !== undefined) {
            queryParameters['name'] = <string><any>name;
        }
        if (offset !== null && offset !== undefined) {
            queryParameters['offset'] = <string><any>offset;
        }

        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (cookieAuth) required
        // authentication (jwtAuth) required
        // http basic authentication required
        if (this.configuration.username || this.configuration.password) {
            headerParams['Authorization'] = 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password);
        }

        // authentication (tokenAuth) required
        if (this.configuration.apiKey) {
            headerParams['Authorization'] = this.configuration.apiKey;
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred<
            { response: JQueryXHR; body: models.PaginatedDocumentList;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.PaginatedDocumentList, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * Retrieve a client document
     * @param clientUuid 
     * @param uuid 
     */
    public clientDocumentRetrieve(clientUuid: string, uuid: string, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.Document;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/documents/{uuid}/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid))).replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientDocumentRetrieve.');
        }

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling clientDocumentRetrieve.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (cookieAuth) required
        // authentication (jwtAuth) required
        // http basic authentication required
        if (this.configuration.username || this.configuration.password) {
            headerParams['Authorization'] = 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password);
        }

        // authentication (tokenAuth) required
        if (this.configuration.apiKey) {
            headerParams['Authorization'] = this.configuration.apiKey;
        }


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred<
            { response: JQueryXHR; body: models.Document;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.Document, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

}
