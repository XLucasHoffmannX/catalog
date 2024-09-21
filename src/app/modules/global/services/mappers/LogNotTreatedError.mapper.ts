import {
  type ILogNotTreatedErrorPayload,
  type IPersistenceLogNotTreatedError
} from 'data/modules/global';

class LogNotTreatedErrorMapper {
  toPersistence(
    domainPayload: ILogNotTreatedErrorPayload
  ): IPersistenceLogNotTreatedError {
    return {
      user_id: domainPayload.userId || '',
      event_description: domainPayload.eventDescription,
      error: domainPayload.error,
      platform: domainPayload.platform,
      timestamp: domainPayload.timestamp,
      company_id: domainPayload.companyId || '',
      url: domainPayload.url,
      web: domainPayload.web
    };
  }
}

export default new LogNotTreatedErrorMapper();
