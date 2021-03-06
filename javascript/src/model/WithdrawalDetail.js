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
import Status14bEnum from './Status14bEnum';

/**
 * The WithdrawalDetail model module.
 * @module model/WithdrawalDetail
 * @version 4.175.0
 */
class WithdrawalDetail {
    /**
     * Constructs a new <code>WithdrawalDetail</code>.
     * @alias module:model/WithdrawalDetail
     * @param uuid {String} 
     * @param portfolio {String} 
     * @param amount {Number} 
     * @param provider {String} 
     * @param status {module:model/Status14bEnum} 
     * @param created {Date} 
     * @param withdrawalType {String} 
     */
    constructor(uuid, portfolio, amount, provider, status, created, withdrawalType) { 
        
        WithdrawalDetail.initialize(this, uuid, portfolio, amount, provider, status, created, withdrawalType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, portfolio, amount, provider, status, created, withdrawalType) { 
        obj['uuid'] = uuid;
        obj['portfolio'] = portfolio;
        obj['amount'] = amount;
        obj['provider'] = provider;
        obj['status'] = status;
        obj['created'] = created;
        obj['withdrawal_type'] = withdrawalType;
    }

    /**
     * Constructs a <code>WithdrawalDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WithdrawalDetail} obj Optional instance to populate.
     * @return {module:model/WithdrawalDetail} The populated <code>WithdrawalDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WithdrawalDetail();

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
            if (data.hasOwnProperty('status')) {
                obj['status'] = Status14bEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Date');
            }
            if (data.hasOwnProperty('purpose')) {
                obj['purpose'] = ApiClient.convertToType(data['purpose'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('withdrawal_type')) {
                obj['withdrawal_type'] = ApiClient.convertToType(data['withdrawal_type'], 'String');
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
WithdrawalDetail.prototype['uuid'] = undefined;

/**
 * @member {String} portfolio
 */
WithdrawalDetail.prototype['portfolio'] = undefined;

/**
 * @member {Number} amount
 */
WithdrawalDetail.prototype['amount'] = undefined;

/**
 * @member {String} provider
 */
WithdrawalDetail.prototype['provider'] = undefined;

/**
 * @member {module:model/Status14bEnum} status
 */
WithdrawalDetail.prototype['status'] = undefined;

/**
 * Cancelled reason
 * @member {String} reason
 */
WithdrawalDetail.prototype['reason'] = undefined;

/**
 * @member {Date} completed
 */
WithdrawalDetail.prototype['completed'] = undefined;

/**
 * Withdrawal reason
 * @member {String} purpose
 */
WithdrawalDetail.prototype['purpose'] = undefined;

/**
 * @member {Date} created
 */
WithdrawalDetail.prototype['created'] = undefined;

/**
 * @member {String} withdrawal_type
 */
WithdrawalDetail.prototype['withdrawal_type'] = undefined;

/**
 * Additional withdrawal attributes for the specific portal
 * @member {Object.<String, Object>} extra_data
 */
WithdrawalDetail.prototype['extra_data'] = undefined;






export default WithdrawalDetail;

