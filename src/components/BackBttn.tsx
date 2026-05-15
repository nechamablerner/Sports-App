import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackBttn.module.css";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate("/")}>
      &larr; Back
    </button>
  );
};

export default BackButton;
