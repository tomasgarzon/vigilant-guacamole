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
 * The PortfolioCreate model module.
 * @module model/PortfolioCreate
 * @version 4.175.0
 */
class PortfolioCreate {
    /**
     * Constructs a new <code>PortfolioCreate</code>.
     * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
     * @alias module:model/PortfolioCreate
     * @param uuid {String} 
     * @param name {String} 
     * @param portfolioType {String} 
     * @param riskLevel {Number} 
     * @param timeHorizon {Number} 
     * @param status {module:model/Status2efEnum} 
     * @param created {Date} 
     * @param activated {Date} 
     * @param advisor {String} 
     * @param adviceEngine {String} 
     */
    constructor(uuid, name, portfolioType, riskLevel, timeHorizon, status, created, activated, advisor, adviceEngine) { 
        
        PortfolioCreate.initialize(this, uuid, name, portfolioType, riskLevel, timeHorizon, status, created, activated, advisor, adviceEngine);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, name, portfolioType, riskLevel, timeHorizon, status, created, activated, advisor, adviceEngine) { 
        obj['uuid'] = uuid;
        obj['name'] = name;
        obj['portfolio_type'] = portfolioType;
        obj['risk_level'] = riskLevel;
        obj['time_horizon'] = timeHorizon;
        obj['status'] = status;
        obj['created'] = created;
        obj['activated'] = activated;
        obj['advisor'] = advisor;
        obj['advice_engine'] = adviceEngine;
    }

    /**
     * Constructs a <code>PortfolioCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioCreate} obj Optional instance to populate.
     * @return {module:model/PortfolioCreate} The populated <code>PortfolioCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioCreate();

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
PortfolioCreate.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
PortfolioCreate.prototype['name'] = undefined;

/**
 * @member {String} portfolio_type
 */
PortfolioCreate.prototype['portfolio_type'] = undefined;

/**
 * @member {Number} risk_level
 */
PortfolioCreate.prototype['risk_level'] = undefined;

/**
 * @member {Number} time_horizon
 */
PortfolioCreate.prototype['time_horizon'] = undefined;

/**
 * @member {module:model/Status2efEnum} status
 */
PortfolioCreate.prototype['status'] = undefined;

/**
 * @member {String} currency
 */
PortfolioCreate.prototype['currency'] = undefined;

/**
 * @member {Date} created
 */
PortfolioCreate.prototype['created'] = undefined;

/**
 * @member {Date} activated
 */
PortfolioCreate.prototype['activated'] = undefined;

/**
 * @member {String} advisor
 */
PortfolioCreate.prototype['advisor'] = undefined;

/**
 * @member {String} advice_engine
 */
PortfolioCreate.prototype['advice_engine'] = undefined;

/**
 * @member {Object.<String, Object>} extra_data
 */
PortfolioCreate.prototype['extra_data'] = undefined;

/**
 * @member {String} client
 */
PortfolioCreate.prototype['client'] = undefined;






export default PortfolioCreate;

