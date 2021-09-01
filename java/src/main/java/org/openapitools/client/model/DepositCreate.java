/*
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.openapitools.client.model.DepositTypeEnum;
import org.openapitools.client.model.StatusB6aEnum;
import org.openapitools.jackson.nullable.JsonNullable;
import org.threeten.bp.OffsetDateTime;

/**
 * DepositCreate
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class DepositCreate {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private Double amount;

  public static final String SERIALIZED_NAME_PROVIDER = "provider";
  @SerializedName(SERIALIZED_NAME_PROVIDER)
  private String provider;

  public static final String SERIALIZED_NAME_REFERENCE = "reference";
  @SerializedName(SERIALIZED_NAME_REFERENCE)
  private String reference;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private StatusB6aEnum status;

  public static final String SERIALIZED_NAME_REASON = "reason";
  @SerializedName(SERIALIZED_NAME_REASON)
  private String reason;

  public static final String SERIALIZED_NAME_COMPLETED = "completed";
  @SerializedName(SERIALIZED_NAME_COMPLETED)
  private OffsetDateTime completed;

  public static final String SERIALIZED_NAME_DEPOSIT_TYPE = "deposit_type";
  @SerializedName(SERIALIZED_NAME_DEPOSIT_TYPE)
  private DepositTypeEnum depositType;

  public static final String SERIALIZED_NAME_TRANSACTED_AT = "transacted_at";
  @SerializedName(SERIALIZED_NAME_TRANSACTED_AT)
  private OffsetDateTime transactedAt;

  public static final String SERIALIZED_NAME_EXTRA_DATA = "extra_data";
  @SerializedName(SERIALIZED_NAME_EXTRA_DATA)
  private Map<String, Object> extraData = null;


   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public UUID getUuid() {
    return uuid;
  }




  public DepositCreate amount(Double amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Get amount
   * minimum: -1000000000000
   * maximum: 1000000000000
   * @return amount
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getAmount() {
    return amount;
  }


  public void setAmount(Double amount) {
    this.amount = amount;
  }


  public DepositCreate provider(String provider) {
    
    this.provider = provider;
    return this;
  }

   /**
   * Get provider
   * @return provider
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getProvider() {
    return provider;
  }


  public void setProvider(String provider) {
    this.provider = provider;
  }


   /**
   * Get reference
   * @return reference
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getReference() {
    return reference;
  }




   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public StatusB6aEnum getStatus() {
    return status;
  }




   /**
   * Cancelled reason
   * @return reason
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Cancelled reason")

  public String getReason() {
    return reason;
  }




   /**
   * Get completed
   * @return completed
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getCompleted() {
    return completed;
  }




  public DepositCreate depositType(DepositTypeEnum depositType) {
    
    this.depositType = depositType;
    return this;
  }

   /**
   * Get depositType
   * @return depositType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public DepositTypeEnum getDepositType() {
    return depositType;
  }


  public void setDepositType(DepositTypeEnum depositType) {
    this.depositType = depositType;
  }


   /**
   * Get transactedAt
   * @return transactedAt
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getTransactedAt() {
    return transactedAt;
  }




  public DepositCreate extraData(Map<String, Object> extraData) {
    
    this.extraData = extraData;
    return this;
  }

  public DepositCreate putExtraDataItem(String key, Object extraDataItem) {
    if (this.extraData == null) {
      this.extraData = new HashMap<String, Object>();
    }
    this.extraData.put(key, extraDataItem);
    return this;
  }

   /**
   * Additional deposit attributes for the specific portal
   * @return extraData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Additional deposit attributes for the specific portal")

  public Map<String, Object> getExtraData() {
    return extraData;
  }


  public void setExtraData(Map<String, Object> extraData) {
    this.extraData = extraData;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DepositCreate depositCreate = (DepositCreate) o;
    return Objects.equals(this.uuid, depositCreate.uuid) &&
        Objects.equals(this.amount, depositCreate.amount) &&
        Objects.equals(this.provider, depositCreate.provider) &&
        Objects.equals(this.reference, depositCreate.reference) &&
        Objects.equals(this.status, depositCreate.status) &&
        Objects.equals(this.reason, depositCreate.reason) &&
        Objects.equals(this.completed, depositCreate.completed) &&
        Objects.equals(this.depositType, depositCreate.depositType) &&
        Objects.equals(this.transactedAt, depositCreate.transactedAt) &&
        Objects.equals(this.extraData, depositCreate.extraData);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && a.get().getClass().isArray() ? Arrays.equals((T[])a.get(), (T[])b.get()) : Objects.equals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, amount, provider, reference, status, reason, completed, depositType, transactedAt, extraData);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent()
      ? (a.get().getClass().isArray() ? Arrays.hashCode((T[])a.get()) : Objects.hashCode(a.get()))
      : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DepositCreate {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    provider: ").append(toIndentedString(provider)).append("\n");
    sb.append("    reference: ").append(toIndentedString(reference)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    reason: ").append(toIndentedString(reason)).append("\n");
    sb.append("    completed: ").append(toIndentedString(completed)).append("\n");
    sb.append("    depositType: ").append(toIndentedString(depositType)).append("\n");
    sb.append("    transactedAt: ").append(toIndentedString(transactedAt)).append("\n");
    sb.append("    extraData: ").append(toIndentedString(extraData)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

