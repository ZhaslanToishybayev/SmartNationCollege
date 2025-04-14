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
 * Asynchronously subscribes a user to the newsletter.
 *
 * @param subscription The subscription data containing the user's email.
 * @returns A promise that resolves to true if the subscription was successful, false otherwise.
 */
export async function subscribeToNewsletter(subscription: NewsletterSubscription): Promise<boolean> {
  // TODO: Implement this by calling an API.
  console.log("Subscribing to newsletter with email: ", subscription.email);
  return true;
}
