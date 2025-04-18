import { apiClient } from './api/client';
import { endpoints } from './api/endpoints';

/**
 * Represents the data needed to subscribe a user to a newsletter.
 */
export interface NewsletterSubscription {
  /**
   * The email address of the user subscribing to the newsletter.
   */
  email: string;
}

/**
 * Response from the newsletter subscription API.
 */
export interface SubscribeResponse {
  success: boolean;
  message: string;
}

/**
 * Newsletter service for handling newsletter subscriptions.
 */
export const newsletterService = {
  /**
   * Asynchronously subscribes a user to the newsletter.
   *
   * @param email The email address of the user subscribing to the newsletter.
   * @returns A promise that resolves to the subscription response.
   */
  async subscribe(email: string): Promise<SubscribeResponse> {
    try {
      return await apiClient.post<SubscribeResponse>(endpoints.newsletter.subscribe, { email });
    } catch (error) {
      console.error('Failed to subscribe to newsletter:', error);
      return { success: false, message: 'Failed to subscribe to newsletter' };
    }
  },
};

/**
 * Legacy function for backward compatibility.
 * @deprecated Use newsletterService.subscribe instead.
 */
export async function subscribeToNewsletter(subscription: NewsletterSubscription): Promise<boolean> {
  console.log("Subscribing to newsletter with email: ", subscription.email);
  const response = await newsletterService.subscribe(subscription.email);
  return response.success;
}
