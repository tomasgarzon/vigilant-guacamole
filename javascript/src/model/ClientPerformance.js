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

/**
 * The ClientPerformance model module.
 * @module model/ClientPerformance
 * @version 4.175.0
 */
class ClientPerformance {
    /**
     * Constructs a new <code>ClientPerformance</code>.
     * @alias module:model/ClientPerformance
     * @param valuationDate {Date} 
     * @param performance {Number} 
     */
    constructor(valuationDate, performance) { 
        
        ClientPerformance.initialize(this, valuationDate, performance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, valuationDate, performance) { 
        obj['valuation_date'] = valuationDate;
        obj['performance'] = performance;
    }

    /**
     * Constructs a <code>ClientPerformance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientPerformance} obj Optional instance to populate.
     * @return {module:model/ClientPerformance} The populated <code>ClientPerformance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientPerformance();

            if (data.hasOwnProperty('valuation_date')) {
                obj['valuation_date'] = ApiClient.convertToType(data['valuation_date'], 'Date');
            }
            if (data.hasOwnProperty('performance')) {
                obj['performance'] = ApiClient.convertToType(data['performance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} valuation_date
 */
ClientPerformance.prototype['valuation_date'] = undefined;

/**
 * @member {Number} performance
 */
ClientPerformance.prototype['performance'] = undefined;






export default ClientPerformance;

