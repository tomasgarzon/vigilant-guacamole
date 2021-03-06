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


export class BankAccountApi {
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
     * Create a bank account for a client
     * @param clientUuid 
     * @param bankAccountCreateUpdate 
     */
    public clientBankAccountCreate(clientUuid: string, bankAccountCreateUpdate?: models.BankAccountCreateUpdate, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.BankAccountCreateUpdate;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/bank-accounts/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientBankAccountCreate.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'application/x-www-form-urlencoded', 
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


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(bankAccountCreateUpdate);
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
            { response: JQueryXHR; body: models.BankAccountCreateUpdate;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.BankAccountCreateUpdate, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * Delete a client bank account
     * @param clientUuid 
     * @param uuid 
     */
    public clientBankAccountDelete(clientUuid: string, uuid: string, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body?: any;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/bank-accounts/{uuid}/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid))).replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientBankAccountDelete.');
        }

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling clientBankAccountDelete.');
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
     * Partial Update a client bank account
     * @param clientUuid 
     * @param uuid 
     * @param patchedBankAccountCreateUpdate 
     */
    public clientBankAccountPartialUpdate(clientUuid: string, uuid: string, patchedBankAccountCreateUpdate?: models.PatchedBankAccountCreateUpdate, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.BankAccountCreateUpdate;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/bank-accounts/{uuid}/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid))).replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientBankAccountPartialUpdate.');
        }

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling clientBankAccountPartialUpdate.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'application/x-www-form-urlencoded', 
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


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'PATCH',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(patchedBankAccountCreateUpdate);
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
            { response: JQueryXHR; body: models.BankAccountCreateUpdate;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.BankAccountCreateUpdate, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * Retrieve a client bank account
     * @param clientUuid 
     * @param uuid 
     */
    public clientBankAccountRetrieve(clientUuid: string, uuid: string, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.BankAccountList;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/bank-accounts/{uuid}/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid))).replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientBankAccountRetrieve.');
        }

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling clientBankAccountRetrieve.');
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
            { response: JQueryXHR; body: models.BankAccountList;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.BankAccountList, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * Update a client bank account
     * @param clientUuid 
     * @param uuid 
     * @param bankAccountCreateUpdate 
     */
    public clientBankAccountUpdate(clientUuid: string, uuid: string, bankAccountCreateUpdate?: models.BankAccountCreateUpdate, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.BankAccountCreateUpdate;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/bank-accounts/{uuid}/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid))).replace('{' + 'uuid' + '}', encodeURIComponent(String(uuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientBankAccountUpdate.');
        }

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling clientBankAccountUpdate.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'application/x-www-form-urlencoded', 
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


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'PUT',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(bankAccountCreateUpdate);
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
            { response: JQueryXHR; body: models.BankAccountCreateUpdate;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.BankAccountCreateUpdate, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

    /**
     * List Bank Account for a client
     * @param clientUuid 
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     */
    public clientBankAccountsList(clientUuid: string, limit?: number, offset?: number, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: models.PaginatedBankAccountListList;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/api/v2/clients/{client_uuid}/bank-accounts/'.replace('{' + 'client_uuid' + '}', encodeURIComponent(String(clientUuid)));

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'clientUuid' is not null or undefined
        if (clientUuid === null || clientUuid === undefined) {
            throw new Error('Required parameter clientUuid was null or undefined when calling clientBankAccountsList.');
        }

        if (limit !== null && limit !== undefined) {
            queryParameters['limit'] = <string><any>limit;
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
            { response: JQueryXHR; body: models.PaginatedBankAccountListList;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: models.PaginatedBankAccountListList, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

}
