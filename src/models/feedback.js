import { Model, Text, Boolean } from '@seedprotocol/sdk';

@Model
export class Feedback {
  @Text() name;
  @Text() comment;
  @Boolean() isPositive;
}
