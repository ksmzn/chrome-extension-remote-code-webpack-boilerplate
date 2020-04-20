import * as Sentry from '@sentry/browser';

import { config } from './config';

Sentry.init(config.config.sentry);

export { Sentry };
