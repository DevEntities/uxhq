// Chat API Service
// Handles all communication with the backend chat endpoint

const API_BASE_URL = 'https://bk.uxhq.site';

/**
 * Chat API Service Class
 * Manages HTTP requests to the chat endpoint
 */
class ChatApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * Send a chat message to the backend
   * @param {string} userId - Unique identifier for the user
   * @param {string} userInput - The user's message
   * @returns {Promise<Object>} Chat response containing history, bot_message, and context
   */
  async sendMessage(userId, userInput) {
    try {
      const response = await fetch(`${this.baseURL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          user_input: userInput,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  /**
   * Test connection to the backend
   * @returns {Promise<boolean>} True if connection is successful
   */
  async testConnection() {
    try {
      const response = await fetch(`${this.baseURL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 'test_connection',
          user_input: 'Hello, testing connection',
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }
}

// Create and export a singleton instance
const chatApiService = new ChatApiService();
export default chatApiService;

/**
 * Generate a unique user ID
 * This creates a random UUID-like string for identifying users
 * @returns {string} Unique user identifier
 */
export function generateUserId() {
  // Generate a simple UUID-like string
  return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
}

/**
 * Get or create user ID from localStorage
 * This ensures the same user gets the same ID across sessions
 * @returns {string} User identifier
 */
export function getUserId() {
  let userId = localStorage.getItem('uxhq_user_id');
  
  if (!userId) {
    userId = generateUserId();
    localStorage.setItem('uxhq_user_id', userId);
  }
  
  return userId;
}

/**
 * Clear user ID from localStorage (for testing or reset)
 */
export function clearUserId() {
  localStorage.removeItem('uxhq_user_id');
}