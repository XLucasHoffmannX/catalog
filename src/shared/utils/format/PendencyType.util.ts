import { type LanguageKeyType } from 'data/contexts/lang/useLangContext.types';

import { type langJSON } from 'shared/lang';

class PendencyType {
  format(
    type: string,
    lang: typeof langJSON,
    currentLangKey: LanguageKeyType
  ): string {
    switch (type) {
      case 'WITHDRAWAL':
        return lang.cards.global.withdrawal_fee_pendency[currentLangKey];
      case 'IOF':
        return lang.cards.global.iof_fee_pendency[currentLangKey];
      default:
        return lang.cards.global.fee_pendency[currentLangKey];
    }
  }
}

export default new PendencyType();
