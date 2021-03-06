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
export interface AccessLog {
    uuid: string;

    created: string;

    user_agent: string;

    ip_address: string;

    browser: string;

    browser_version: string;

    device_brand: string;

    device_model: string;

    os: string;

    os_version: string;

    channel: models.models.ChannelEnum;

    country: string;

    city: string;

}
