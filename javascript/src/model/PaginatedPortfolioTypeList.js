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
import PortfolioType from './PortfolioType';

/**
 * The PaginatedPortfolioTypeList model module.
 * @module model/PaginatedPortfolioTypeList
 * @version 4.175.0
 */
class PaginatedPortfolioTypeList {
    /**
     * Constructs a new <code>PaginatedPortfolioTypeList</code>.
     * @alias module:model/PaginatedPortfolioTypeList
     */
    constructor() { 
        
        PaginatedPortfolioTypeList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedPortfolioTypeList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedPortfolioTypeList} obj Optional instance to populate.
     * @return {module:model/PaginatedPortfolioTypeList} The populated <code>PaginatedPortfolioTypeList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedPortfolioTypeList();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [PortfolioType]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
PaginatedPortfolioTypeList.prototype['count'] = undefined;

/**
 * @member {String} next
 */
PaginatedPortfolioTypeList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedPortfolioTypeList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/PortfolioType>} results
 */
PaginatedPortfolioTypeList.prototype['results'] = undefined;






export default PaginatedPortfolioTypeList;
