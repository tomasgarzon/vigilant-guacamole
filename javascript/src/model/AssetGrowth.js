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
 * The AssetGrowth model module.
 * @module model/AssetGrowth
 * @version 4.175.0
 */
class AssetGrowth {
    /**
     * Constructs a new <code>AssetGrowth</code>.
     * @alias module:model/AssetGrowth
     * @param year {Number} 
     * @param amount {Number} 
     */
    constructor(year, amount) { 
        
        AssetGrowth.initialize(this, year, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, year, amount) { 
        obj['year'] = year;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>AssetGrowth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetGrowth} obj Optional instance to populate.
     * @return {module:model/AssetGrowth} The populated <code>AssetGrowth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetGrowth();

            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} year
 */
AssetGrowth.prototype['year'] = undefined;

/**
 * @member {Number} amount
 */
AssetGrowth.prototype['amount'] = undefined;






export default AssetGrowth;

