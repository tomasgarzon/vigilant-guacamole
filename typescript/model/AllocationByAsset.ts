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

export interface AllocationByAsset {
    category_code: string;

    display_allocation_chart: boolean;

    display_allocation_chart_configuration_error: boolean;

    allocations_by_code: Array<models.AllocationByCode>;

}
