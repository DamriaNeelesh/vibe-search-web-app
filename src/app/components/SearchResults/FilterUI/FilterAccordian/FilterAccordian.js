import { Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import BrandFilters from "../../FiltersAndHistory/BrandFilters/BrandFilters";
const FilterAccordion = ({
  setSelectedBrands,
  selectedBrands,
  resetSearchResults,
  brands,
  onApplyFilter,
  onClose
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [priceRange, setPriceRange] = useState([10, 1050]); // State for price range
  const [isBrandSelected, setIsBrandSelected] = useState(false); // Track if any brand is selected
  const [tempSelectedBrands, setTempSelectedBrands] = useState(selectedBrands); // Temporary state

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  const handleBrandChange = (brands) => {
    setSelectedBrands(brands);
    // resetSearchResults(); 
    setIsBrandSelected(brands.length > 0); // Update brand selection state

  };
  const applyFilter = () => {
    setSelectedBrands(tempSelectedBrands); // Update the actual selected brands
    onApplyFilter(); // Trigger the filter application
  };
  // const handleClearFilters = () => {
  //   setSelectedBrands([]);
  //   resetSearchResults();
  // };

  return (
    <Accordion allowToggle fontFamily={"Figtree, sans-serif"}>
      <AccordionItem>
        <h2>
          <AccordionButton height={{ md: "3.4rem", base: "2rem" }}>
            <Box
              fontWeight={"400"}
              flex="1"
              fontSize={{ md: "1.2rem", base: "0.85rem" }}
              lineHeight={"22px"}
              color={"#222222"}
              textAlign="left"
            >
              Brands
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel >
          <BrandFilters
            selectedBrands={selectedBrands}
            setSelectedBrands={handleBrandChange}
            brands={brands}
            onApplyFilter={onApplyFilter}
            onClose={onClose} 
          />
        </AccordionPanel>
      </AccordionItem>
      {/* <Button onClick={handleClearFilters} variant="outline" size="sm">
          Clear Filters
        </Button> */}
 {/* {isBrandSelected && (
        <Button onClick={onApplyFilter} variant="solid" colorScheme="blue" mt={4}>
          Apply Filter
        </Button>
      )} */}
      {/* <AccordionItem>
          <h2>
            <AccordionButton height={{ md: "3.4rem", base: "2rem" }}>
              <Box
                fontWeight={"400"}
                flex="1"
                fontSize={{ md: "1.2rem", base: "0.65rem" }}
                lineHeight={"22px"}
                color={"#222222"}
                textAlign="left"
              >
                History
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <HistoryComponent
              setSelectedBrands={setSelectedBrands}
              selectedBrands={selectedBrands}
            />
          </AccordionPanel>
        </AccordionItem> */}

      <AccordionItem>
        <h2>
          <AccordionButton height={{ md: "3.4rem", base: "2rem" }}>
            <Box
              fontWeight={"400"}
              flex="1"
              fontSize={{ md: "1.2rem", base: "0.85rem" }}
              lineHeight={"22px"}
              color={"#222222"}
              textAlign="left"
            >
              Price
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <RangeSlider
            defaultValue={[10, 1050]}
            min={10}
            max={1050}
            step={10}
            mt={2}
            onChange={handlePriceChange}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack bg="purple.500" />
            </RangeSliderTrack>
            <RangeSliderThumb borderColor={"black"} index={0} />
            <RangeSliderThumb borderColor={"black"} index={1} />
          </RangeSlider>
          <Text>
            ${priceRange[0]} - ${priceRange[1]}
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterAccordion;
