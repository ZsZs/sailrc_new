import { LanguageConfig, LanguageDefinition } from '@processpuzzle/widgets';

export class RuntimeConfiguration implements LanguageConfig{
  DEFAULT_LANGUAGE?: string;
  AVAILABLE_LANGUAGES?: LanguageDefinition[];
  readonly PIPELINE_STAGE?: 'dev' | 'ci' | 'stage' | 'prod';
  readonly FIREBASE_CONFIG?: object;
}
