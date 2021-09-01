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
import PortfolioList from './PortfolioList';

/**
 * The PaginatedPortfolioListList model module.
 * @module model/PaginatedPortfolioListList
 * @version 4.175.0
 */
class PaginatedPortfolioListList {
    /**
     * Constructs a new <code>PaginatedPortfolioListList</code>.
     * @alias module:model/PaginatedPortfolioListList
     */
    constructor() { 
        
        PaginatedPortfolioListList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedPortfolioListList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedPortfolioListList} obj Optional instance to populate.
     * @return {module:model/PaginatedPortfolioListList} The populated <code>PaginatedPortfolioListList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedPortfolioListList();

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
                obj['results'] = ApiClient.convertToType(data['results'], [PortfolioList]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
PaginatedPortfolioListList.prototype['count'] = undefined;

/**
 * @member {String} next
 */
PaginatedPortfolioListList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedPortfolioListList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/PortfolioList>} results
 */
PaginatedPortfolioListList.prototype['results'] = undefined;






export default PaginatedPortfolioListList;

