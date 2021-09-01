<?php
/**
 * InvestorModelPortfolio
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

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * InvestorModelPortfolio Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class InvestorModelPortfolio implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'InvestorModelPortfolio';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'uuid' => 'string',
        'name' => 'string',
        'cash_weight' => 'double',
        'risk_level' => 'int',
        'allocation' => '\OpenAPI\Client\Model\AssetModelPortfolio[]',
        'extra_data' => 'array<string,mixed>'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'uuid' => 'uuid',
        'name' => null,
        'cash_weight' => 'double',
        'risk_level' => null,
        'allocation' => null,
        'extra_data' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'uuid' => 'uuid',
        'name' => 'name',
        'cash_weight' => 'cash_weight',
        'risk_level' => 'risk_level',
        'allocation' => 'allocation',
        'extra_data' => 'extra_data'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'uuid' => 'setUuid',
        'name' => 'setName',
        'cash_weight' => 'setCashWeight',
        'risk_level' => 'setRiskLevel',
        'allocation' => 'setAllocation',
        'extra_data' => 'setExtraData'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'uuid' => 'getUuid',
        'name' => 'getName',
        'cash_weight' => 'getCashWeight',
        'risk_level' => 'getRiskLevel',
        'allocation' => 'getAllocation',
        'extra_data' => 'getExtraData'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['uuid'] = $data['uuid'] ?? null;
        $this->container['name'] = $data['name'] ?? null;
        $this->container['cash_weight'] = $data['cash_weight'] ?? null;
        $this->container['risk_level'] = $data['risk_level'] ?? null;
        $this->container['allocation'] = $data['allocation'] ?? null;
        $this->container['extra_data'] = $data['extra_data'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['uuid'] === null) {
            $invalidProperties[] = "'uuid' can't be null";
        }
        if ($this->container['name'] === null) {
            $invalidProperties[] = "'name' can't be null";
        }
        if ($this->container['cash_weight'] === null) {
            $invalidProperties[] = "'cash_weight' can't be null";
        }
        if (($this->container['cash_weight'] > 10)) {
            $invalidProperties[] = "invalid value for 'cash_weight', must be smaller than or equal to 10.";
        }

        if (($this->container['cash_weight'] < -10)) {
            $invalidProperties[] = "invalid value for 'cash_weight', must be bigger than or equal to -10.";
        }

        if ($this->container['risk_level'] === null) {
            $invalidProperties[] = "'risk_level' can't be null";
        }
        if ($this->container['allocation'] === null) {
            $invalidProperties[] = "'allocation' can't be null";
        }
        if ($this->container['extra_data'] === null) {
            $invalidProperties[] = "'extra_data' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets uuid
     *
     * @return string
     */
    public function getUuid()
    {
        return $this->container['uuid'];
    }

    /**
     * Sets uuid
     *
     * @param string $uuid uuid
     *
     * @return self
     */
    public function setUuid($uuid)
    {
        $this->container['uuid'] = $uuid;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name name
     *
     * @return self
     */
    public function setName($name)
    {
        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets cash_weight
     *
     * @return double
     */
    public function getCashWeight()
    {
        return $this->container['cash_weight'];
    }

    /**
     * Sets cash_weight
     *
     * @param double $cash_weight Percentage on the interval 0-1.
     *
     * @return self
     */
    public function setCashWeight($cash_weight)
    {

        if (($cash_weight > 10)) {
            throw new \InvalidArgumentException('invalid value for $cash_weight when calling InvestorModelPortfolio., must be smaller than or equal to 10.');
        }
        if (($cash_weight < -10)) {
            throw new \InvalidArgumentException('invalid value for $cash_weight when calling InvestorModelPortfolio., must be bigger than or equal to -10.');
        }

        $this->container['cash_weight'] = $cash_weight;

        return $this;
    }

    /**
     * Gets risk_level
     *
     * @return int
     */
    public function getRiskLevel()
    {
        return $this->container['risk_level'];
    }

    /**
     * Sets risk_level
     *
     * @param int $risk_level risk_level
     *
     * @return self
     */
    public function setRiskLevel($risk_level)
    {
        $this->container['risk_level'] = $risk_level;

        return $this;
    }

    /**
     * Gets allocation
     *
     * @return \OpenAPI\Client\Model\AssetModelPortfolio[]
     */
    public function getAllocation()
    {
        return $this->container['allocation'];
    }

    /**
     * Sets allocation
     *
     * @param \OpenAPI\Client\Model\AssetModelPortfolio[] $allocation allocation
     *
     * @return self
     */
    public function setAllocation($allocation)
    {
        $this->container['allocation'] = $allocation;

        return $this;
    }

    /**
     * Gets extra_data
     *
     * @return array<string,mixed>
     */
    public function getExtraData()
    {
        return $this->container['extra_data'];
    }

    /**
     * Sets extra_data
     *
     * @param array<string,mixed> $extra_data Additional ModelPortfolio attributes
     *
     * @return self
     */
    public function setExtraData($extra_data)
    {
        $this->container['extra_data'] = $extra_data;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


