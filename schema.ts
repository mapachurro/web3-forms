import { Model, Text, Boolean } from '@seedprotocol/sdk';

@Model
export class Feedback {
  @Text() name!: string;           // User's name
  @Text() comment!: string;        // User's comment
  @Boolean() isPositive!: boolean; // Boolean for upvote/downvote
}

// Export other models here if needed in the future
export default { Feedback };
