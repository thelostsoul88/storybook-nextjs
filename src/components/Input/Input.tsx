"use client";
import React from "react";
import { useId, useState } from "react";
import styles from "./Input.module.css";

export interface InputProps {
  type?: "text" | "password" | "number";
  value?: string;
  placeholder?: string;
  clearable?: boolean;
  onChange?: (v: string) => void;
  label?: string;
  id?: string;
  disabled?: boolean;
}

export const Input = ({
  type = "text",
  value = "",
  placeholder,
  clearable = false,
  onChange,
  label,
  id,
  disabled = false,
}: InputProps) => {
  const reactId = useId();
  const inputId = id || `inp-${reactId}`;
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    onChange?.("");
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <label className={styles.wrapper} htmlFor={inputId}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.box}>
        <input
          id={inputId}
          disabled={disabled}
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className={disabled ? styles.disabled : ""}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.icon}
            aria-label={showPassword ? "Hide password" : "Show password"}
            title={showPassword ? "Hide password" : "Show password"}
            disabled={disabled}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
        {clearable && inputValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.iconRight}
            aria-label="Clear"
            title="Clear"
          >
            ✖
          </button>
        )}
      </div>
    </label>
  );
};
