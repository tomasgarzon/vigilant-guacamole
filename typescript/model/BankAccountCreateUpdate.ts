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

import * as models from './models';

export interface BankAccountCreateUpdate {
    uuid: string;

    account_number?: string;

    account_sort_code?: string;

    account_holder_name?: string;

    joint?: boolean;

    bank_name?: string;

    iban?: string;

    swift_code?: string;

}
