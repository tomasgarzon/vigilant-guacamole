<?php
/**
 * PortfolioUpdate
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
 * PortfolioUpdate Class Doc Comment
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
class PortfolioUpdate implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PortfolioUpdate';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'uuid' => 'string',
        'name' => 'string',
        'portfolio_type' => 'string',
        'risk_level' => 'int',
        'time_horizon' => 'int',
        'status' => 'Status2efEnum',
        'currency' => 'string',
        'created' => '\DateTime',
        'activated' => '\DateTime',
        'advisor' => 'string',
        'advice_engine' => 'string',
        'extra_data' => 'array<string,mixed>',
        'client' => 'string'
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
        'portfolio_type' => null,
        'risk_level' => null,
        'time_horizon' => null,
        'status' => null,
        'currency' => null,
        'created' => 'date-time',
        'activated' => 'date-time',
        'advisor' => null,
        'advice_engine' => null,
        'extra_data' => null,
        'client' => null
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
        'portfolio_type' => 'portfolio_type',
        'risk_level' => 'risk_level',
        'time_horizon' => 'time_horizon',
        'status' => 'status',
        'currency' => 'currency',
        'created' => 'created',
        'activated' => 'activated',
        'advisor' => 'advisor',
        'advice_engine' => 'advice_engine',
        'extra_data' => 'extra_data',
        'client' => 'client'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'uuid' => 'setUuid',
        'name' => 'setName',
        'portfolio_type' => 'setPortfolioType',
        'risk_level' => 'setRiskLevel',
        'time_horizon' => 'setTimeHorizon',
        'status' => 'setStatus',
        'currency' => 'setCurrency',
        'created' => 'setCreated',
        'activated' => 'setActivated',
        'advisor' => 'setAdvisor',
        'advice_engine' => 'setAdviceEngine',
        'extra_data' => 'setExtraData',
        'client' => 'setClient'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'uuid' => 'getUuid',
        'name' => 'getName',
        'portfolio_type' => 'getPortfolioType',
        'risk_level' => 'getRiskLevel',
        'time_horizon' => 'getTimeHorizon',
        'status' => 'getStatus',
        'currency' => 'getCurrency',
        'created' => 'getCreated',
        'activated' => 'getActivated',
        'advisor' => 'getAdvisor',
        'advice_engine' => 'getAdviceEngine',
        'extra_data' => 'getExtraData',
        'client' => 'getClient'
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
        $this->container['portfolio_type'] = $data['portfolio_type'] ?? null;
        $this->container['risk_level'] = $data['risk_level'] ?? null;
        $this->container['time_horizon'] = $data['time_horizon'] ?? null;
        $this->container['status'] = $data['status'] ?? null;
        $this->container['currency'] = $data['currency'] ?? null;
        $this->container['created'] = $data['created'] ?? null;
        $this->container['activated'] = $data['activated'] ?? null;
        $this->container['advisor'] = $data['advisor'] ?? null;
        $this->container['advice_engine'] = $data['advice_engine'] ?? null;
        $this->container['extra_data'] = $data['extra_data'] ?? null;
        $this->container['client'] = $data['client'] ?? null;
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
        if ((mb_strlen($this->container['name']) > 150)) {
            $invalidProperties[] = "invalid value for 'name', the character length must be smaller than or equal to 150.";
        }

        if ($this->container['portfolio_type'] === null) {
            $invalidProperties[] = "'portfolio_type' can't be null";
        }
        if (!is_null($this->container['risk_level']) && ($this->container['risk_level'] > 32767)) {
            $invalidProperties[] = "invalid value for 'risk_level', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['risk_level']) && ($this->container['risk_level'] < 0)) {
            $invalidProperties[] = "invalid value for 'risk_level', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['time_horizon']) && ($this->container['time_horizon'] > 32767)) {
            $invalidProperties[] = "invalid value for 'time_horizon', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['time_horizon']) && ($this->container['time_horizon'] < 0)) {
            $invalidProperties[] = "invalid value for 'time_horizon', must be bigger than or equal to 0.";
        }

        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
        }
        if ($this->container['created'] === null) {
            $invalidProperties[] = "'created' can't be null";
        }
        if ($this->container['activated'] === null) {
            $invalidProperties[] = "'activated' can't be null";
        }
        if ($this->container['advisor'] === null) {
            $invalidProperties[] = "'advisor' can't be null";
        }
        if ($this->container['advice_engine'] === null) {
            $invalidProperties[] = "'advice_engine' can't be null";
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
        if ((mb_strlen($name) > 150)) {
            throw new \InvalidArgumentException('invalid length for $name when calling PortfolioUpdate., must be smaller than or equal to 150.');
        }

        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets portfolio_type
     *
     * @return string
     */
    public function getPortfolioType()
    {
        return $this->container['portfolio_type'];
    }

    /**
     * Sets portfolio_type
     *
     * @param string $portfolio_type portfolio_type
     *
     * @return self
     */
    public function setPortfolioType($portfolio_type)
    {
        $this->container['portfolio_type'] = $portfolio_type;

        return $this;
    }

    /**
     * Gets risk_level
     *
     * @return int|null
     */
    public function getRiskLevel()
    {
        return $this->container['risk_level'];
    }

    /**
     * Sets risk_level
     *
     * @param int|null $risk_level risk_level
     *
     * @return self
     */
    public function setRiskLevel($risk_level)
    {

        if (!is_null($risk_level) && ($risk_level > 32767)) {
            throw new \InvalidArgumentException('invalid value for $risk_level when calling PortfolioUpdate., must be smaller than or equal to 32767.');
        }
        if (!is_null($risk_level) && ($risk_level < 0)) {
            throw new \InvalidArgumentException('invalid value for $risk_level when calling PortfolioUpdate., must be bigger than or equal to 0.');
        }

        $this->container['risk_level'] = $risk_level;

        return $this;
    }

    /**
     * Gets time_horizon
     *
     * @return int|null
     */
    public function getTimeHorizon()
    {
        return $this->container['time_horizon'];
    }

    /**
     * Sets time_horizon
     *
     * @param int|null $time_horizon time_horizon
     *
     * @return self
     */
    public function setTimeHorizon($time_horizon)
    {

        if (!is_null($time_horizon) && ($time_horizon > 32767)) {
            throw new \InvalidArgumentException('invalid value for $time_horizon when calling PortfolioUpdate., must be smaller than or equal to 32767.');
        }
        if (!is_null($time_horizon) && ($time_horizon < 0)) {
            throw new \InvalidArgumentException('invalid value for $time_horizon when calling PortfolioUpdate., must be bigger than or equal to 0.');
        }

        $this->container['time_horizon'] = $time_horizon;

        return $this;
    }

    /**
     * Gets status
     *
     * @return Status2efEnum
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param Status2efEnum $status status
     *
     * @return self
     */
    public function setStatus($status)
    {
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets currency
     *
     * @return string|null
     */
    public function getCurrency()
    {
        return $this->container['currency'];
    }

    /**
     * Sets currency
     *
     * @param string|null $currency currency
     *
     * @return self
     */
    public function setCurrency($currency)
    {
        $this->container['currency'] = $currency;

        return $this;
    }

    /**
     * Gets created
     *
     * @return \DateTime
     */
    public function getCreated()
    {
        return $this->container['created'];
    }

    /**
     * Sets created
     *
     * @param \DateTime $created created
     *
     * @return self
     */
    public function setCreated($created)
    {
        $this->container['created'] = $created;

        return $this;
    }

    /**
     * Gets activated
     *
     * @return \DateTime
     */
    public function getActivated()
    {
        return $this->container['activated'];
    }

    /**
     * Sets activated
     *
     * @param \DateTime $activated activated
     *
     * @return self
     */
    public function setActivated($activated)
    {
        $this->container['activated'] = $activated;

        return $this;
    }

    /**
     * Gets advisor
     *
     * @return string
     */
    public function getAdvisor()
    {
        return $this->container['advisor'];
    }

    /**
     * Sets advisor
     *
     * @param string $advisor advisor
     *
     * @return self
     */
    public function setAdvisor($advisor)
    {
        $this->container['advisor'] = $advisor;

        return $this;
    }

    /**
     * Gets advice_engine
     *
     * @return string
     */
    public function getAdviceEngine()
    {
        return $this->container['advice_engine'];
    }

    /**
     * Sets advice_engine
     *
     * @param string $advice_engine advice_engine
     *
     * @return self
     */
    public function setAdviceEngine($advice_engine)
    {
        $this->container['advice_engine'] = $advice_engine;

        return $this;
    }

    /**
     * Gets extra_data
     *
     * @return array<string,mixed>|null
     */
    public function getExtraData()
    {
        return $this->container['extra_data'];
    }

    /**
     * Sets extra_data
     *
     * @param array<string,mixed>|null $extra_data extra_data
     *
     * @return self
     */
    public function setExtraData($extra_data)
    {
        $this->container['extra_data'] = $extra_data;

        return $this;
    }

    /**
     * Gets client
     *
     * @return string|null
     */
    public function getClient()
    {
        return $this->container['client'];
    }

    /**
     * Sets client
     *
     * @param string|null $client client
     *
     * @return self
     */
    public function setClient($client)
    {
        $this->container['client'] = $client;

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


