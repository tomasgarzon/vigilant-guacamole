<?php
/**
 * StatusB6aEnum
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
 * StatusB6aEnum Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class StatusB6aEnum
{
    /**
     * Possible values of this enum
     */
    const PENDING = 'PENDING';
    const REQUESTED = 'REQUESTED';
    const PROCESSING = 'PROCESSING';
    const COMPLETED = 'COMPLETED';
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
            self::REQUESTED,
            self::PROCESSING,
            self::COMPLETED,
            self::ERROR,
            self::CANCELLED,
        ];
    }
}


