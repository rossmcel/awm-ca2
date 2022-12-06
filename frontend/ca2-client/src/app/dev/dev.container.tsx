/**
 * The data for the view component is stored here and passed to the view component.
 */
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import DevView from "./dev.view";
import { Box, Flex, Button, Text, Heading } from "@chakra-ui/react";
import {
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  Legend,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export const DevContainer: React.FC = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const baseURL = usePathname();

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/notauthenticated");
  };

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then(function (response) {
        if (response.data === "/notauthenticated") {
          console.log(response.data);
          redirect();
        }
      })
      .catch(function (error) {
        console.log("Axios Error");
      });
  }, []);

  const listOfCompanies = [
    { value: "Company1", label: "Company1" },
    { value: "Company2", label: "Company2" },
    { value: "Company3", label: "Company3" },
  ];

  const defaultCompany = listOfCompanies[0].value;

  const data = [
    {
      name: "7a",
      businessPercentage: 30,
      scale: 100,
    },
    {
      name: "8a",
      businessPercentage: 78,
    },
    {
      name: "9a",
      businessPercentage: 70,
    },
    {
      name: "10a",
      businessPercentage: 45,
    },
    {
      name: "11a",
      businessPercentage: 23,
    },
    {
      name: "12p",
      businessPercentage: 60,
    },
    {
      name: "1p",
      businessPercentage: 40,
    },
    {
      name: "2p",
      businessPercentage: 30,
    },
    {
      name: "3p",
      businessPercentage: 25,
    },
    {
      name: "4p",
      businessPercentage: 18,
    },
    {
      name: "5p",
      businessPercentage: 28,
    },
    {
      name: "6p",
      businessPercentage: 35,
    },
    {
      name: "7p",
      businessPercentage: 32,
    },
    {
      name: "8p",
      businessPercentage: 24,
    },
    {
      name: "9p",
      businessPercentage: 12,
    },
    {
      name: "10p",
      businessPercentage: 7,
    },
    {
      name: "11p",
      businessPercentage: 4,
    },
  ];

  const project1Content = (
    <Box minWidth="100%" maxWidth="100%">
      <ResponsiveContainer minWidth="60%" width="60%" minHeight="10rem">
        <BarChart
          width={150}
          height={40}
          data={data}
          style={{ backgroundColor: "white" }}
        >
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} hide />
          <Tooltip />
          <Legend />
          <Line name="Time Period" type="monotone" dataKey="name" />
          <Bar name="Traffic" dataKey="businessPercentage" fill="#4669e8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );

  const project1Page2Content = (
    <Box
      minWidth="100%"
      maxWidth="100%"
      padding="1rem"
      border="1px lightgrey solid"
      borderRadius="0.8rem"
    >
      <ResponsiveContainer minWidth="100%" width="100%" minHeight="10rem">
        <BarChart
          width={150}
          height={40}
          data={data}
          style={{ backgroundColor: "white" }}
        >
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} hide />
          <Tooltip />
          <Legend />
          <Line name="Time Period" type="monotone" dataKey="name" />
          <Bar name="Traffic" dataKey="businessPercentage" fill="#4669e8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );

  const project1Text = (
    <Flex minW="70%" maxWidth="70%" overflowX="scroll">
      <Flex flexWrap="wrap" minW="100%">
        <Box minW="50%" maxW="50%" mb="1rem">
          <Heading as="h3" size="md" letterSpacing="-.1rem" color="darkgrey">
            Total Promotions
          </Heading>
          <Text mt="-0.3rem" fontSize="xs" color="grey">
            Past 7 days
          </Text>
          <Heading fontSize="4xl" color="black">
            20
          </Heading>
        </Box>
        <Box minW="50%" maxW="50%" mb="1rem">
          <Heading as="h3" size="md" letterSpacing="-.1rem" color="darkgrey">
            Unique Promotions Used
          </Heading>
          <Text mt="-0.3rem" fontSize="xs" color="grey">
            Past 7 days
          </Text>
          <Heading fontSize="4xl" color="black">
            4
          </Heading>
        </Box>
        <Box minW="50%" maxW="50%" mb="1rem">
          <Heading as="h3" size="md" letterSpacing="-.1rem" color="darkgrey">
            Promotions Used
          </Heading>
          <Text mt="-0.3rem" fontSize="xs" color="grey">
            Past 7 days
          </Text>
          <Heading fontSize="4xl" color="black">
            167
          </Heading>
        </Box>
      </Flex>
    </Flex>
  );

  const columnsO = [
    { key: "week", name: "Week" },
    { key: "totalTraff", name: "Total Traffic" },
    { key: "offers", name: "Offers" },
    { key: "offerEffect", name: "Offer Effectiveness" },
    { key: "trafficDiff", name: "Traffic Difference" },
  ];

  const rowsO = [
    {
      week: "1",
      totalTraff: "1",
      offers: "1",
      offerEffect: "1",
      trafficDiff: "1",
    },
    {
      week: "2",
      totalTraff: "1",
      offers: "1",
      offerEffect: "1",
      trafficDiff: "1",
    },
    {
      week: "3",
      totalTraff: "1",
      offers: "1",
      offerEffect: "1",
      trafficDiff: "1",
    },
    {
      week: "4",
      totalTraff: "1",
      offers: "1",
      offerEffect: "1",
      trafficDiff: "1",
    },
    {
      week: "5",
      totalTraff: "1",
      offers: "1",
      offerEffect: "1",
      trafficDiff: "1",
    },
    {
      week: "6",
      totalTraff: "1",
      offers: "1",
      offerEffect: "1",
      trafficDiff: "1",
    },
    {
      week: "7",
      totalTraff: "1",
      offers: "1",
      offerEffect: "1",
      trafficDiff: "1",
    },
  ];

  const areaChartData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const multiBarChartData = [
    {
      name: "01/09",
      peak: 110,
      offPeak: 200,
      offerUsers: 34,
    },
    {
      name: "02/09",
      peak: 92,
      offPeak: 187,
      offerUsers: 29,
    },
    {
      name: "03/09",
      peak: 136,
      offPeak: 234,
      offerUsers: 42,
    },
    {
      name: "04/09",
      peak: 163,
      offPeak: 298,
      offerUsers: 56,
    },
    {
      name: "05/09",
      peak: 92,
      offPeak: 187,
      offerUsers: 29,
    },
    {
      name: "06/09",
      peak: 163,
      offPeak: 298,
      offerUsers: 56,
    },
    {
      name: "07/09",
      peak: 110,
      offPeak: 200,
      offerUsers: 34,
    },
    {
      name: "08/09",
      peak: 163,
      offPeak: 200,
      offerUsers: 34,
    },
    {
      name: "09/09",
      peak: 163,
      offPeak: 298,
      offerUsers: 56,
    },
    {
      name: "10/09",
      peak: 110,
      offPeak: 200,
      offerUsers: 34,
    },
    {
      name: "11/09",
      peak: 136,
      offPeak: 234,
      offerUsers: 42,
    },
    {
      name: "12/09",
      peak: 135,
      offPeak: 211,
      offerUsers: 24,
    },
    {
      name: "13/09",
      peak: 110,
      offPeak: 200,
      offerUsers: 34,
    },
    {
      name: "14/09",
      peak: 136,
      offPeak: 234,
      offerUsers: 42,
    },
    {
      name: "15/09",
      peak: 163,
      offPeak: 298,
      offerUsers: 56,
    },
    {
      name: "16/09",
      peak: 92,
      offPeak: 187,
      offerUsers: 29,
    },
  ];

  const project1Page2Text = (
    <Flex minW="100%" maxWidth="100%" mt="2vh">
      <Flex flexWrap="wrap" minW="100%" justifyContent="center">
        <Flex
          direction="column"
          minW="96%"
          maxW="96%"
          minH="30rem"
          padding="1rem"
        >
          <Flex flexWrap="wrap" direction="row">
            <Button size="sm" borderRadius="0.8rem" mr="1rem">
              Data
            </Button>
            <Button size="sm" borderRadius="0.8rem" mr="1rem">
              Insights
            </Button>
            <Button size="sm" borderRadius="0.8rem">
              Temp
            </Button>
          </Flex>
          <Flex
            flexWrap="wrap"
            minW="100%"
            maxW="100%"
            minH="60%"
            mt="1.5vh"
            justifyContent="space-between"
          >
            <Box
              minW="47%"
              border="1px lightgrey solid"
              borderRadius="0.3rem"
              padding="0.4rem"
            >
              <Heading size="md" mb="2vh">
                Traffic Trends
              </Heading>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={areaChartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="rgb(106, 110, 229)"
                    fill="rgba(106, 110, 229, .16)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
            <Box
              minW="47%"
              border="1px lightgrey solid"
              borderRadius="0.3rem"
              padding="0.4rem"
            >
              <Heading size="md" mb="2vh">
                Daily Insights
              </Heading>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={multiBarChartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar
                    stackId="a"
                    dataKey="offPeak"
                    name="Off Peak"
                    fill="#7DB3FF"
                  />
                  <Bar stackId="a" dataKey="peak" name="Peak" fill="#49457B" />
                  <Bar
                    stackId="a"
                    dataKey="offerUsers"
                    name="Offer Users"
                    fill="#FF7C78"
                  />
                  <Legend />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );

  const animatedComponents = makeAnimated();

  const offersSubpageOptions = [
    { value: "Offer1", label: "Offer 1" },
    { value: "Offer2", label: "Offer 2" },
    { value: "Offer3", label: "Offer 3" },
  ];

  const [selected, setSelected] = useState(offersSubpageOptions[0]);

  const handleInputChange = (inputValue: any) => {
    setSelected(inputValue.value);
  };

  const listItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const styles = {
    control: (base: any) => ({
      ...base,
      minHeight: "fit-content",
      fontSize: "1vw",
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      padding: 0,
      size: "0.3vw",
    }),
    clearIndicator: (base: any) => ({
      ...base,
      padding: 0,
    }),
    multiValue: (base: any) => ({
      ...base,
    }),
    valueContainer: (base: any) => ({
      ...base,
      padding: "0px 6px",
    }),
    input: (base: any) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
  };

  const offersSubPageDailyData = [
    {
      name: "06/09",
      businessPercentage: 30,
      scale: 100,
    },
    {
      name: "07/09",
      businessPercentage: 78,
    },
    {
      name: "08/09",
      businessPercentage: 70,
    },
    {
      name: "09/09",
      businessPercentage: 45,
    },
    {
      name: "10/09",
      businessPercentage: 23,
    },
    {
      name: "11/09",
      businessPercentage: 60,
    },
    {
      name: "12/09",
      businessPercentage: 40,
    },
    {
      name: "13/09",
      businessPercentage: 30,
    },
    {
      name: "14/09",
      businessPercentage: 25,
    },
    {
      name: "15/09",
      businessPercentage: 18,
    },
    {
      name: "16/09",
      businessPercentage: 28,
    },
    {
      name: "17/09",
      businessPercentage: 35,
    },
    {
      name: "18/09",
      businessPercentage: 32,
    },
    {
      name: "19/09",
      businessPercentage: 24,
    },
    {
      name: "20/09",
      businessPercentage: 12,
    },
    {
      name: "21/09",
      businessPercentage: 7,
    },
    {
      name: "22/09",
      businessPercentage: 4,
    },
  ];

  const pieChartData = [
    {
      name: "Free Beverage",
      percentage: 27,
    },
    {
      name: "Extra Loyalty Stamp",
      percentage: 8,
    },
    {
      name: "Discount",
      percentage: 59,
    },
    {
      name: "Free Topping",
      percentage: 6,
    },
  ];

  const COLORS = ["lightblue", "grey", "pink", "yellow"];

  const project1Page3Text = (
    <Flex minW="100%" maxWidth="100%" mt="2vh" direction="column">
      <Flex
        flexWrap="wrap"
        minW="90%"
        margin="auto"
        justifyContent="space-between"
        direction="row"
      >
        <Flex
          minW="59%"
          direction="column"
          border="1px lightgrey solid"
          borderRadius="0.3rem"
          padding="0.4rem"
        >
          <Flex direction="row" minW="100%" justifyContent="space-between">
            <Heading ml="0.5rem" size="sm" mb="2vh" minW="75%" maxW="75%">
              Current Offers
            </Heading>
            <Flex justifyContent="right">
              <Button size="xs">Add</Button>
            </Flex>
          </Flex>
          <Flex minW="100%" direction="row" justifyContent="space-between">
            <Flex minW="60%" direction="column">
              <Box fontSize="sm" ml="0.5rem">
                USERS PER DAY
              </Box>
              <Box minWidth="100%" maxWidth="100%">
                <ResponsiveContainer
                  minWidth="100%"
                  width="100%"
                  minHeight="10rem"
                >
                  <BarChart
                    width={150}
                    height={40}
                    data={offersSubPageDailyData}
                    style={{ backgroundColor: "white" }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} hide />
                    <Tooltip />
                    <Legend />
                    <Line name="Time Period" type="monotone" dataKey="name" />
                    <Bar
                      name="Traffic"
                      dataKey="businessPercentage"
                      fill="#4669e8"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Flex>
            <Flex minW="39%" direction="column">
              <Box fontSize="sm" ml="0.5rem">
                OFFER TYPE
              </Box>
              <Box minWidth="100%" maxWidth="100%">
                <ResponsiveContainer
                  minWidth="100%"
                  width="100%"
                  minHeight="10rem"
                >
                  <PieChart width={150} height={80}>
                    <Pie
                      data={pieChartData}
                      dataKey="percentage"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={50}
                      fill="#8884d8"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Flex>
          </Flex>
          <Box fontSize="sm" ml="0.5rem" mb="0.5vh">
            OFFERS
          </Box>
          <Flex
            minW="100%"
            maxH="22vh"
            overflow="scroll"
            direction="column"
            borderRadius="0.3rem"
            justifyContent="center"
          >
            {listItems.map((item) => (
              <Flex
                minW="99%"
                maxW="99%"
                direction="row"
                paddingX="0.8rem"
                paddingY="0.3rem"
                borderBottom="1px solid lightgrey"
                margin="auto"
              >
                <Flex minW="75%" maxW="75%" flexWrap="wrap">
                  <Text>{item}</Text>
                </Flex>
                <Flex minW="23%" maxW="23%" justifyContent="right">
                  <Text size="xs">%</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex
          minW="39%"
          direction="column"
          border="1px lightgrey solid"
          borderRadius="0.3rem"
          padding="0.4rem"
        >
          <Flex minW="100%" direction="row">
            <Flex direction="row" minW="60%" justifyContent="space-between">
              <Heading size="sm" mb="2vh" ml="0.5rem" minW="75%" maxW="75%">
                Effectiveness
              </Heading>
            </Flex>
            <Box minW="39%" maxW="39%" ml="0.3rem">
              <Select
                closeMenuOnSelect={true}
                components={animatedComponents}
                defaultValue={offersSubpageOptions[0]}
                options={offersSubpageOptions}
                onChange={handleInputChange}
                styles={styles}
              />
            </Box>
          </Flex>
          <Flex minW="100%" direction="column">
            <Flex minW="100%" direction="row" justifyContent="center">
              <Flex
                minW="45%"
                maxW="45%"
                direction="column"
                minH="9vh"
                maxH="9vh"
                border="1px lightgrey solid"
                borderRadius="0.2rem"
                mr="3%"
                padding="0.3rem"
              >
                <Heading size="sm" color="darkgrey">
                  Total Uses
                </Heading>
                <Heading size="lg">56</Heading>
              </Flex>
              <Flex
                minW="45%"
                maxW="45%"
                direction="column"
                minH="9vh"
                maxH="9vh"
                border="1px lightgrey solid"
                borderRadius="0.2rem"
                mr="3%"
                padding="0.3rem"
              >
                <Heading size="sm" color="darkgrey">
                  Average Daily Uses
                </Heading>
                <Heading size="lg">4</Heading>
              </Flex>
            </Flex>
            <Flex minW="100%" direction="row" justifyContent="center" mt="2vh">
              <Flex
                minW="45%"
                maxW="45%"
                direction="column"
                minH="9vh"
                maxH="9vh"
                border="1px lightgrey solid"
                borderRadius="0.2rem"
                mr="3%"
                padding="0.3rem"
              >
                <Heading size="sm" color="darkgrey">
                  Popularity
                </Heading>
                <Heading size="lg">67%</Heading>
              </Flex>
              <Flex
                minW="45%"
                maxW="45%"
                direction="column"
                minH="9vh"
                maxH="9vh"
                border="1px lightgrey solid"
                borderRadius="0.2rem"
                mr="3%"
                padding="0.3rem"
              >
                <Heading size="sm" color="darkgrey">
                  Total Times Sent
                </Heading>
                <Heading size="lg">8</Heading>
              </Flex>
            </Flex>
          </Flex>
          <Box minW="80%" maxW="80%" padding="0.4rem" margin="auto">
            <Box fontSize="sm" ml="0.5rem">
              DAILY USES
            </Box>
            <ResponsiveContainer width="100%" height={140}>
              <AreaChart data={offersSubPageDailyData}>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="businessPercentage"
                  stroke="rgb(106, 110, 229)"
                  fill="rgba(106, 110, 229, .16)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Flex>
      </Flex>
      <Flex flexWrap="wrap" minW="100%" justifyContent="center" mt="4vh">
        <Flex
          direction="column"
          minW="90%"
          maxW="90%"
          minH="30rem"
          padding="1rem"
        >
          <Heading size="md" mb="2vh">
            Explore Data
          </Heading>
          <Flex flexWrap="wrap" direction="row">
            <Button size="sm" borderRadius="0.8rem" mr="1rem">
              All Offers
            </Button>
            <Button size="sm" borderRadius="0.8rem" mr="1rem">
              Users
            </Button>
            <Button size="sm" borderRadius="0.8rem">
              Potential Offers
            </Button>
          </Flex>
          <Flex
            flexWrap="wrap"
            minW="100%"
            maxW="100%"
            minH="60%"
            mt="1.5vh"
            justifyContent="space-between"
          >
            <Flex
              minW="100%"
              direction="column"
              border="1px lightgrey solid"
              borderRadius="0.3rem"
            >
              <Box minW="40%" maxW="40%" mt="1vh" ml="0.3rem" mb="2vh">
                <Select
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  defaultValue={offersSubpageOptions[0]}
                  options={offersSubpageOptions}
                  onChange={handleInputChange}
                  styles={styles}
                />
              </Box>
              <Flex
                minW="100%"
                direction="column"
                maxH="40vh"
                borderRadius="0.3rem"
                justifyContent="center"
              >
                {listItems.map((item) => (
                  <Flex
                    minW="99%"
                    maxW="99%"
                    paddingX="0.8rem"
                    paddingY="0.3rem"
                    borderBottom="1px solid lightgrey"
                    margin="auto"
                  >
                    <Text>{item}</Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );

  const project2Content = (
    <Box minWidth="100%" maxWidth="100%">
      <ResponsiveContainer minWidth="100%" width="100%" minHeight="10rem">
        <BarChart width={150} height={40} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} hide />
          <Tooltip />
          <Legend />
          <Line name="Time Period" type="monotone" dataKey="name" />
          <Bar name="Traffic" dataKey="businessPercentage" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );

  const project2Text = (
    <Flex direction="column" minW="70%" maxWidth="70%" overflowX="scroll">
      <Flex direction="row" flexWrap="wrap">
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
      </Flex>
    </Flex>
  );

  const project3Content = <Box>Test</Box>;

  const project3Text = (
    <Flex direction="column" minW="70%" maxWidth="70%" overflowX="scroll">
      <Flex direction="row" flexWrap="wrap">
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
        <a href="https://www.google.com">
          <Button _hover={{ bg: "lightblue" }} ml="1rem" mt="1rem">
            Temp
          </Button>
        </a>
      </Flex>
    </Flex>
  );

  const projectData = {
    projects: [
      {
        projectHeading: "Company 1",
        projectSubHeading: "Location",
        nonTextContent: project1Content,
        leftAligned: true,
        textContent: project1Text,
        tags: [{ tagName: "Company1" }],
        nonTextContent2: project1Page2Content,
        textContent2: project1Page2Text,
        textContent3: project1Page3Text,
      },
      {
        projectHeading: "Company 2",
        projectSubHeading: "Location",
        nonTextContent: project2Content,
        leftAligned: true,
        textContent: project2Text,
        tags: [{ tagName: "Company2" }],
      },
      {
        projectHeading: "Company 3",
        projectSubHeading: "Location",
        nonTextContent: project3Content,
        leftAligned: true,
        textContent: project3Text,
        tags: [{ tagName: "Company3" }],
      },
    ],
  };
  return (
    <DevView
      baseURL={baseURL}
      data={projectData}
      options={listOfCompanies}
      defaultValue={defaultCompany}
    />
  );
};

export default DevContainer;
