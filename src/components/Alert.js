import React, { useEffect, useRef, useState } from "react";
import '../styles/alert.css'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { faLess, faSlack } from "@fortawesome/free-brands-svg-icons";
import useSubmit from "../hooks/useSubmit";
import { Prev } from "react-bootstrap/esm/PageItem";

const Alert = () => {
  
  const {isOpen, type, message, onClose} = useAlertContext();
  const cancelRef = React.useRef();
  const isSuccesses = type ==='success'
  // console.log("type in alert: " , type)

  
  return (
    <div>
     
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay className="text-white">
          <AlertDialogContent className={`${isSuccesses? "bg-success" :"bg-danger"} alert-dialog `}>
            
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {isSuccesses? "All good" : "Oops !!"}
            </AlertDialogHeader>

            <AlertDialogBody>
              {message} 
            </AlertDialogBody>

          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

    </div>
  );
};

export default Alert;
