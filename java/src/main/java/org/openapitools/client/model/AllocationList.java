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
import org.threeten.bp.LocalDate;

/**
 * AllocationList
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class AllocationList {
  public static final String SERIALIZED_NAME_VALUATION_DATE = "valuation_date";
  @SerializedName(SERIALIZED_NAME_VALUATION_DATE)
  private LocalDate valuationDate;

  public static final String SERIALIZED_NAME_BALANCE = "balance";
  @SerializedName(SERIALIZED_NAME_BALANCE)
  private Double balance;

  public static final String SERIALIZED_NAME_INVESTED = "invested";
  @SerializedName(SERIALIZED_NAME_INVESTED)
  private Double invested;

  public static final String SERIALIZED_NAME_EARNINGS = "earnings";
  @SerializedName(SERIALIZED_NAME_EARNINGS)
  private Double earnings;

  public static final String SERIALIZED_NAME_CASH_ACTIVE = "cash_active";
  @SerializedName(SERIALIZED_NAME_CASH_ACTIVE)
  private Double cashActive;

  public static final String SERIALIZED_NAME_TRADE_TOTAL = "trade_total";
  @SerializedName(SERIALIZED_NAME_TRADE_TOTAL)
  private Double tradeTotal;

  public static final String SERIALIZED_NAME_PERFORMANCE = "performance";
  @SerializedName(SERIALIZED_NAME_PERFORMANCE)
  private Double performance;


   /**
   * Get valuationDate
   * @return valuationDate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public LocalDate getValuationDate() {
    return valuationDate;
  }




   /**
   * Get balance
   * minimum: -1000000000000
   * maximum: 1000000000000
   * @return balance
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getBalance() {
    return balance;
  }




   /**
   * Get invested
   * minimum: -1000000000000
   * maximum: 1000000000000
   * @return invested
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getInvested() {
    return invested;
  }




   /**
   * Get earnings
   * minimum: -1000000000000
   * maximum: 1000000000000
   * @return earnings
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getEarnings() {
    return earnings;
  }




   /**
   * Get cashActive
   * minimum: -1000000000000
   * maximum: 1000000000000
   * @return cashActive
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getCashActive() {
    return cashActive;
  }




   /**
   * Get tradeTotal
   * minimum: -1000000000000
   * maximum: 1000000000000
   * @return tradeTotal
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getTradeTotal() {
    return tradeTotal;
  }




   /**
   * Get performance
   * @return performance
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getPerformance() {
    return performance;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AllocationList allocationList = (AllocationList) o;
    return Objects.equals(this.valuationDate, allocationList.valuationDate) &&
        Objects.equals(this.balance, allocationList.balance) &&
        Objects.equals(this.invested, allocationList.invested) &&
        Objects.equals(this.earnings, allocationList.earnings) &&
        Objects.equals(this.cashActive, allocationList.cashActive) &&
        Objects.equals(this.tradeTotal, allocationList.tradeTotal) &&
        Objects.equals(this.performance, allocationList.performance);
  }

  @Override
  public int hashCode() {
    return Objects.hash(valuationDate, balance, invested, earnings, cashActive, tradeTotal, performance);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AllocationList {\n");
    sb.append("    valuationDate: ").append(toIndentedString(valuationDate)).append("\n");
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
    sb.append("    invested: ").append(toIndentedString(invested)).append("\n");
    sb.append("    earnings: ").append(toIndentedString(earnings)).append("\n");
    sb.append("    cashActive: ").append(toIndentedString(cashActive)).append("\n");
    sb.append("    tradeTotal: ").append(toIndentedString(tradeTotal)).append("\n");
    sb.append("    performance: ").append(toIndentedString(performance)).append("\n");
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

