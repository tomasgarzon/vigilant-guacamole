<?php
/**
 * ModelPortfolioForecastRequest
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
 * ModelPortfolioForecastRequest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class ModelPortfolioForecastRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ModelPortfolioForecastRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'time_horizon' => 'int',
        'initial_amount' => 'double',
        'recurring_amount' => 'double',
        'recurring_period' => 'int',
        'model_portfolio' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'time_horizon' => null,
        'initial_amount' => 'double',
        'recurring_amount' => 'double',
        'recurring_period' => null,
        'model_portfolio' => null
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
        'time_horizon' => 'time_horizon',
        'initial_amount' => 'initial_amount',
        'recurring_amount' => 'recurring_amount',
        'recurring_period' => 'recurring_period',
        'model_portfolio' => 'model_portfolio'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'time_horizon' => 'setTimeHorizon',
        'initial_amount' => 'setInitialAmount',
        'recurring_amount' => 'setRecurringAmount',
        'recurring_period' => 'setRecurringPeriod',
        'model_portfolio' => 'setModelPortfolio'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'time_horizon' => 'getTimeHorizon',
        'initial_amount' => 'getInitialAmount',
        'recurring_amount' => 'getRecurringAmount',
        'recurring_period' => 'getRecurringPeriod',
        'model_portfolio' => 'getModelPortfolio'
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
        $this->container['time_horizon'] = $data['time_horizon'] ?? null;
        $this->container['initial_amount'] = $data['initial_amount'] ?? null;
        $this->container['recurring_amount'] = $data['recurring_amount'] ?? null;
        $this->container['recurring_period'] = $data['recurring_period'] ?? null;
        $this->container['model_portfolio'] = $data['model_portfolio'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['time_horizon'] === null) {
            $invalidProperties[] = "'time_horizon' can't be null";
        }
        if (($this->container['time_horizon'] > 50)) {
            $invalidProperties[] = "invalid value for 'time_horizon', must be smaller than or equal to 50.";
        }

        if (($this->container['time_horizon'] < 1)) {
            $invalidProperties[] = "invalid value for 'time_horizon', must be bigger than or equal to 1.";
        }

        if ($this->container['initial_amount'] === null) {
            $invalidProperties[] = "'initial_amount' can't be null";
        }
        if (($this->container['initial_amount'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'initial_amount', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['initial_amount'] < 1)) {
            $invalidProperties[] = "invalid value for 'initial_amount', must be bigger than or equal to 1.";
        }

        if (!is_null($this->container['recurring_amount']) && ($this->container['recurring_amount'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'recurring_amount', must be smaller than or equal to 1000000000000.";
        }

        if (!is_null($this->container['recurring_amount']) && ($this->container['recurring_amount'] < 0)) {
            $invalidProperties[] = "invalid value for 'recurring_amount', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['recurring_period']) && ($this->container['recurring_period'] > 12)) {
            $invalidProperties[] = "invalid value for 'recurring_period', must be smaller than or equal to 12.";
        }

        if (!is_null($this->container['recurring_period']) && ($this->container['recurring_period'] < 0)) {
            $invalidProperties[] = "invalid value for 'recurring_period', must be bigger than or equal to 0.";
        }

        if ($this->container['model_portfolio'] === null) {
            $invalidProperties[] = "'model_portfolio' can't be null";
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
     * Gets time_horizon
     *
     * @return int
     */
    public function getTimeHorizon()
    {
        return $this->container['time_horizon'];
    }

    /**
     * Sets time_horizon
     *
     * @param int $time_horizon time_horizon
     *
     * @return self
     */
    public function setTimeHorizon($time_horizon)
    {

        if (($time_horizon > 50)) {
            throw new \InvalidArgumentException('invalid value for $time_horizon when calling ModelPortfolioForecastRequest., must be smaller than or equal to 50.');
        }
        if (($time_horizon < 1)) {
            throw new \InvalidArgumentException('invalid value for $time_horizon when calling ModelPortfolioForecastRequest., must be bigger than or equal to 1.');
        }

        $this->container['time_horizon'] = $time_horizon;

        return $this;
    }

    /**
     * Gets initial_amount
     *
     * @return double
     */
    public function getInitialAmount()
    {
        return $this->container['initial_amount'];
    }

    /**
     * Sets initial_amount
     *
     * @param double $initial_amount initial_amount
     *
     * @return self
     */
    public function setInitialAmount($initial_amount)
    {

        if (($initial_amount > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $initial_amount when calling ModelPortfolioForecastRequest., must be smaller than or equal to 1000000000000.');
        }
        if (($initial_amount < 1)) {
            throw new \InvalidArgumentException('invalid value for $initial_amount when calling ModelPortfolioForecastRequest., must be bigger than or equal to 1.');
        }

        $this->container['initial_amount'] = $initial_amount;

        return $this;
    }

    /**
     * Gets recurring_amount
     *
     * @return double|null
     */
    public function getRecurringAmount()
    {
        return $this->container['recurring_amount'];
    }

    /**
     * Sets recurring_amount
     *
     * @param double|null $recurring_amount recurring_amount
     *
     * @return self
     */
    public function setRecurringAmount($recurring_amount)
    {

        if (!is_null($recurring_amount) && ($recurring_amount > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $recurring_amount when calling ModelPortfolioForecastRequest., must be smaller than or equal to 1000000000000.');
        }
        if (!is_null($recurring_amount) && ($recurring_amount < 0)) {
            throw new \InvalidArgumentException('invalid value for $recurring_amount when calling ModelPortfolioForecastRequest., must be bigger than or equal to 0.');
        }

        $this->container['recurring_amount'] = $recurring_amount;

        return $this;
    }

    /**
     * Gets recurring_period
     *
     * @return int|null
     */
    public function getRecurringPeriod()
    {
        return $this->container['recurring_period'];
    }

    /**
     * Sets recurring_period
     *
     * @param int|null $recurring_period recurring_period
     *
     * @return self
     */
    public function setRecurringPeriod($recurring_period)
    {

        if (!is_null($recurring_period) && ($recurring_period > 12)) {
            throw new \InvalidArgumentException('invalid value for $recurring_period when calling ModelPortfolioForecastRequest., must be smaller than or equal to 12.');
        }
        if (!is_null($recurring_period) && ($recurring_period < 0)) {
            throw new \InvalidArgumentException('invalid value for $recurring_period when calling ModelPortfolioForecastRequest., must be bigger than or equal to 0.');
        }

        $this->container['recurring_period'] = $recurring_period;

        return $this;
    }

    /**
     * Gets model_portfolio
     *
     * @return string
     */
    public function getModelPortfolio()
    {
        return $this->container['model_portfolio'];
    }

    /**
     * Sets model_portfolio
     *
     * @param string $model_portfolio model_portfolio
     *
     * @return self
     */
    public function setModelPortfolio($model_portfolio)
    {
        $this->container['model_portfolio'] = $model_portfolio;

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

