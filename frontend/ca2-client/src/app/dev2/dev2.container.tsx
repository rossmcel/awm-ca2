import React from "react";
import Dev2View from "./dev2.view";
import { Box, Flex, Button } from "@chakra-ui/react";
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
} from "recharts";

export const Dev2Container: React.FC = () => {
  const listOfCompanies = [
    { value: "Company1", label: "Company1" },
    { value: "Company2", label: "Company2" },
    { value: "Company3", label: "Company3" },
  ];

  const defaultCompany = "Company1";

  const data = [
    {
      name: "Hour 1",
      businessPercentage: 80,
      scale: 100,
    },
    {
      name: "Hour 2",
      businessPercentage: 70,
    },
    {
      name: "Hour 3",
      businessPercentage: 20,
    },
    {
      name: "Hour 4",
      businessPercentage: 45,
    },
    {
      name: "Hour 5",
      businessPercentage: 23,
    },
    {
      name: "Hour 6",
      businessPercentage: 60,
    },
    {
      name: "Hour 7",
      businessPercentage: 40,
    },
    {
      name: "Hour 8",
      businessPercentage: 20,
    },
  ];

  const project1Content = (
    <Box minWidth="100%" maxWidth="100%">
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
          <Bar name="Traffic" dataKey="businessPercentage" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );

  const project1Text = (
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
    <Dev2View
      projectData={projectData}
      options={listOfCompanies}
      defaultValue={defaultCompany}
    />
  );
};

export default Dev2Container;
