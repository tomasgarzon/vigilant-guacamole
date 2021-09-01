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
import org.openapitools.client.model.Status14bEnum;
import org.openapitools.jackson.nullable.JsonNullable;
import org.threeten.bp.OffsetDateTime;

/**
 * WithdrawalDetail
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class WithdrawalDetail {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_PORTFOLIO = "portfolio";
  @SerializedName(SERIALIZED_NAME_PORTFOLIO)
  private String portfolio;

  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private Double amount;

  public static final String SERIALIZED_NAME_PROVIDER = "provider";
  @SerializedName(SERIALIZED_NAME_PROVIDER)
  private String provider;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private Status14bEnum status;

  public static final String SERIALIZED_NAME_REASON = "reason";
  @SerializedName(SERIALIZED_NAME_REASON)
  private String reason;

  public static final String SERIALIZED_NAME_COMPLETED = "completed";
  @SerializedName(SERIALIZED_NAME_COMPLETED)
  private OffsetDateTime completed;

  public static final String SERIALIZED_NAME_PURPOSE = "purpose";
  @SerializedName(SERIALIZED_NAME_PURPOSE)
  private String purpose;

  public static final String SERIALIZED_NAME_CREATED = "created";
  @SerializedName(SERIALIZED_NAME_CREATED)
  private OffsetDateTime created;

  public static final String SERIALIZED_NAME_WITHDRAWAL_TYPE = "withdrawal_type";
  @SerializedName(SERIALIZED_NAME_WITHDRAWAL_TYPE)
  private String withdrawalType;

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




  public WithdrawalDetail portfolio(String portfolio) {
    
    this.portfolio = portfolio;
    return this;
  }

   /**
   * Get portfolio
   * @return portfolio
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getPortfolio() {
    return portfolio;
  }


  public void setPortfolio(String portfolio) {
    this.portfolio = portfolio;
  }


  public WithdrawalDetail amount(Double amount) {
    
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


  public WithdrawalDetail provider(String provider) {
    
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


  public WithdrawalDetail status(Status14bEnum status) {
    
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Status14bEnum getStatus() {
    return status;
  }


  public void setStatus(Status14bEnum status) {
    this.status = status;
  }


  public WithdrawalDetail reason(String reason) {
    
    this.reason = reason;
    return this;
  }

   /**
   * Cancelled reason
   * @return reason
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Cancelled reason")

  public String getReason() {
    return reason;
  }


  public void setReason(String reason) {
    this.reason = reason;
  }


  public WithdrawalDetail completed(OffsetDateTime completed) {
    
    this.completed = completed;
    return this;
  }

   /**
   * Get completed
   * @return completed
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getCompleted() {
    return completed;
  }


  public void setCompleted(OffsetDateTime completed) {
    this.completed = completed;
  }


  public WithdrawalDetail purpose(String purpose) {
    
    this.purpose = purpose;
    return this;
  }

   /**
   * Withdrawal reason
   * @return purpose
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Withdrawal reason")

  public String getPurpose() {
    return purpose;
  }


  public void setPurpose(String purpose) {
    this.purpose = purpose;
  }


   /**
   * Get created
   * @return created
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getCreated() {
    return created;
  }




   /**
   * Get withdrawalType
   * @return withdrawalType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getWithdrawalType() {
    return withdrawalType;
  }




  public WithdrawalDetail extraData(Map<String, Object> extraData) {
    
    this.extraData = extraData;
    return this;
  }

  public WithdrawalDetail putExtraDataItem(String key, Object extraDataItem) {
    if (this.extraData == null) {
      this.extraData = new HashMap<String, Object>();
    }
    this.extraData.put(key, extraDataItem);
    return this;
  }

   /**
   * Additional withdrawal attributes for the specific portal
   * @return extraData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Additional withdrawal attributes for the specific portal")

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
    WithdrawalDetail withdrawalDetail = (WithdrawalDetail) o;
    return Objects.equals(this.uuid, withdrawalDetail.uuid) &&
        Objects.equals(this.portfolio, withdrawalDetail.portfolio) &&
        Objects.equals(this.amount, withdrawalDetail.amount) &&
        Objects.equals(this.provider, withdrawalDetail.provider) &&
        Objects.equals(this.status, withdrawalDetail.status) &&
        Objects.equals(this.reason, withdrawalDetail.reason) &&
        Objects.equals(this.completed, withdrawalDetail.completed) &&
        Objects.equals(this.purpose, withdrawalDetail.purpose) &&
        Objects.equals(this.created, withdrawalDetail.created) &&
        Objects.equals(this.withdrawalType, withdrawalDetail.withdrawalType) &&
        Objects.equals(this.extraData, withdrawalDetail.extraData);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && a.get().getClass().isArray() ? Arrays.equals((T[])a.get(), (T[])b.get()) : Objects.equals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, portfolio, amount, provider, status, reason, completed, purpose, created, withdrawalType, extraData);
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
    sb.append("class WithdrawalDetail {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    portfolio: ").append(toIndentedString(portfolio)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    provider: ").append(toIndentedString(provider)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    reason: ").append(toIndentedString(reason)).append("\n");
    sb.append("    completed: ").append(toIndentedString(completed)).append("\n");
    sb.append("    purpose: ").append(toIndentedString(purpose)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    withdrawalType: ").append(toIndentedString(withdrawalType)).append("\n");
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

