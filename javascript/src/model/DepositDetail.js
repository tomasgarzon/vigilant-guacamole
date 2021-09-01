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
import DepositTypeEnum from './DepositTypeEnum';
import StatusB6aEnum from './StatusB6aEnum';

/**
 * The DepositDetail model module.
 * @module model/DepositDetail
 * @version 4.175.0
 */
class DepositDetail {
    /**
     * Constructs a new <code>DepositDetail</code>.
     * @alias module:model/DepositDetail
     * @param uuid {String} 
     * @param portfolio {String} 
     * @param amount {Number} 
     * @param provider {String} 
     * @param reference {String} 
     */
    constructor(uuid, portfolio, amount, provider, reference) { 
        
        DepositDetail.initialize(this, uuid, portfolio, amount, provider, reference);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, portfolio, amount, provider, reference) { 
        obj['uuid'] = uuid;
        obj['portfolio'] = portfolio;
        obj['amount'] = amount;
        obj['provider'] = provider;
        obj['reference'] = reference;
    }

    /**
     * Constructs a <code>DepositDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DepositDetail} obj Optional instance to populate.
     * @return {module:model/DepositDetail} The populated <code>DepositDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DepositDetail();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('portfolio')) {
                obj['portfolio'] = ApiClient.convertToType(data['portfolio'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = StatusB6aEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Date');
            }
            if (data.hasOwnProperty('deposit_type')) {
                obj['deposit_type'] = DepositTypeEnum.constructFromObject(data['deposit_type']);
            }
            if (data.hasOwnProperty('transacted_at')) {
                obj['transacted_at'] = ApiClient.convertToType(data['transacted_at'], 'Date');
            }
            if (data.hasOwnProperty('extra_data')) {
                obj['extra_data'] = ApiClient.convertToType(data['extra_data'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
DepositDetail.prototype['uuid'] = undefined;

/**
 * @member {String} portfolio
 */
DepositDetail.prototype['portfolio'] = undefined;

/**
 * @member {Number} amount
 */
DepositDetail.prototype['amount'] = undefined;

/**
 * @member {String} provider
 */
DepositDetail.prototype['provider'] = undefined;

/**
 * @member {String} reference
 */
DepositDetail.prototype['reference'] = undefined;

/**
 * @member {module:model/StatusB6aEnum} status
 */
DepositDetail.prototype['status'] = undefined;

/**
 * Cancelled reason
 * @member {String} reason
 */
DepositDetail.prototype['reason'] = undefined;

/**
 * @member {Date} completed
 */
DepositDetail.prototype['completed'] = undefined;

/**
 * @member {module:model/DepositTypeEnum} deposit_type
 */
DepositDetail.prototype['deposit_type'] = undefined;

/**
 * @member {Date} transacted_at
 */
DepositDetail.prototype['transacted_at'] = undefined;

/**
 * Additional deposit attributes for the specific portal
 * @member {Object.<String, Object>} extra_data
 */
DepositDetail.prototype['extra_data'] = undefined;






export default DepositDetail;

