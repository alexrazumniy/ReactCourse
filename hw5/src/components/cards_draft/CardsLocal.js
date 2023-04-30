import { Card } from "./Card";
import { ShowCardStats } from "./StatisticsBar";
import CardsDataContext from "./DataContext"

const cardOwners = [
  {
    user_id: 1,
    user_name: "Claudianus Semkins",
    data: [
      {
        id: 1,
        card: {
          numbers: "5100132609421945",
          type: "mastercard",
          expiry_date: "10/23/2024",
          cvv: 245,
        },
        statistic: [
          {
            id: 1,
            date: "8/7/2021",
            place: "Kids",
            expense: 109.94,
            currency: "грн.",
          },
        ],
      },
      {
        id: 2,
        card: {
          numbers: "5100147961137954",
          type: "mastercard",
          expiry_date: "5/27/2022",
          cvv: 432,
        },
        statistic: [
          {
            id: 1,
            date: "7/6/2021",
            place: "Automotive",
            expense: 50.28,
            currency: "грн.",
          },
          {
            id: 2,
            date: "7/6/2021",
            place: "Garden",
            expense: 13.12,
            currency: "$",
          },
          {
            id: 3,
            date: "4/30/2021",
            place: "Automotive",
            expense: 298.77,
            currency: "$",
          },
          {
            id: 4,
            date: "4/3/2021",
            place: "Electronics",
            expense: 321.02,
            currency: "грн.",
          },
          {
            id: 5,
            date: "2/22/2021",
            place: "Garden",
            expense: 27.62,
            currency: "€",
          },
          {
            id: 6,
            date: "7/16/2021",
            place: "Baby",
            expense: 114.7,
            currency: "грн.",
          },
          {
            id: 7,
            date: "10/18/2021",
            place: "Health",
            expense: 101.95,
            currency: "грн.",
          },
        ],
      },
      {
        id: 3,
        card: {
          numbers: "5007663230084714",
          type: "mastercard",
          expiry_date: "3/15/2021",
          cvv: 793,
        },
        statistic: [
          {
            id: 1,
            date: "2/2/2021",
            place: "Books",
            expense: 241.23,
            currency: "грн.",
          },
          {
            id: 2,
            date: "11/11/2021",
            place: "Beauty",
            expense: 407.3,
            currency: "грн.",
          },
          {
            id: 3,
            date: "8/13/2021",
            place: "Toys",
            expense: 308.37,
            currency: "€",
          },
        ],
      },
      {
        id: 4,
        card: {
          numbers: "4041375036001385",
          type: "visa",
          expiry_date: "12/15/2021",
          cvv: 150,
        },
        statistic: [
          {
            id: 1,
            date: "5/4/2021",
            place: "Computers",
            expense: 152.45,
            currency: "грн.",
          },
          {
            id: 2,
            date: "4/30/2021",
            place: "Toys",
            expense: 65.11,
            currency: "грн.",
          },
          {
            id: 3,
            date: "6/25/2021",
            place: "Home",
            expense: 314.26,
            currency: "€",
          },
        ],
      },
      {
        id: 5,
        card: {
          numbers: "5010128094149057",
          type: "mastercard",
          expiry_date: "6/24/2021",
          cvv: 462,
        },
        statistic: [
          {
            id: 1,
            date: "6/20/2021",
            place: "Home",
            expense: 469.82,
            currency: "грн.",
          },
          {
            id: 2,
            date: "11/23/2021",
            place: "Automotive",
            expense: 458.76,
            currency: "$",
          },
          {
            id: 3,
            date: "7/30/2021",
            place: "Outdoors",
            expense: 431.95,
            currency: "$",
          },
          {
            id: 4,
            date: "8/14/2021",
            place: "Electronics",
            expense: 431.82,
            currency: "грн.",
          },
        ],
      },
      {
        id: 6,
        card: {
          numbers: "5100143617633710",
          type: "mastercard",
          expiry_date: "2/20/2024",
          cvv: 160,
        },
        statistic: [
          {
            id: 1,
            date: "11/28/2021",
            place: "Home",
            expense: 98.77,
            currency: "грн.",
          },
          {
            id: 2,
            date: "1/31/2021",
            place: "Shoes",
            expense: 401.75,
            currency: "грн.",
          },
          {
            id: 3,
            date: "7/13/2021",
            place: "Beauty",
            expense: 89.22,
            currency: "$",
          },
          {
            id: 4,
            date: "6/20/2021",
            place: "Books",
            expense: 49.89,
            currency: "$",
          },
          {
            id: 5,
            date: "5/9/2021",
            place: "Electronics",
            expense: 265.21,
            currency: "грн.",
          },
          {
            id: 6,
            date: "2/18/2021",
            place: "Shoes",
            expense: 164.95,
            currency: "грн.",
          },
        ],
      },
      {
        id: 7,
        card: {
          numbers: "5048378177928069",
          type: "mastercard",
          expiry_date: "1/13/2023",
          cvv: 303,
        },
        statistic: [
          {
            id: 1,
            date: "11/5/2021",
            place: "Home",
            expense: 318.07,
            currency: "грн.",
          },
          {
            id: 2,
            date: "3/15/2021",
            place: "Jewelry",
            expense: 418.72,
            currency: "грн.",
          },
          {
            id: 3,
            date: "11/10/2021",
            place: "Clothing",
            expense: 311.3,
            currency: "грн.",
          },
          {
            id: 4,
            date: "10/11/2021",
            place: "Electronics",
            expense: 244.41,
            currency: "$",
          },
          {
            id: 5,
            date: "10/28/2021",
            place: "Jewelry",
            expense: 262.71,
            currency: "грн.",
          },
          {
            id: 6,
            date: "9/28/2021",
            place: "Baby",
            expense: 211.11,
            currency: "грн.",
          },
          {
            id: 7,
            date: "1/12/2021",
            place: "Electronics",
            expense: 7.03,
            currency: "грн.",
          },
          {
            id: 8,
            date: "10/8/2021",
            place: "Baby",
            expense: 207.71,
            currency: "грн.",
          },
        ],
      },
      {
        id: 8,
        card: {
          numbers: "4041372856377",
          type: "visa",
          expiry_date: "4/27/2024",
          cvv: 530,
        },
        statistic: [
          {
            id: 1,
            date: "1/3/2021",
            place: "Sports",
            expense: 332.71,
            currency: "грн.",
          },
          {
            id: 2,
            date: "8/6/2021",
            place: "Industrial",
            expense: 88.59,
            currency: "грн.",
          },
          {
            id: 3,
            date: "3/28/2021",
            place: "Sports",
            expense: 450.01,
            currency: "грн.",
          },
          {
            id: 4,
            date: "3/31/2021",
            place: "Games",
            expense: 127.38,
            currency: "грн.",
          },
          {
            id: 5,
            date: "11/23/2021",
            place: "Baby",
            expense: 388.85,
            currency: "грн.",
          },
          {
            id: 6,
            date: "9/28/2021",
            place: "Grocery",
            expense: 207.99,
            currency: "€",
          },
          {
            id: 7,
            date: "8/4/2021",
            place: "Beauty",
            expense: 235.02,
            currency: "грн.",
          },
        ],
      },
      {
        id: 9,
        card: {
          numbers: "5100178629963853",
          type: "mastercard",
          expiry_date: "1/19/2023",
          cvv: 945,
        },
        statistic: [
          {
            id: 1,
            date: "5/30/2021",
            place: "Automotive",
            expense: 283.9,
            currency: "грн.",
          },
        ],
      },
      {
        id: 10,
        card: {
          numbers: "4017958405976368",
          type: "visa",
          expiry_date: "2/10/2021",
          cvv: 951,
        },
        statistic: [
          {
            id: 1,
            date: "5/24/2021",
            place: "Sports",
            expense: 399.31,
            currency: "грн.",
          },
          {
            id: 2,
            date: "3/30/2021",
            place: "Tools",
            expense: 40.17,
            currency: "€",
          },
          {
            id: 3,
            date: "10/1/2021",
            place: "Sports",
            expense: 378.9,
            currency: "грн.",
          },
          {
            id: 4,
            date: "3/15/2021",
            place: "Music",
            expense: 410.69,
            currency: "грн.",
          },
          {
            id: 5,
            date: "9/16/2021",
            place: "Sports",
            expense: 216.92,
            currency: "грн.",
          },
        ],
      },
    ],
  },
  {
    user_id: 2,
    user_name: "Tallou Falshaw",
    data: [
      {
        id: 1,
        card: {
          numbers: "5048378209593071",
          type: "mastercard",
          expiry_date: "10/13/2023",
          cvv: 882,
        },
        statistic: [
          {
            id: 1,
            date: "7/20/2021",
            place: "Tools",
            expense: 5.35,
            currency: "грн.",
          },
          {
            id: 2,
            date: "1/21/2021",
            place: "Games",
            expense: 296.91,
            currency: "грн.",
          },
          {
            id: 3,
            date: "6/7/2021",
            place: "Garden",
            expense: 405.71,
            currency: "грн.",
          },
          {
            id: 4,
            date: "11/8/2021",
            place: "Toys",
            expense: 168.29,
            currency: "грн.",
          },
          {
            id: 5,
            date: "12/8/2021",
            place: "Automotive",
            expense: 353.6,
            currency: "$",
          },
          {
            id: 6,
            date: "3/2/2021",
            place: "Grocery",
            expense: 18.28,
            currency: "грн.",
          },
        ],
      },
      {
        id: 2,
        card: {
          numbers: "5002359068622619",
          type: "mastercard",
          expiry_date: "2/26/2025",
          cvv: 794,
        },
        statistic: [
          {
            id: 1,
            date: "2/22/2021",
            place: "Grocery",
            expense: 345.98,
            currency: "грн.",
          },
          {
            id: 2,
            date: "9/15/2021",
            place: "Shoes",
            expense: 430.03,
            currency: "грн.",
          },
          {
            id: 3,
            date: "3/28/2021",
            place: "Home",
            expense: 154.57,
            currency: "грн.",
          },
          {
            id: 4,
            date: "4/15/2021",
            place: "Home",
            expense: 64.81,
            currency: "грн.",
          },
          {
            id: 5,
            date: "6/28/2021",
            place: "Garden",
            expense: 339.05,
            currency: "грн.",
          },
          {
            id: 6,
            date: "9/3/2021",
            place: "Toys",
            expense: 485.67,
            currency: "$",
          },
          {
            id: 7,
            date: "3/26/2021",
            place: "Toys",
            expense: 47.97,
            currency: "$",
          },
        ],
      },
      {
        id: 3,
        card: {
          numbers: "5357033234848678",
          type: "mastercard",
          expiry_date: "12/26/2023",
          cvv: 905,
        },
        statistic: [
          {
            id: 1,
            date: "3/22/2021",
            place: "Tools",
            expense: 347.41,
            currency: "грн.",
          },
          {
            id: 2,
            date: "9/23/2021",
            place: "Electronics",
            expense: 372.33,
            currency: "грн.",
          },
          {
            id: 3,
            date: "12/16/2021",
            place: "Games",
            expense: 198.13,
            currency: "грн.",
          },
          {
            id: 4,
            date: "8/11/2021",
            place: "Home",
            expense: 22.96,
            currency: "€",
          },
          {
            id: 5,
            date: "5/25/2021",
            place: "Music",
            expense: 213.34,
            currency: "грн.",
          },
        ],
      },
      {
        id: 4,
        card: {
          numbers: "4041595817271",
          type: "visa",
          expiry_date: "5/9/2024",
          cvv: 362,
        },
        statistic: [
          {
            id: 1,
            date: "3/7/2021",
            place: "Computers",
            expense: 243.92,
            currency: "грн.",
          },
          {
            id: 2,
            date: "8/8/2021",
            place: "Jewelry",
            expense: 481.58,
            currency: "грн.",
          },
          {
            id: 3,
            date: "7/19/2021",
            place: "Baby",
            expense: 461.83,
            currency: "грн.",
          },
          {
            id: 4,
            date: "2/11/2021",
            place: "Clothing",
            expense: 301.94,
            currency: "€",
          },
          {
            id: 5,
            date: "7/18/2021",
            place: "Beauty",
            expense: 52.3,
            currency: "$",
          },
          {
            id: 6,
            date: "3/20/2021",
            place: "Home",
            expense: 171.36,
            currency: "$",
          },
          {
            id: 7,
            date: "5/21/2021",
            place: "Industrial",
            expense: 284.65,
            currency: "грн.",
          },
        ],
      },
      {
        id: 5,
        card: {
          numbers: "5100142605446119",
          type: "mastercard",
          expiry_date: "8/1/2023",
          cvv: 331,
        },
        statistic: [
          {
            id: 1,
            date: "10/12/2021",
            place: "Shoes",
            expense: 138.5,
            currency: "$",
          },
          {
            id: 2,
            date: "9/27/2021",
            place: "Kids",
            expense: 162.76,
            currency: "грн.",
          },
          {
            id: 3,
            date: "2/14/2021",
            place: "Baby",
            expense: 158.86,
            currency: "грн.",
          },
          {
            id: 4,
            date: "9/11/2021",
            place: "Sports",
            expense: 183.44,
            currency: "грн.",
          },
          {
            id: 5,
            date: "3/8/2021",
            place: "Garden",
            expense: 325.69,
            currency: "$",
          },
          {
            id: 6,
            date: "2/8/2021",
            place: "Outdoors",
            expense: 236.38,
            currency: "грн.",
          },
          {
            id: 7,
            date: "4/30/2021",
            place: "Sports",
            expense: 161.58,
            currency: "грн.",
          },
        ],
      },
    ],
  },
  {
    user_id: 3,
    user_name: "Ashlin Stansfield",
    data: [
      {
        id: 1,
        card: {
          numbers: "4041376855425",
          type: "visa",
          expiry_date: "8/15/2022",
          cvv: 623,
        },
        statistic: [
          {
            id: 1,
            date: "1/7/2021",
            place: "Health",
            expense: 16.98,
            currency: "$",
          },
          {
            id: 2,
            date: "2/5/2021",
            place: "Beauty",
            expense: 428.07,
            currency: "грн.",
          },
          {
            id: 3,
            date: "3/10/2021",
            place: "Tools",
            expense: 162.18,
            currency: "грн.",
          },
          {
            id: 4,
            date: "3/3/2021",
            place: "Kids",
            expense: 59.17,
            currency: "грн.",
          },
          {
            id: 5,
            date: "9/14/2021",
            place: "Baby",
            expense: 487.43,
            currency: "€",
          },
          {
            id: 6,
            date: "3/9/2021",
            place: "Tools",
            expense: 448.37,
            currency: "$",
          },
          {
            id: 7,
            date: "4/18/2021",
            place: "Industrial",
            expense: 404.9,
            currency: "грн.",
          },
          {
            id: 8,
            date: "3/29/2021",
            place: "Computers",
            expense: 270.54,
            currency: "€",
          },
        ],
      },
      {
        id: 2,
        card: {
          numbers: "5007667856280498",
          type: "mastercard",
          expiry_date: "6/5/2022",
          cvv: 808,
        },
        statistic: [
          {
            id: 1,
            date: "8/3/2021",
            place: "Toys",
            expense: 171.06,
            currency: "грн.",
          },
          {
            id: 2,
            date: "9/11/2021",
            place: "Sports",
            expense: 357.53,
            currency: "грн.",
          },
          {
            id: 3,
            date: "4/27/2021",
            place: "Tools",
            expense: 16.71,
            currency: "грн.",
          },
          {
            id: 4,
            date: "8/8/2021",
            place: "Automotive",
            expense: 319.86,
            currency: "грн.",
          },
        ],
      },
      {
        id: 3,
        card: {
          numbers: "4041598697258685",
          type: "visa",
          expiry_date: "10/3/2024",
          cvv: 411,
        },
        statistic: [],
      },
      {
        id: 4,
        card: {
          numbers: "4017950694472126",
          type: "visa",
          expiry_date: "5/10/2024",
          cvv: 340,
        },
        statistic: [],
      },
    ],
  },
  {
    user_id: 4,
    user_name: "Alvan Beaze",
    data: [
      {
        id: 1,
        card: {
          numbers: "5492855621047225",
          type: "mastercard",
          expiry_date: "6/22/2024",
          cvv: 223,
        },
        statistic: [
          {
            id: 1,
            date: "10/19/2021",
            place: "Tools",
            expense: 458.8,
            currency: "грн.",
          },
          {
            id: 2,
            date: "12/17/2021",
            place: "Shoes",
            expense: 24.89,
            currency: "грн.",
          },
        ],
      },
      {
        id: 2,
        card: {
          numbers: "4017956460455",
          type: "visa",
          expiry_date: "2/4/2022",
          cvv: 521,
        },
        statistic: [
          {
            id: 1,
            date: "6/16/2021",
            place: "Kids",
            expense: 159.06,
            currency: "$",
          },
          {
            id: 2,
            date: "1/24/2021",
            place: "Outdoors",
            expense: 277.42,
            currency: "€",
          },
          {
            id: 3,
            date: "2/10/2021",
            place: "Health",
            expense: 368.77,
            currency: "€",
          },
          {
            id: 4,
            date: "7/19/2021",
            place: "Movies",
            expense: 93.06,
            currency: "грн.",
          },
          {
            id: 5,
            date: "6/3/2021",
            place: "Tools",
            expense: 473.74,
            currency: "грн.",
          },
          {
            id: 6,
            date: "8/10/2021",
            place: "Books",
            expense: 299.23,
            currency: "$",
          },
          {
            id: 7,
            date: "10/15/2021",
            place: "Toys",
            expense: 302.87,
            currency: "грн.",
          },
        ],
      },
      {
        id: 3,
        card: {
          numbers: "5100178813452150",
          type: "mastercard",
          expiry_date: "4/9/2023",
          cvv: 151,
        },
        statistic: [
          {
            id: 1,
            date: "5/10/2021",
            place: "Automotive",
            expense: 248.88,
            currency: "грн.",
          },
          {
            id: 2,
            date: "6/7/2021",
            place: "Outdoors",
            expense: 347.49,
            currency: "грн.",
          },
          {
            id: 3,
            date: "10/21/2021",
            place: "Books",
            expense: 19.75,
            currency: "$",
          },
          {
            id: 4,
            date: "8/31/2021",
            place: "Clothing",
            expense: 373.44,
            currency: "€",
          },
          {
            id: 5,
            date: "8/12/2021",
            place: "Tools",
            expense: 249.16,
            currency: "грн.",
          },
          {
            id: 6,
            date: "10/26/2021",
            place: "Baby",
            expense: 6.25,
            currency: "грн.",
          },
          {
            id: 7,
            date: "5/26/2021",
            place: "Tools",
            expense: 305.45,
            currency: "грн.",
          },
        ],
      },
      {
        id: 4,
        card: {
          numbers: "5048374358017244",
          type: "mastercard",
          expiry_date: "8/3/2022",
          cvv: 196,
        },
        statistic: [
          {
            id: 1,
            date: "10/16/2021",
            place: "Home",
            expense: 117.98,
            currency: "$",
          },
          {
            id: 2,
            date: "3/3/2021",
            place: "Computers",
            expense: 324.3,
            currency: "грн.",
          },
          {
            id: 3,
            date: "1/6/2021",
            place: "Games",
            expense: 370.42,
            currency: "грн.",
          },
          {
            id: 4,
            date: "4/2/2021",
            place: "Outdoors",
            expense: 175.28,
            currency: "грн.",
          },
          {
            id: 5,
            date: "6/19/2021",
            place: "Games",
            expense: 79.34,
            currency: "грн.",
          },
          {
            id: 6,
            date: "5/11/2021",
            place: "Movies",
            expense: 51.95,
            currency: "грн.",
          },
          {
            id: 7,
            date: "10/1/2021",
            place: "Health",
            expense: 250.24,
            currency: "$",
          },
          {
            id: 8,
            date: "2/23/2021",
            place: "Toys",
            expense: 236.28,
            currency: "грн.",
          },
        ],
      },
      {
        id: 5,
        card: {
          numbers: "4041595538398",
          type: "visa",
          expiry_date: "2/28/2025",
          cvv: 205,
        },
        statistic: [
          {
            id: 1,
            date: "7/18/2021",
            place: "Music",
            expense: 141.09,
            currency: "грн.",
          },
          {
            id: 2,
            date: "1/26/2021",
            place: "Movies",
            expense: 409.61,
            currency: "€",
          },
          {
            id: 3,
            date: "12/6/2021",
            place: "Home",
            expense: 132.4,
            currency: "$",
          },
          {
            id: 4,
            date: "8/29/2021",
            place: "Jewelry",
            expense: 55.6,
            currency: "$",
          },
          {
            id: 5,
            date: "5/11/2021",
            place: "Computers",
            expense: 311.81,
            currency: "€",
          },
          {
            id: 6,
            date: "11/19/2021",
            place: "Movies",
            expense: 441.07,
            currency: "грн.",
          },
          {
            id: 7,
            date: "11/28/2021",
            place: "Garden",
            expense: 297.23,
            currency: "грн.",
          },
          {
            id: 8,
            date: "1/2/2022",
            place: "Grocery",
            expense: 277.99,
            currency: "грн.",
          },
        ],
      },
      {
        id: 6,
        card: {
          numbers: "4041375441670956",
          type: "visa",
          expiry_date: "2/2/2025",
          cvv: 213,
        },
        statistic: [
          {
            id: 1,
            date: "11/30/2021",
            place: "Health",
            expense: 71.12,
            currency: "грн.",
          },
          {
            id: 2,
            date: "6/2/2021",
            place: "Jewelry",
            expense: 274.82,
            currency: "$",
          },
          {
            id: 3,
            date: "2/6/2021",
            place: "Industrial",
            expense: 302.2,
            currency: "грн.",
          },
          {
            id: 4,
            date: "9/6/2021",
            place: "Home",
            expense: 384.43,
            currency: "$",
          },
          {
            id: 5,
            date: "3/28/2021",
            place: "Home",
            expense: 448.79,
            currency: "€",
          },
          {
            id: 6,
            date: "1/20/2021",
            place: "Toys",
            expense: 46.26,
            currency: "€",
          },
          {
            id: 7,
            date: "4/17/2021",
            place: "Automotive",
            expense: 355.34,
            currency: "€",
          },
          {
            id: 8,
            date: "2/28/2021",
            place: "Kids",
            expense: 466.55,
            currency: "грн.",
          },
        ],
      },
      {
        id: 7,
        card: {
          numbers: "5010122249519009",
          type: "mastercard",
          expiry_date: "2/12/2025",
          cvv: 110,
        },
        statistic: [
          {
            id: 1,
            date: "5/4/2021",
            place: "Movies",
            expense: 118.08,
            currency: "грн.",
          },
          {
            id: 2,
            date: "6/3/2021",
            place: "Toys",
            expense: 489.71,
            currency: "грн.",
          },
          {
            id: 3,
            date: "11/5/2021",
            place: "Automotive",
            expense: 101.45,
            currency: "грн.",
          },
          {
            id: 4,
            date: "6/5/2021",
            place: "Electronics",
            expense: 144.54,
            currency: "$",
          },
          {
            id: 5,
            date: "8/19/2021",
            place: "Computers",
            expense: 381.39,
            currency: "грн.",
          },
        ],
      },
    ],
  },
  {
    user_id: 5,
    user_name: "Bill Cush",
    data: [
      {
        id: 1,
        card: {
          numbers: "4392855317803",
          type: "visa",
          expiry_date: "6/9/2022",
          cvv: 523,
        },
        statistic: [
          {
            id: 1,
            date: "3/15/2021",
            place: "Beauty",
            expense: 248.25,
            currency: "грн.",
          },
          {
            id: 2,
            date: "11/29/2021",
            place: "Tools",
            expense: 383.59,
            currency: "$",
          },
          {
            id: 3,
            date: "7/4/2021",
            place: "Health",
            expense: 284.38,
            currency: "€",
          },
          {
            id: 4,
            date: "4/1/2021",
            place: "Automotive",
            expense: 215.32,
            currency: "$",
          },
          {
            id: 5,
            date: "1/7/2021",
            place: "Movies",
            expense: 132.69,
            currency: "$",
          },
          {
            id: 6,
            date: "4/10/2021",
            place: "Health",
            expense: 214.18,
            currency: "$",
          },
          {
            id: 7,
            date: "8/16/2021",
            place: "Sports",
            expense: 375.21,
            currency: "грн.",
          },
        ],
      },
      {
        id: 2,
        card: {
          numbers: "4041374581145085",
          type: "visa",
          expiry_date: "5/12/2023",
          cvv: 789,
        },
        statistic: [
          {
            id: 1,
            date: "1/29/2021",
            place: "Tools",
            expense: 104.75,
            currency: "$",
          },
          {
            id: 2,
            date: "1/9/2021",
            place: "Clothing",
            expense: 404.53,
            currency: "грн.",
          },
          {
            id: 3,
            date: "12/29/2021",
            place: "Beauty",
            expense: 249.55,
            currency: "€",
          },
          {
            id: 4,
            date: "11/19/2021",
            place: "Shoes",
            expense: 213.82,
            currency: "грн.",
          },
          {
            id: 5,
            date: "2/12/2021",
            place: "Tools",
            expense: 350.19,
            currency: "$",
          },
          {
            id: 6,
            date: "3/29/2021",
            place: "Jewelry",
            expense: 200.89,
            currency: "грн.",
          },
        ],
      },
      {
        id: 3,
        card: {
          numbers: "5100141777879677",
          type: "mastercard",
          expiry_date: "9/20/2023",
          cvv: 519,
        },
        statistic: [],
      },
    ],
  },
];

// export const CardsLocal = () => {
//   console.log("cardOwners:", cardOwners);

//   return (
//     <>
//       {cardOwners.map((cardOwner) => (
//         <CardOwner
//           key={cardOwner.user_id}
//           user_name={cardOwner.user_name}
//           data={cardOwner.data}
//         />
//       ))}
//     </>
//   );
// };

// const CardOwner = ({ user_name, data }) => {
//   return (
//     <>
//       {data?.map((cardData) => (
//         <Card
//           user_name={user_name}
//           key={cardData.id}
//           numbers={cardData.card.numbers}
//           expiry_date={cardData.card.expiry_date}
//           cvv={cardData.card.cvv}
//           type={cardData.card.type}
//           statistic={cardData.statistic}
//         />
//       ))}
//     </>
//   );
// };

// const Card11 = () => {
//   return (
//     <>
//         {statistic?.map((statData) => (
//           <ShowCardStats
//             key={statData.id}
//             date={statData.date}
//             place={statData.place}
//             expense={statData.expense}
//             currency={statData.currency}
//           />
//         ))}
//     </>
//   );
// };



// console.log("cardOwner:", cardOwner);
// console.log("user_id:", user_id);
// console.log("user_name:", user_name);
// console.log("data:", data);

// console.log("id:", id);
// console.log("card:", card);
// console.log("statistic:", statistic);

// console.log("id:", id);
// console.log("date:", date);
// console.log("place:", place);
// console.log("expense:", expense);
// console.log("currency:", currency);

// return (
//   <>
//     {data?.map((item) => (
//       <Card
//         key={item.card.id}
//         user_name={user_name}
//         numbers={item.card.numbers}
//         expiry_date={item.card.expiry_date}
//         cvv={item.card.cvv}
//         type={item.card.type}
//       />
//     ))}
//     {statistic?.map((item) => (
//       <ShowCardStats
//         key={item.id}
//         date={item.date}
//         place={item.place}
//         expense={item.expense}
//         currency={item.currency}
//       />
//     ))}
//   </>
// );

// cardOwners.map(cardOwner => {
//   const { user_id, user_name, data } = cardOwner;

//   console.log("cardOwner:", cardOwner);
//   console.log("user_id:", user_id);
//   console.log("user_name:", user_name);
//   console.log("data:", data);

//   data.map(cardData => {
//     const {id, card, statistic} = cardData;

//     console.log("id:", id);
//     console.log("card:", card);
//     console.log("statistic:", statistic);

//     statistic.map(statData => {
//       const {id, date, place, expense, currency} = statData;

//       console.log("id:", id);
//       console.log("date:", date);
//       console.log("place:", place);
//       console.log("expense:", expense);
//       console.log("currency:", currency);
//     })
//   })
// });