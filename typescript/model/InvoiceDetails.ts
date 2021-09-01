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

/**
 * A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 */
export interface InvoiceDetails {
    uuid: string;

    /**
     * Invoice legal number
     */
    number?: string;

    status?: models.Status260Enum;

    created: string;

    /**
     * Beginning of charge period
     */
    date_from?: string;

    /**
     * End of charge period
     */
    date_to?: string;

    url: string;

    amount: number;

    charges: Array<string>;

}
