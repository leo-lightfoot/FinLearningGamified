import { observable, action, makeObservable } from "mobx";
import { STORAGE, GAME_SETTINGS } from "../constants";

/**
 * Game data store using MobX for state management
 * Includes persistence to localStorage
 */
class GameData {
  moneywiseXP = GAME_SETTINGS.INITIAL_MONEYWISE_XP;
  savings = GAME_SETTINGS.INITIAL_SAVINGS;
  transactions = [];
  decisionNumber = 0;

  constructor() {
    // Load saved data if available
    this.loadFromStorage();
    
    // Apply MobX observables and actions
    makeObservable(this, {
      moneywiseXP: observable,
      savings: observable,
      transactions: observable,
      decisionNumber: observable,
      reset: action,
      incrementMoneywiseXP: action,
      setMoneywiseXP: action,
      incrementSavings: action,
      setSavings: action,
      setTransactions: action,
      incrementDecisionNumber: action,
      setDecisionNumber: action,
      saveToStorage: action,
      loadFromStorage: action,
    });
  }

  /**
   * Reset all game data to initial values
   */
  reset = () => {
    this.moneywiseXP = GAME_SETTINGS.INITIAL_MONEYWISE_XP;
    this.savings = GAME_SETTINGS.INITIAL_SAVINGS;
    this.transactions = [];
    this.decisionNumber = 0;
    this.saveToStorage();
  };

  /**
   * Increment MoneyWise XP by the given delta
   * @param {number} delta - Amount to change
   */
  incrementMoneywiseXP = (delta) => {
    this.moneywiseXP += delta;
    this.saveToStorage();
  };

  /**
   * Set MoneyWise XP to a specific value
   * @param {number} moneywiseXP - New value
   */
  setMoneywiseXP = (moneywiseXP) => {
    this.moneywiseXP = moneywiseXP;
    this.saveToStorage();
  };

  /**
   * @deprecated Use incrementMoneywiseXP instead
   * Legacy method for backward compatibility
   */
  incrementCreditPower = (delta) => {
    this.incrementMoneywiseXP(delta);
  };

  /**
   * @deprecated Use setMoneywiseXP instead
   * Legacy method for backward compatibility
   */
  setCreditPower = (creditPower) => {
    this.setMoneywiseXP(creditPower);
  };

  /**
   * Increment savings by the given delta
   * @param {number} delta - Amount to change
   */
  incrementSavings = (delta) => {
    this.savings += delta;
    this.saveToStorage();
  };

  /**
   * Set savings to a specific value
   * @param {number} savings - New value
   */
  setSavings = (savings) => {
    this.savings = savings;
    this.saveToStorage();
  };

  /**
   * Set transactions list
   * @param {Array} transactions - New transactions
   */
  setTransactions = (transactions) => {
    this.transactions = transactions;
    this.saveToStorage();
  };

  /**
   * Increment decision number
   * @param {number} increment - Amount to increment by
   */
  incrementDecisionNumber = (increment = 1) => {
    this.decisionNumber += increment;
    this.saveToStorage();
  };

  /**
   * Set decision number to a specific value
   * @param {number} decisionNumber - New value
   */
  setDecisionNumber = (decisionNumber) => {
    this.decisionNumber = decisionNumber;
    this.saveToStorage();
  };

  /**
   * Save current state to localStorage
   */
  saveToStorage = () => {
    try {
      const data = {
        moneywiseXP: this.moneywiseXP,
        savings: this.savings,
        transactions: this.transactions,
        decisionNumber: this.decisionNumber
      };
      localStorage.setItem(STORAGE.GAME_DATA_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save game data:', error);
    }
  };

  /**
   * Load state from localStorage
   */
  loadFromStorage = () => {
    try {
      const savedData = localStorage.getItem(STORAGE.GAME_DATA_KEY);
      if (savedData) {
        const data = JSON.parse(savedData);
        this.moneywiseXP = data.moneywiseXP ?? data.creditPower ?? GAME_SETTINGS.INITIAL_MONEYWISE_XP;
        this.savings = data.savings ?? GAME_SETTINGS.INITIAL_SAVINGS;
        this.transactions = data.transactions || [];
        this.decisionNumber = data.decisionNumber || 0;
      }
    } catch (error) {
      console.error('Failed to load game data:', error);
    }
  };

  /**
   * @deprecated This is a getter for backward compatibility
   */
  get creditPower() {
    return this.moneywiseXP;
  }
}

const data = new GameData();

export default data;
