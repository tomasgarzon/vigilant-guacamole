<?php
/**
 * PortfolioList
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
 * PortfolioList Class Doc Comment
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
class PortfolioList implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PortfolioList';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'uuid' => 'string',
        'client' => 'string',
        'name' => 'string',
        'portfolio_type' => 'string',
        'risk_level' => 'int',
        'time_horizon' => 'int',
        'status' => 'Status2efEnum',
        'balance' => 'double',
        'invested' => 'double',
        'currency' => 'string',
        'created' => '\DateTime',
        'advisor' => 'string',
        'advice_engine' => 'string'
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
        'client' => null,
        'name' => null,
        'portfolio_type' => null,
        'risk_level' => null,
        'time_horizon' => null,
        'status' => null,
        'balance' => 'double',
        'invested' => 'double',
        'currency' => null,
        'created' => 'date-time',
        'advisor' => null,
        'advice_engine' => null
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
        'client' => 'client',
        'name' => 'name',
        'portfolio_type' => 'portfolio_type',
        'risk_level' => 'risk_level',
        'time_horizon' => 'time_horizon',
        'status' => 'status',
        'balance' => 'balance',
        'invested' => 'invested',
        'currency' => 'currency',
        'created' => 'created',
        'advisor' => 'advisor',
        'advice_engine' => 'advice_engine'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'uuid' => 'setUuid',
        'client' => 'setClient',
        'name' => 'setName',
        'portfolio_type' => 'setPortfolioType',
        'risk_level' => 'setRiskLevel',
        'time_horizon' => 'setTimeHorizon',
        'status' => 'setStatus',
        'balance' => 'setBalance',
        'invested' => 'setInvested',
        'currency' => 'setCurrency',
        'created' => 'setCreated',
        'advisor' => 'setAdvisor',
        'advice_engine' => 'setAdviceEngine'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'uuid' => 'getUuid',
        'client' => 'getClient',
        'name' => 'getName',
        'portfolio_type' => 'getPortfolioType',
        'risk_level' => 'getRiskLevel',
        'time_horizon' => 'getTimeHorizon',
        'status' => 'getStatus',
        'balance' => 'getBalance',
        'invested' => 'getInvested',
        'currency' => 'getCurrency',
        'created' => 'getCreated',
        'advisor' => 'getAdvisor',
        'advice_engine' => 'getAdviceEngine'
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
        $this->container['client'] = $data['client'] ?? null;
        $this->container['name'] = $data['name'] ?? null;
        $this->container['portfolio_type'] = $data['portfolio_type'] ?? null;
        $this->container['risk_level'] = $data['risk_level'] ?? null;
        $this->container['time_horizon'] = $data['time_horizon'] ?? null;
        $this->container['status'] = $data['status'] ?? null;
        $this->container['balance'] = $data['balance'] ?? null;
        $this->container['invested'] = $data['invested'] ?? null;
        $this->container['currency'] = $data['currency'] ?? null;
        $this->container['created'] = $data['created'] ?? null;
        $this->container['advisor'] = $data['advisor'] ?? null;
        $this->container['advice_engine'] = $data['advice_engine'] ?? null;
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
        if ($this->container['portfolio_type'] === null) {
            $invalidProperties[] = "'portfolio_type' can't be null";
        }
        if ($this->container['risk_level'] === null) {
            $invalidProperties[] = "'risk_level' can't be null";
        }
        if ($this->container['time_horizon'] === null) {
            $invalidProperties[] = "'time_horizon' can't be null";
        }
        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
        }
        if ($this->container['balance'] === null) {
            $invalidProperties[] = "'balance' can't be null";
        }
        if (($this->container['balance'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'balance', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['balance'] < 0)) {
            $invalidProperties[] = "invalid value for 'balance', must be bigger than or equal to 0.";
        }

        if ($this->container['invested'] === null) {
            $invalidProperties[] = "'invested' can't be null";
        }
        if (($this->container['invested'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'invested', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['invested'] < 0)) {
            $invalidProperties[] = "invalid value for 'invested', must be bigger than or equal to 0.";
        }

        if ($this->container['created'] === null) {
            $invalidProperties[] = "'created' can't be null";
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
     * Gets balance
     *
     * @return double
     */
    public function getBalance()
    {
        return $this->container['balance'];
    }

    /**
     * Sets balance
     *
     * @param double $balance balance
     *
     * @return self
     */
    public function setBalance($balance)
    {

        if (($balance > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $balance when calling PortfolioList., must be smaller than or equal to 1000000000000.');
        }
        if (($balance < 0)) {
            throw new \InvalidArgumentException('invalid value for $balance when calling PortfolioList., must be bigger than or equal to 0.');
        }

        $this->container['balance'] = $balance;

        return $this;
    }

    /**
     * Gets invested
     *
     * @return double
     */
    public function getInvested()
    {
        return $this->container['invested'];
    }

    /**
     * Sets invested
     *
     * @param double $invested invested
     *
     * @return self
     */
    public function setInvested($invested)
    {

        if (($invested > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $invested when calling PortfolioList., must be smaller than or equal to 1000000000000.');
        }
        if (($invested < 0)) {
            throw new \InvalidArgumentException('invalid value for $invested when calling PortfolioList., must be bigger than or equal to 0.');
        }

        $this->container['invested'] = $invested;

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
     * Gets advisor
     *
     * @return string|null
     */
    public function getAdvisor()
    {
        return $this->container['advisor'];
    }

    /**
     * Sets advisor
     *
     * @param string|null $advisor advisor
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
     * @return string|null
     */
    public function getAdviceEngine()
    {
        return $this->container['advice_engine'];
    }

    /**
     * Sets advice_engine
     *
     * @param string|null $advice_engine advice_engine
     *
     * @return self
     */
    public function setAdviceEngine($advice_engine)
    {
        $this->container['advice_engine'] = $advice_engine;

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


