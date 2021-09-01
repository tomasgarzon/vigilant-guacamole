<?php
/**
 * OrderListStatusEnum
 *
 * PHP version 7.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Nucoro API
 *
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.3.0-SNAPSHOT
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;
use \OpenAPI\Client\ObjectSerializer;

/**
 * OrderListStatusEnum Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class OrderListStatusEnum
{
    /**
     * Possible values of this enum
     */
    const PENDING = 'PENDING';
    const WAITING_FOR_PRICE = 'WAITING_FOR_PRICE';
    const PROCESSING = 'PROCESSING';
    const QUOTED = 'QUOTED';
    const COMPLETED = 'COMPLETED';
    const VERIFIED = 'VERIFIED';
    const ERROR = 'ERROR';
    const CANCELLED = 'CANCELLED';
    
    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::PENDING,
            self::WAITING_FOR_PRICE,
            self::PROCESSING,
            self::QUOTED,
            self::COMPLETED,
            self::VERIFIED,
            self::ERROR,
            self::CANCELLED,
        ];
    }
}

