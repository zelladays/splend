import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import * as React from "react";

type DeletePotModalProps = {
  potId: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete?: (id: string) => void;
};

export const DeletePotModal = React.memo(
  ({ potId, isOpen, onDelete, onClose }: DeletePotModalProps) => {
    const handleDelete = React.useCallback(() => {
      onDelete?.(potId);
      onClose();
    }, [onDelete, onClose, potId]);

    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete pot</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>Are you sure you would like to delete this pot?</div>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
);
