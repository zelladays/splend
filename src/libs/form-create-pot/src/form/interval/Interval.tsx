import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useTheme } from "../../../../../app/App";
import { FormProps } from "../types";
import * as React from "react";

const SAVING_MAXIMUM = 350;

export const Interval = ({ errors, register, setValue }: FormProps) => {
  const { textStyles, colors } = useTheme();
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [amountPerIntervalValue, setAmountPerIntervalValue] = React.useState(1);

  const onAmountPerIntervalChange = React.useCallback(
    (value: number) => {
      setAmountPerIntervalValue(value);
      setValue?.("amountPerInterval", value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [setValue]
  );

  return (
    <Flex flexDirection="column" gap="6">
      <Text {...textStyles.body2_700} color={colors.text_primary}>
        Amount per interval
      </Text>
      <Slider
        {...register("amountPerInterval", {
          required: "Required field",
          value: undefined,
        })}
        defaultValue={SAVING_MAXIMUM / 2}
        min={10}
        max={SAVING_MAXIMUM}
        step={10}
        onChange={onAmountPerIntervalChange}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack borderRadius={0} height="6px">
          <SliderFilledTrack bgColor={colors.brand_dark_grey} />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="bottom"
          isOpen={showTooltip}
          label={`£${amountPerIntervalValue}`}
        >
          <SliderThumb boxSize={4} />
        </Tooltip>
      </Slider>
      {errors?.amountPerInterval ? (
        <Text {...textStyles.body3_700} color={colors.error}>
          {errors.amountPerInterval.message}
        </Text>
      ) : null}
    </Flex>
  );
};
