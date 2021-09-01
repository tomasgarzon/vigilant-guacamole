<?php
/**
 * CreateOrder
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
 * CreateOrder Class Doc Comment
 *
 * @category Class
 * @description A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class CreateOrder implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'CreateOrder';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'shares' => 'int',
        'asset' => '\OpenAPI\Client\Model\RelatedAssetSerializerWithAssetCategories',
        'portfolio' => 'string',
        'order_type' => '\OpenAPI\Client\Model\OrderTypeEnum',
        'method' => '\OpenAPI\Client\Model\CreateOrderMethodEnum',
        'limit_price' => 'double',
        'stop_price' => 'double',
        'duration' => 'OneOfDurationEnumNullEnum'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'shares' => null,
        'asset' => null,
        'portfolio' => null,
        'order_type' => null,
        'method' => null,
        'limit_price' => 'double',
        'stop_price' => 'double',
        'duration' => null
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
        'shares' => 'shares',
        'asset' => 'asset',
        'portfolio' => 'portfolio',
        'order_type' => 'order_type',
        'method' => 'method',
        'limit_price' => 'limit_price',
        'stop_price' => 'stop_price',
        'duration' => 'duration'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'shares' => 'setShares',
        'asset' => 'setAsset',
        'portfolio' => 'setPortfolio',
        'order_type' => 'setOrderType',
        'method' => 'setMethod',
        'limit_price' => 'setLimitPrice',
        'stop_price' => 'setStopPrice',
        'duration' => 'setDuration'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'shares' => 'getShares',
        'asset' => 'getAsset',
        'portfolio' => 'getPortfolio',
        'order_type' => 'getOrderType',
        'method' => 'getMethod',
        'limit_price' => 'getLimitPrice',
        'stop_price' => 'getStopPrice',
        'duration' => 'getDuration'
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
        $this->container['shares'] = $data['shares'] ?? null;
        $this->container['asset'] = $data['asset'] ?? null;
        $this->container['portfolio'] = $data['portfolio'] ?? null;
        $this->container['order_type'] = $data['order_type'] ?? null;
        $this->container['method'] = $data['method'] ?? null;
        $this->container['limit_price'] = $data['limit_price'] ?? null;
        $this->container['stop_price'] = $data['stop_price'] ?? null;
        $this->container['duration'] = $data['duration'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['shares'] === null) {
            $invalidProperties[] = "'shares' can't be null";
        }
        if (($this->container['shares'] < 1)) {
            $invalidProperties[] = "invalid value for 'shares', must be bigger than or equal to 1.";
        }

        if ($this->container['asset'] === null) {
            $invalidProperties[] = "'asset' can't be null";
        }
        if ($this->container['order_type'] === null) {
            $invalidProperties[] = "'order_type' can't be null";
        }
        if ($this->container['method'] === null) {
            $invalidProperties[] = "'method' can't be null";
        }
        if (!is_null($this->container['limit_price']) && ($this->container['limit_price'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'limit_price', must be smaller than or equal to 1000000000000.";
        }

        if (!is_null($this->container['limit_price']) && ($this->container['limit_price'] < 0.01)) {
            $invalidProperties[] = "invalid value for 'limit_price', must be bigger than or equal to 0.01.";
        }

        if (!is_null($this->container['stop_price']) && ($this->container['stop_price'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'stop_price', must be smaller than or equal to 1000000000000.";
        }

        if (!is_null($this->container['stop_price']) && ($this->container['stop_price'] < 0.01)) {
            $invalidProperties[] = "invalid value for 'stop_price', must be bigger than or equal to 0.01.";
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
     * Gets shares
     *
     * @return int
     */
    public function getShares()
    {
        return $this->container['shares'];
    }

    /**
     * Sets shares
     *
     * @param int $shares shares
     *
     * @return self
     */
    public function setShares($shares)
    {

        if (($shares < 1)) {
            throw new \InvalidArgumentException('invalid value for $shares when calling CreateOrder., must be bigger than or equal to 1.');
        }

        $this->container['shares'] = $shares;

        return $this;
    }

    /**
     * Gets asset
     *
     * @return \OpenAPI\Client\Model\RelatedAssetSerializerWithAssetCategories
     */
    public function getAsset()
    {
        return $this->container['asset'];
    }

    /**
     * Sets asset
     *
     * @param \OpenAPI\Client\Model\RelatedAssetSerializerWithAssetCategories $asset asset
     *
     * @return self
     */
    public function setAsset($asset)
    {
        $this->container['asset'] = $asset;

        return $this;
    }

    /**
     * Gets portfolio
     *
     * @return string|null
     */
    public function getPortfolio()
    {
        return $this->container['portfolio'];
    }

    /**
     * Sets portfolio
     *
     * @param string|null $portfolio portfolio
     *
     * @return self
     */
    public function setPortfolio($portfolio)
    {
        $this->container['portfolio'] = $portfolio;

        return $this;
    }

    /**
     * Gets order_type
     *
     * @return \OpenAPI\Client\Model\OrderTypeEnum
     */
    public function getOrderType()
    {
        return $this->container['order_type'];
    }

    /**
     * Sets order_type
     *
     * @param \OpenAPI\Client\Model\OrderTypeEnum $order_type order_type
     *
     * @return self
     */
    public function setOrderType($order_type)
    {
        $this->container['order_type'] = $order_type;

        return $this;
    }

    /**
     * Gets method
     *
     * @return \OpenAPI\Client\Model\CreateOrderMethodEnum
     */
    public function getMethod()
    {
        return $this->container['method'];
    }

    /**
     * Sets method
     *
     * @param \OpenAPI\Client\Model\CreateOrderMethodEnum $method method
     *
     * @return self
     */
    public function setMethod($method)
    {
        $this->container['method'] = $method;

        return $this;
    }

    /**
     * Gets limit_price
     *
     * @return double|null
     */
    public function getLimitPrice()
    {
        return $this->container['limit_price'];
    }

    /**
     * Sets limit_price
     *
     * @param double|null $limit_price limit_price
     *
     * @return self
     */
    public function setLimitPrice($limit_price)
    {

        if (!is_null($limit_price) && ($limit_price > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $limit_price when calling CreateOrder., must be smaller than or equal to 1000000000000.');
        }
        if (!is_null($limit_price) && ($limit_price < 0.01)) {
            throw new \InvalidArgumentException('invalid value for $limit_price when calling CreateOrder., must be bigger than or equal to 0.01.');
        }

        $this->container['limit_price'] = $limit_price;

        return $this;
    }

    /**
     * Gets stop_price
     *
     * @return double|null
     */
    public function getStopPrice()
    {
        return $this->container['stop_price'];
    }

    /**
     * Sets stop_price
     *
     * @param double|null $stop_price stop_price
     *
     * @return self
     */
    public function setStopPrice($stop_price)
    {

        if (!is_null($stop_price) && ($stop_price > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $stop_price when calling CreateOrder., must be smaller than or equal to 1000000000000.');
        }
        if (!is_null($stop_price) && ($stop_price < 0.01)) {
            throw new \InvalidArgumentException('invalid value for $stop_price when calling CreateOrder., must be bigger than or equal to 0.01.');
        }

        $this->container['stop_price'] = $stop_price;

        return $this;
    }

    /**
     * Gets duration
     *
     * @return OneOfDurationEnumNullEnum|null
     */
    public function getDuration()
    {
        return $this->container['duration'];
    }

    /**
     * Sets duration
     *
     * @param OneOfDurationEnumNullEnum|null $duration duration
     *
     * @return self
     */
    public function setDuration($duration)
    {
        $this->container['duration'] = $duration;

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

