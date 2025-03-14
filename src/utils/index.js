/**
 * Utility functions for the Credit Decision Game
 */

/**
 * Extracts the base path from a location string
 * @param {string} location - The current location path
 * @returns {string} The base path
 */
export const getBasePath = location => {
  let parts = location.split("/");
  parts.pop();
  return parts.join("/");
};

/**
 * Determines if the environment is development
 * @returns {boolean} True if in development mode
 */
export const isDevelopment = () => {
  return process.env.REACT_APP_ENV === "development";
};

/**
 * Formats a currency value
 * @param {number} value - The value to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Calculates the next route based on current index and total decisions
 * @param {number} currentIndex - Current decision index
 * @param {number} totalDecisions - Total number of decisions
 * @returns {string} The next route path
 */
export const getNextRoute = (currentIndex, totalDecisions) => {
  return currentIndex >= totalDecisions - 1 ? "/" : `/${currentIndex + 1}`;
}; 