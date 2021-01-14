import { LumberjackLogPayload } from '../logs/lumberjack-log-payload';
import { LumberjackLog } from '../logs/lumberjack.log';

export interface LumberjackLogDriverLog<TPayload extends LumberjackLogPayload | void = void> {
  readonly formattedLog: string;
  readonly log: LumberjackLog<TPayload>;
}