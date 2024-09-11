import { type LanguageKeyType } from 'data/contexts/lang/useLangContext.types';

class Distance {
  /**
   * Recebe a distância em metros e retorna uma string com a distância formatada
   * @param distance Distância em metros
   * @param currentLangKey Idioma da aplicação utilizado no momento
   * @returns A distância junto a unidade de medida, metros ou quilômetros, com separador decimal segundo o idioma
   * @example format(900, 'en') -> '900 m'
   * @example format(12300, 'en') -> '12.3 km'
   * @example format(12300, 'pt') -> '12,3 km'
   */
  format(distance: number, currentLangKey: LanguageKeyType): string {
    let distanceString;

    if (distance < 1000) {
      distanceString = `${distance} m`;
    } else {
      distanceString = `${distance / 1000} km`;
    }

    if (currentLangKey !== 'en') {
      return distanceString.replace('.', ',');
    }

    return distanceString;
  }
}

export default new Distance();
