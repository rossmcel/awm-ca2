import React from "react";
import { Box } from "@chakra-ui/react";
import { DropDownLayout } from "../../shared/components/drop-down-layout";
import { ChartTileButtons } from "../../shared/components/chart-tile-buttons";

interface Dev2ViewProps {
  projectData: any;
  options: any;
  defaultValue: string;
}

export const Dev2View: React.FC<Dev2ViewProps> = ({
  projectData,
  options,
  defaultValue,
}) => {
  return (
    <Box overflow="hidden" mt="3rem">
      <Box
        display={{ base: "block", sm: "initial" }}
        width="80%"
        ml="auto"
        mr="auto"
        mt="0.2rem"
        borderBottom="1px solid lightgrey"
      >
        <DropDownLayout
          originalComponentTags={projectData.projects}
          options={options}
          defaultValue={defaultValue}
        >
          <ChartTileButtons
            heading={projectData.projects[0].projectHeading}
            subheading={projectData.projects[0].projectSubHeading}
            chart={projectData.projects[0].nonTextContent}
          >
            {projectData.projects[0].textContent}
          </ChartTileButtons>
          <ChartTileButtons
            heading={projectData.projects[1].projectHeading}
            subheading={projectData.projects[1].projectSubHeading}
            chart={projectData.projects[1].nonTextContent}
          >
            {projectData.projects[1].textContent}
          </ChartTileButtons>
          <ChartTileButtons
            heading={projectData.projects[2].projectHeading}
            subheading={projectData.projects[2].projectSubHeading}
            chart={projectData.projects[2].nonTextContent}
          >
            {projectData.projects[2].textContent}
          </ChartTileButtons>
        </DropDownLayout>
      </Box>
    </Box>
  );
};

export default Dev2View;
