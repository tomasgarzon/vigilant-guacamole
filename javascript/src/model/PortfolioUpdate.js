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
import Status2efEnum from './Status2efEnum';

/**
 * The PortfolioUpdate model module.
 * @module model/PortfolioUpdate
 * @version 4.175.0
 */
class PortfolioUpdate {
    /**
     * Constructs a new <code>PortfolioUpdate</code>.
     * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
     * @alias module:model/PortfolioUpdate
     * @param uuid {String} 
     * @param name {String} 
     * @param portfolioType {String} 
     * @param status {module:model/Status2efEnum} 
     * @param created {Date} 
     * @param activated {Date} 
     * @param advisor {String} 
     * @param adviceEngine {String} 
     */
    constructor(uuid, name, portfolioType, status, created, activated, advisor, adviceEngine) { 
        
        PortfolioUpdate.initialize(this, uuid, name, portfolioType, status, created, activated, advisor, adviceEngine);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, name, portfolioType, status, created, activated, advisor, adviceEngine) { 
        obj['uuid'] = uuid;
        obj['name'] = name;
        obj['portfolio_type'] = portfolioType;
        obj['status'] = status;
        obj['created'] = created;
        obj['activated'] = activated;
        obj['advisor'] = advisor;
        obj['advice_engine'] = adviceEngine;
    }

    /**
     * Constructs a <code>PortfolioUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioUpdate} obj Optional instance to populate.
     * @return {module:model/PortfolioUpdate} The populated <code>PortfolioUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioUpdate();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('portfolio_type')) {
                obj['portfolio_type'] = ApiClient.convertToType(data['portfolio_type'], 'String');
            }
            if (data.hasOwnProperty('risk_level')) {
                obj['risk_level'] = ApiClient.convertToType(data['risk_level'], 'Number');
            }
            if (data.hasOwnProperty('time_horizon')) {
                obj['time_horizon'] = ApiClient.convertToType(data['time_horizon'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], Status2efEnum);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('activated')) {
                obj['activated'] = ApiClient.convertToType(data['activated'], 'Date');
            }
            if (data.hasOwnProperty('advisor')) {
                obj['advisor'] = ApiClient.convertToType(data['advisor'], 'String');
            }
            if (data.hasOwnProperty('advice_engine')) {
                obj['advice_engine'] = ApiClient.convertToType(data['advice_engine'], 'String');
            }
            if (data.hasOwnProperty('extra_data')) {
                obj['extra_data'] = ApiClient.convertToType(data['extra_data'], {'String': Object});
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
PortfolioUpdate.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
PortfolioUpdate.prototype['name'] = undefined;

/**
 * @member {String} portfolio_type
 */
PortfolioUpdate.prototype['portfolio_type'] = undefined;

/**
 * @member {Number} risk_level
 */
PortfolioUpdate.prototype['risk_level'] = undefined;

/**
 * @member {Number} time_horizon
 */
PortfolioUpdate.prototype['time_horizon'] = undefined;

/**
 * @member {module:model/Status2efEnum} status
 */
PortfolioUpdate.prototype['status'] = undefined;

/**
 * @member {String} currency
 */
PortfolioUpdate.prototype['currency'] = undefined;

/**
 * @member {Date} created
 */
PortfolioUpdate.prototype['created'] = undefined;

/**
 * @member {Date} activated
 */
PortfolioUpdate.prototype['activated'] = undefined;

/**
 * @member {String} advisor
 */
PortfolioUpdate.prototype['advisor'] = undefined;

/**
 * @member {String} advice_engine
 */
PortfolioUpdate.prototype['advice_engine'] = undefined;

/**
 * @member {Object.<String, Object>} extra_data
 */
PortfolioUpdate.prototype['extra_data'] = undefined;

/**
 * @member {String} client
 */
PortfolioUpdate.prototype['client'] = undefined;






export default PortfolioUpdate;
