/**
 * Page is laid out as follows:
 * A Parent Component - SideNavigation
 *  - This is the component that renders a clickable menu to the left with
 *    a section for displaying content to the left, as well as a section containing
 *    a drop down at the top.
 *  Within the SideNavigation Component, is the DropDownLiftState Component
 *  - This allows for an item to be selected from the dropdown menu and then passes
 *    that value up to this component.
 */
import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { SideNavigationLayout } from "../../shared/components/side-navigation-layout";
import { DropDownLayoutLiftState } from "../../shared/components/drop-down-layout-lift-state";
import { ChartTileButtons } from "../../shared/components/chart-tile-buttons";
import { ChartContentBottom } from "../../shared/components/chart-content-bottom";

interface DevViewProps {
  baseURL: string;
  data: any;
  options: any;
  defaultValue: string;
}

export const DevView: React.FC<DevViewProps> = ({
  baseURL,
  data,
  options,
  defaultValue,
}) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleInputChange = (inputValue: any) => {
    setSelected(inputValue.value);
  };

  const pages = {
    pages: [
      {
        pageLink: baseURL + "#overview",
        pageName: "Overview",
      },
      {
        pageLink: baseURL + "#traffic",
        pageName: "Traffic",
      },
      {
        pageLink: baseURL + "#offers",
        pageName: "Offers",
      },
    ],
  };

  return (
    <Box overflow="hidden">
      <SideNavigationLayout content={pages}>
        <DropDownLayoutLiftState
          originalComponentTags={data.projects}
          options={options}
          selected={selected}
          handleInputChange={handleInputChange}
        >
          <ChartTileButtons
            heading={data.projects[0].projectHeading}
            subheading={data.projects[0].projectSubHeading}
            chart={data.projects[0].nonTextContent}
          >
            {data.projects[0].textContent}
          </ChartTileButtons>
          <ChartTileButtons
            heading={data.projects[1].projectHeading}
            subheading={data.projects[1].projectSubHeading}
            chart={data.projects[1].nonTextContent}
          >
            {data.projects[1].textContent}
          </ChartTileButtons>
          <ChartTileButtons
            heading={data.projects[2].projectHeading}
            subheading={data.projects[2].projectSubHeading}
            chart={data.projects[2].nonTextContent}
          >
            {data.projects[2].textContent}
          </ChartTileButtons>
        </DropDownLayoutLiftState>
        <DropDownLayoutLiftState
          originalComponentTags={data.projects}
          options={options}
          selected={selected}
          handleInputChange={handleInputChange}
        >
          <ChartContentBottom
            heading={data.projects[0].projectHeading}
            subheading={data.projects[0].projectSubHeading}
            chart={data.projects[0].nonTextContent2}
          >
            {data.projects[0].textContent2}
          </ChartContentBottom>
          <ChartTileButtons
            heading={data.projects[1].projectHeading}
            subheading={data.projects[1].projectSubHeading}
            chart={data.projects[1].nonTextContent}
          >
            {data.projects[1].textContent}
          </ChartTileButtons>
          <ChartTileButtons
            heading={data.projects[2].projectHeading}
            subheading={data.projects[2].projectSubHeading}
            chart={data.projects[2].nonTextContent}
          >
            {data.projects[2].textContent}
          </ChartTileButtons>
        </DropDownLayoutLiftState>
        <DropDownLayoutLiftState
          originalComponentTags={data.projects}
          options={options}
          selected={selected}
          handleInputChange={handleInputChange}
        >
          {data.projects[0].textContent3}
          <ChartTileButtons
            heading={data.projects[1].projectHeading}
            subheading={data.projects[1].projectSubHeading}
            chart={data.projects[1].nonTextContent}
          >
            {data.projects[1].textContent}
          </ChartTileButtons>
          <ChartTileButtons
            heading={data.projects[2].projectHeading}
            subheading={data.projects[2].projectSubHeading}
            chart={data.projects[2].nonTextContent}
          >
            {data.projects[2].textContent}
          </ChartTileButtons>
        </DropDownLayoutLiftState>
      </SideNavigationLayout>
    </Box>
  );
};

export default DevView;
