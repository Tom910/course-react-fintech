import React, { PureComponent } from "react";
import classNames from "classnames";

const { hash, operation, showDelimiter, getDelimeterTitle, moment, opened, showLogo, Logo, currencyFrom, cardName, Money, moneyColor,
  isCardOperation, IconStar, Capitalization, isEmpty, Compensation, Actions, currentPath, SameOperations, IncomeDetails, TradingDetails,
  Map, Offer, TradingDescription, currencyTo, Dropdown, Date, Plural, bonusColor, D_12, IconArrow, loyaltyConfig, IconClock, D_18, IconCrown,
  Tooltip, IconNFC, number, Mistake, IconPercent, D_24 } = {};

class Item extends PureComponent {
  render() {
    return (
      <div
        ref={this.setRef(`timelineItem${operation.id}`)}
        className={classNames({
          "Timeline__item": true,
          "Timeline__item_delimiter": showDelimiter
        })}
      >
        {showDelimiter ? (
          <div className="Timeline__delimiter">
            <div className="Timeline__delimiter-content">
              {this.props.delimiterDateFormat
                ? moment(operation.operationTime.milliseconds).format(
                  this.props.delimiterDateFormat
                )
                : getDelimeterTitle(operation.operationTime.milliseconds)}
            </div>
          </div>
        ) : null}

        <div
          ref={this.setRef(
            operation.scrollToMe ? "scrollAnchor" : "noScrollAnchor"
          )}
          onClick={this.handleClick}
        >
          <div
            className={classNames({
              "Timeline__columns": true,
              "Timeline__columns_opened": opened
            })}
          >
            {showLogo ? (
              <div className="Timeline__column Timeline__column_logo">
                <div className="Timeline__logo">
                  <span onClick={this.handleAddTagBrand}>
                    <Logo operation={this.props.operation} colored noBorder />
                  </span>
                </div>
              </div>
            ) : null}

            <div className="Timeline__column Timeline__column_operation">
              <div className="Timeline__operation">
                <div>
                  <span
                    onClick={
                      isCardOperation
                        ? this.handleAddTagCard
                        : this.handleAddTagAccount
                    }
                    className="Timeline__operation-account"
                  >
                    {cardName}

                    {operation.flags.isMultidepositTransfer && (
                      <span>
                        <span className="Timeline__cross-currency">
                          {currencyFrom}
                        </span>
                        <IconArrow
                          className="Timeline__cross-currency-arrow"
                          size={10}
                          color="gray"
                          noBorder
                        />
                        <span className="Timeline__cross-currency">
                          {currencyTo}
                        </span>
                      </span>
                    )}
                  </span>

                  {operation.flags.hasTargetCashback && (
                    <IconCrown
                      ref={this.setRef(`timelineItemTarget${operation.id}`)}
                      loyaltyConfig={loyaltyConfig}
                    />
                  )}

                  {operation.total.bonus && (
                    <span>
                      <Money
                        ref={this.setRef(`timelineItemBonus${operation.id}`)}
                        className="Timeline__operation-bonus"
                        style={{
                          color: bonusColor
                        }}
                        value={operation.total.bonus.amount.value}
                        title={"Начислено"}
                        trimZeros
                        showRub={false}
                      />
                    </span>
                  )}

                  {operation.trancheId && (
                    <span>
                      <span className="Timeline__operation-buble">
                        Рассрочка
                      </span>
                    </span>
                  )}
                </div>
                <div className="Timeline__operation-name-wrapper">
                  {operation.flags.isNFC && (
                    <IconNFC
                      className="Timeline__operation-nfc"
                      size={D_12}
                      color="gray"
                    />
                  )}

                  {operation.description &&
                  !operation.flags.isTrading && (
                    <span
                      className="Timeline__operation-name"
                      title={operation.description}
                    >
                        {operation.description}
                      </span>
                  )}

                  {operation.flags.isTrading && (
                    <TradingDescription
                      operation={operation.tradingOperation}
                    />
                  )}

                  {operation.flags.isTemplate && (
                    <span
                      ref={this.setRef(`timelineItemFavorite${operation.id}`)}
                    >
                      <IconStar
                        className="Timeline__operation-favorite"
                        size={D_24}
                        noBorder
                        color="favorite"
                        active={
                          operation.template && operation.template.isFavorite
                        }
                        onClick={this.handleToggleFavorite}
                      />
                    </span>
                  )}

                  {operation.message && (
                    <span className="Timeline__operation-message">
                      {operation.message}
                    </span>
                  )}
                </div>

                {operation.flags.isTrading && (
                  <Plural
                    className="Timeline__trading-number-operations"
                    number={number}
                    values="operations"
                  />
                )}

                {!this.props.opened &&
                operation.flags.hasSame &&
                !operation.flags.isCapitalization && (
                  <Plural
                    className="ui-link"
                    number={operation.sameOperations.length}
                    values="operations"
                  />
                )}

                {this.props.opened && (
                  <span>
                    {operation.flags.hasSame &&
                    !operation.flags.isCapitalization ? (
                      <Plural
                        number={operation.sameOperations.length}
                        values="operations"
                      />
                    ) : (
                      <span>
                        <Date
                          className="Timeline__date"
                          value={operation.operationTime.milliseconds}
                          format="HH:mm"
                        />

                        {operation.debitingTime && (
                          <Dropdown
                            className="Timeline__operation-debiting"
                            label={<IconClock size={D_18} color="gray" />}
                          >
                            <Date
                              value={operation.debitingTime.milliseconds}
                              format="D MMMM YYYY"
                            />
                          </Dropdown>
                        )}
                      </span>
                    )}
                    <span className="Timeline__address">
                      {operation.address}
                    </span>
                  </span>
                )}
              </div>
            </div>

            <div className="Timeline__column Timeline__column_total">
              <div className="Timeline__total">
                <div>
                  {operation.flags.isFailed && (
                    <Tooltip
                      className="Timeline__hint"
                      tooltipClass="Timeline__hint-tooltip Timeline__hint-tooltip_error"
                      tooltipContainerClassName="Timeline__hint-tooltip-container_error"
                      tooltip="Операция не прошла"
                    >
                      <Mistake size={D_18} color="red" />
                    </Tooltip>
                  )}

                  {operation.flags.isAuthorization && (
                    <Tooltip
                      onClick={this.handleAddTagAuth}
                      className="Timeline__hint"
                      tooltipClass="Timeline__hint-tooltip"
                      tooltip={
                        <span>
                          Авторизация.<br />
                          Предварительное блокирование средств, которое может
                          быть отменено, либо превратиться в покупку.
                        </span>
                      }
                    >
                      <IconClock size={D_18} color="gray" />
                    </Tooltip>
                  )}

                  {!operation.flags.isCapitalization &&
                  operation.flags.isCurrencyTransaction &&
                  operation.flags.hasSameCurrency &&
                  (!operation.flags.isFailed || !operation.flags.hasSame) && (
                    <span className="Timeline__currency">
                        (<Money
                      value={
                        operation.total.amount.value *
                        operation.total.amount.ratio
                      }
                      currency={operation.total.amount.currency.name}
                      sign={operation.flags.moneyWithSign}
                      color={moneyColor}
                      trimZeros={false}
                      showRub={false}
                    />)
                      </span>
                  )}

                  {!operation.flags.isCapitalization &&
                  (!operation.flags.isFailed || !operation.flags.hasSame) && (
                    <Money
                      className="Timeline__money"
                      value={
                        operation.total.accountAmount.value *
                        operation.total.accountAmount.ratio
                      }
                      currency={operation.total.accountAmount.currency.name}
                      sign={operation.flags.moneyWithSign}
                      color={moneyColor}
                      trimZeros={false}
                      showRub={false}
                    />
                  )}

                  {operation.flags.isCapitalization && (
                    <Capitalization
                      moneyColor={moneyColor}
                      operation={operation}
                    />
                  )}
                </div>
                <div>
                  {operation.flags.hasHightCashback ? (
                    <IconPercent
                      className="Timeline__operation-cashback"
                      size={D_24}
                      color="black"
                      yellow
                    />
                  ) : null}
                  <span
                    ref={this.setRef(`timelineItemCategory${operation.id}`)}
                    className="Timeline__category"
                    onClick={this.handleAddTagCategory}
                  >
                    {operation.spendingCategory.name}
                  </span>
                </div>

                {opened &&
                operation.mcc > 100 &&
                operation.group === "PAY" &&
                isEmpty(operation.payment) && (
                  <span className="Timeline__mcc">
                      MCC {operation.mcc}
                    </span>
                )}
              </div>
            </div>
          </div>

          {opened ? (
            <div>
              <Compensation
                operation={operation}
                showCompensationStatus={this.state.showCompensationStatus}
                onRedeemSuccess={this.handleRedeemSucess}
              />
              <Actions
                currentPath={currentPath}
                operation={operation}
                hash={hash}
              />
              <SameOperations operation={operation} />
              <Map operation={operation} />
              <Offer operation={operation} />
              <IncomeDetails operation={operation} />
              <TradingDetails operation={operation} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Item;
