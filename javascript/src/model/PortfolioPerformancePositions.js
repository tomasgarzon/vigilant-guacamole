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
 * The PortfolioPerformancePositions model module.
 * @module model/PortfolioPerformancePositions
 * @version 4.175.0
 */
class PortfolioPerformancePositions {
    /**
     * Constructs a new <code>PortfolioPerformancePositions</code>.
     * @alias module:model/PortfolioPerformancePositions
     * @param valuationDatetime {Date} 
     * @param lastUpdate {Date} 
     * @param asset {String} 
     * @param shares {Number} 
     * @param price {Number} 
     * @param currency {String} 
     * @param value {Number} 
     * @param positionReturn {Number} 
     * @param unrealisedPl {Number} 
     * @param realisedPl {Number} 
     * @param earnings {Number} 
     * @param avgEntryPrice {Number} 
     * @param dailyPl {Number} 
     */
    constructor(valuationDatetime, lastUpdate, asset, shares, price, currency, value, positionReturn, unrealisedPl, realisedPl, earnings, avgEntryPrice, dailyPl) { 
        
        PortfolioPerformancePositions.initialize(this, valuationDatetime, lastUpdate, asset, shares, price, currency, value, positionReturn, unrealisedPl, realisedPl, earnings, avgEntryPrice, dailyPl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, valuationDatetime, lastUpdate, asset, shares, price, currency, value, positionReturn, unrealisedPl, realisedPl, earnings, avgEntryPrice, dailyPl) { 
        obj['valuation_datetime'] = valuationDatetime;
        obj['last_update'] = lastUpdate;
        obj['asset'] = asset;
        obj['shares'] = shares;
        obj['price'] = price;
        obj['currency'] = currency;
        obj['value'] = value;
        obj['position_return'] = positionReturn;
        obj['unrealised_pl'] = unrealisedPl;
        obj['realised_pl'] = realisedPl;
        obj['earnings'] = earnings;
        obj['avg_entry_price'] = avgEntryPrice;
        obj['daily_pl'] = dailyPl;
    }

    /**
     * Constructs a <code>PortfolioPerformancePositions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioPerformancePositions} obj Optional instance to populate.
     * @return {module:model/PortfolioPerformancePositions} The populated <code>PortfolioPerformancePositions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioPerformancePositions();

            if (data.hasOwnProperty('valuation_datetime')) {
                obj['valuation_datetime'] = ApiClient.convertToType(data['valuation_datetime'], 'Date');
            }
            if (data.hasOwnProperty('last_update')) {
                obj['last_update'] = ApiClient.convertToType(data['last_update'], 'Date');
            }
            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('shares')) {
                obj['shares'] = ApiClient.convertToType(data['shares'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('fx_rate_account')) {
                obj['fx_rate_account'] = ApiClient.convertToType(data['fx_rate_account'], 'Number');
            }
            if (data.hasOwnProperty('asset_currency_value')) {
                obj['asset_currency_value'] = ApiClient.convertToType(data['asset_currency_value'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('position_return')) {
                obj['position_return'] = ApiClient.convertToType(data['position_return'], 'Number');
            }
            if (data.hasOwnProperty('unrealised_pl')) {
                obj['unrealised_pl'] = ApiClient.convertToType(data['unrealised_pl'], 'Number');
            }
            if (data.hasOwnProperty('realised_pl')) {
                obj['realised_pl'] = ApiClient.convertToType(data['realised_pl'], 'Number');
            }
            if (data.hasOwnProperty('earnings')) {
                obj['earnings'] = ApiClient.convertToType(data['earnings'], 'Number');
            }
            if (data.hasOwnProperty('avg_entry_price')) {
                obj['avg_entry_price'] = ApiClient.convertToType(data['avg_entry_price'], 'Number');
            }
            if (data.hasOwnProperty('daily_pl')) {
                obj['daily_pl'] = ApiClient.convertToType(data['daily_pl'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} valuation_datetime
 */
PortfolioPerformancePositions.prototype['valuation_datetime'] = undefined;

/**
 * @member {Date} last_update
 */
PortfolioPerformancePositions.prototype['last_update'] = undefined;

/**
 * @member {String} asset
 */
PortfolioPerformancePositions.prototype['asset'] = undefined;

/**
 * @member {Number} shares
 */
PortfolioPerformancePositions.prototype['shares'] = undefined;

/**
 * @member {Number} price
 */
PortfolioPerformancePositions.prototype['price'] = undefined;

/**
 * @member {String} currency
 */
PortfolioPerformancePositions.prototype['currency'] = undefined;

/**
 * @member {Number} weight
 */
PortfolioPerformancePositions.prototype['weight'] = undefined;

/**
 * @member {Number} fx_rate_account
 */
PortfolioPerformancePositions.prototype['fx_rate_account'] = undefined;

/**
 * @member {Number} asset_currency_value
 */
PortfolioPerformancePositions.prototype['asset_currency_value'] = undefined;

/**
 * @member {Number} value
 */
PortfolioPerformancePositions.prototype['value'] = undefined;

/**
 * @member {Number} position_return
 */
PortfolioPerformancePositions.prototype['position_return'] = undefined;

/**
 * @member {Number} unrealised_pl
 */
PortfolioPerformancePositions.prototype['unrealised_pl'] = undefined;

/**
 * @member {Number} realised_pl
 */
PortfolioPerformancePositions.prototype['realised_pl'] = undefined;

/**
 * @member {Number} earnings
 */
PortfolioPerformancePositions.prototype['earnings'] = undefined;

/**
 * @member {Number} avg_entry_price
 */
PortfolioPerformancePositions.prototype['avg_entry_price'] = undefined;

/**
 * @member {Number} daily_pl
 */
PortfolioPerformancePositions.prototype['daily_pl'] = undefined;






export default PortfolioPerformancePositions;

