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
 *
 */

import ApiClient from '../ApiClient';
import AllocationByCode from './AllocationByCode';

/**
 * The AllocationByAsset model module.
 * @module model/AllocationByAsset
 * @version 4.175.0
 */
class AllocationByAsset {
    /**
     * Constructs a new <code>AllocationByAsset</code>.
     * @alias module:model/AllocationByAsset
     * @param categoryCode {String} 
     * @param displayAllocationChart {Boolean} 
     * @param displayAllocationChartConfigurationError {Boolean} 
     * @param allocationsByCode {Array.<module:model/AllocationByCode>} 
     */
    constructor(categoryCode, displayAllocationChart, displayAllocationChartConfigurationError, allocationsByCode) { 
        
        AllocationByAsset.initialize(this, categoryCode, displayAllocationChart, displayAllocationChartConfigurationError, allocationsByCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, categoryCode, displayAllocationChart, displayAllocationChartConfigurationError, allocationsByCode) { 
        obj['category_code'] = categoryCode;
        obj['display_allocation_chart'] = displayAllocationChart;
        obj['display_allocation_chart_configuration_error'] = displayAllocationChartConfigurationError;
        obj['allocations_by_code'] = allocationsByCode;
    }

    /**
     * Constructs a <code>AllocationByAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllocationByAsset} obj Optional instance to populate.
     * @return {module:model/AllocationByAsset} The populated <code>AllocationByAsset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllocationByAsset();

            if (data.hasOwnProperty('category_code')) {
                obj['category_code'] = ApiClient.convertToType(data['category_code'], 'String');
            }
            if (data.hasOwnProperty('display_allocation_chart')) {
                obj['display_allocation_chart'] = ApiClient.convertToType(data['display_allocation_chart'], 'Boolean');
            }
            if (data.hasOwnProperty('display_allocation_chart_configuration_error')) {
                obj['display_allocation_chart_configuration_error'] = ApiClient.convertToType(data['display_allocation_chart_configuration_error'], 'Boolean');
            }
            if (data.hasOwnProperty('allocations_by_code')) {
                obj['allocations_by_code'] = ApiClient.convertToType(data['allocations_by_code'], [AllocationByCode]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} category_code
 */
AllocationByAsset.prototype['category_code'] = undefined;

/**
 * @member {Boolean} display_allocation_chart
 */
AllocationByAsset.prototype['display_allocation_chart'] = undefined;

/**
 * @member {Boolean} display_allocation_chart_configuration_error
 */
AllocationByAsset.prototype['display_allocation_chart_configuration_error'] = undefined;

/**
 * @member {Array.<module:model/AllocationByCode>} allocations_by_code
 */
AllocationByAsset.prototype['allocations_by_code'] = undefined;






export default AllocationByAsset;

