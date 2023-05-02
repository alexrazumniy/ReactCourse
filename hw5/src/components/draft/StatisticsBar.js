import styled from "styled-components";

const CostStatistics = styled.div`
  padding: 10px;
  width: 310px;
  height: 350px;
  margin-left: 10px;
  margin-top: -35px;
  border-radius: 20px;
  font-family: "Segoe UI";
  background: #e5efcc;
  overflow: hidden;
`;

const StatisticItem = styled.div`
  font-size: 16px;
  line-height: 2;
  font-family: "Segoe UI";
`;

const StatDate = styled.span`
  display: inline-block;
  width: 80px;
  margin-right: 10px;
  text-align: right;
`;

const StatPlace = styled.span`
  display: inline-block;
  width: 85px;
  margin-right: 10px;
`;

const StatCosts = styled.span`
  display: inline-block;
  width: 50px;
  margin-right: 10px;
`;

const StatCurrency = styled.span`
  display: inline-block;
  width: 50px;
  margin-right: 10px;
`;

export const StatBar = ({
    cardStatistic,
    purchaseDate,
    purchasePlace,
    purchaseCosts,
    costCurrency,
}) => {
    console.log(cardStatistic);
    return (
    <div>
      <CostStatistics>
        <h2>Card Stats</h2>
        {cardStatistic.map(({ id, date, place, expense, currency }) => (
          <StatisticItem
            key={id}
            purchaseDate={date}
            purchasePlace={place}
            purchaseCosts={expense}
            costCurrency={currency}
          >
            <div>
              <StatDate>{date}</StatDate>
              <StatPlace>{place}</StatPlace>
              <StatCosts>{expense}</StatCosts>
              <StatCurrency>{currency}</StatCurrency>
            </div>
          </StatisticItem>
        ))}
      </CostStatistics>
    </div>
  );
};
