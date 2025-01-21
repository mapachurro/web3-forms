import { Model, Text, } from '@seedprotocol/sdk';

@Model
export class Feedback {
  @Text() name!: string;           // User's name
  @Text() comment!: string;        // User's comment
  @Text() isPositive!: boolean; // Boolean for upvote/downvote
}

const endpoints = {
  filePaths: '/api/seed/migrations',
  files: '/app-files',
}

const models = {
  Feedback,
}

const arweaveDomain = 'arweave.net'

export { models, endpoints, arweaveDomain }

export default { models, endpoints, arweaveDomain }

