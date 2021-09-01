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
 * The InvestorWithdrawalCreate model module.
 * @module model/InvestorWithdrawalCreate
 * @version 4.175.0
 */
class InvestorWithdrawalCreate {
    /**
     * Constructs a new <code>InvestorWithdrawalCreate</code>.
     * @alias module:model/InvestorWithdrawalCreate
     * @param uuid {String} 
     * @param amount {Number} 
     * @param provider {String} 
     * @param status {module:model/Status14bEnum} 
     * @param reason {String} Cancelled reason
     * @param completed {Date} 
     * @param withdrawalType {String} 
     */
    constructor(uuid, amount, provider, status, reason, completed, withdrawalType) { 
        
        InvestorWithdrawalCreate.initialize(this, uuid, amount, provider, status, reason, completed, withdrawalType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, amount, provider, status, reason, completed, withdrawalType) { 
        obj['uuid'] = uuid;
        obj['amount'] = amount;
        obj['provider'] = provider;
        obj['status'] = status;
        obj['reason'] = reason;
        obj['completed'] = completed;
        obj['withdrawal_type'] = withdrawalType;
    }

    /**
     * Constructs a <code>InvestorWithdrawalCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvestorWithdrawalCreate} obj Optional instance to populate.
     * @return {module:model/InvestorWithdrawalCreate} The populated <code>InvestorWithdrawalCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestorWithdrawalCreate();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], Status14bEnum);
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
InvestorWithdrawalCreate.prototype['uuid'] = undefined;

/**
 * @member {Number} amount
 */
InvestorWithdrawalCreate.prototype['amount'] = undefined;

/**
 * @member {String} provider
 */
InvestorWithdrawalCreate.prototype['provider'] = undefined;

/**
 * @member {module:model/Status14bEnum} status
 */
InvestorWithdrawalCreate.prototype['status'] = undefined;

/**
 * Cancelled reason
 * @member {String} reason
 */
InvestorWithdrawalCreate.prototype['reason'] = undefined;

/**
 * @member {Date} completed
 */
InvestorWithdrawalCreate.prototype['completed'] = undefined;

/**
 * Withdrawal reason
 * @member {String} purpose
 */
InvestorWithdrawalCreate.prototype['purpose'] = undefined;

/**
 * @member {String} withdrawal_type
 */
InvestorWithdrawalCreate.prototype['withdrawal_type'] = undefined;

/**
 * Additional withdrawal attributes for the specific portal
 * @member {Object.<String, Object>} extra_data
 */
InvestorWithdrawalCreate.prototype['extra_data'] = undefined;






export default InvestorWithdrawalCreate;
