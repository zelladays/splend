import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useTheme } from "../../../../..";
import { FormProps } from "../types";
import * as React from "react";

export const Interval = ({ register, setValue }: FormProps) => {
  const { textStyles } = useTheme();
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [amountPerIntervalValue, setAmountPerIntervalValue] = React.useState(1);

  const onAmountPerIntervalChange = React.useCallback(
    (value: number) => {
      setAmountPerIntervalValue(value);
      setValue?.("amountPerInterval", value);
    },
    [setValue]
  );

  return (
    <Flex flexDirection="column" gap="3">
      <Text {...textStyles.body2_400} color="white">
        Amount per interval
      </Text>
      <Slider
        {...register("amountPerInterval")}
        defaultValue={10}
        min={10}
        max={350}
        step={10}
        onChange={onAmountPerIntervalChange}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`£${amountPerIntervalValue}`}
        >
          <SliderThumb boxSize={4} />
        </Tooltip>
      </Slider>
    </Flex>
  );
};
