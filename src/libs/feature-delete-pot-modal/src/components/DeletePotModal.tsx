import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../..";
import { hexToRGB } from "../../../../utils";

type DeletePotModalProps = {
  potId: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete?: (id: string) => void;
};

export const DeletePotModal = React.memo(
  ({ potId, isOpen, onDelete, onClose }: DeletePotModalProps) => {
    const { colors, textStyles } = useTheme();

    const handleDelete = React.useCallback(() => {
      onDelete?.(potId);
      onClose();
    }, [onDelete, onClose, potId]);

    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent bgColor={colors.brand_lightgrey} color="white">
          <ModalHeader>Delete pot</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text {...textStyles.body2_400} color={colors.text_primary}>
              Are you sure you want to delete this pot? This action cannot be
              undone.
            </Text>
          </ModalBody>

          <ModalFooter gap="4">
            <Flex
              as="button"
              px="4"
              py="2"
              onClick={onClose}
              borderColor={colors.white}
              borderRadius={8}
              _hover={{
                bgColor: hexToRGB(colors.brand_dark_grey, 0.2),
              }}
            >
              Cancel
            </Flex>
            <Flex
              as="button"
              px="4"
              py="2"
              onClick={handleDelete}
              bgColor={colors.primary_button_negative}
              borderRadius={8}
              _hover={{
                bgColor: colors.primary_button_negative_hover,
              }}
            >
              Delete
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
);
