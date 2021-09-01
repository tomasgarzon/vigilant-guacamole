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

export enum OrderListStatusEnum {
    Pending = <any> 'PENDING',
    WaitingForPrice = <any> 'WAITING_FOR_PRICE',
    Processing = <any> 'PROCESSING',
    Quoted = <any> 'QUOTED',
    Completed = <any> 'COMPLETED',
    Verified = <any> 'VERIFIED',
    Error = <any> 'ERROR',
    Cancelled = <any> 'CANCELLED'
}
