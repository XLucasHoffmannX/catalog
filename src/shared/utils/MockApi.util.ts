import { faker } from '@faker-js/faker';

class MockApi {
  /** Retorna um dado mockado simulando um tempo de request com o setTimeout */
  async getData<T extends object | null>(value: T, delay = 1000): Promise<T> {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
          resolve(value);
        } else {
          reject(
            new Error(
              'Nenhum valor atribuído para esta chave dos dados de mockados.'
            )
          );
        }
      }, delay);
    });
  }

  /** Retorna um uuid fake */
  fakeUuid(): string {
    return (Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000).toString();
  }

  async sleep(time = 500): Promise<unknown> {
    return await new Promise(resolve => setTimeout(resolve, time));
  }

  /**
   * Faz uma request simulada e retorna os dados de resposta fornecidos ou lança um erro.
   *
   * @template ResponseData - Tipo dos dados de resposta esperados.
   * @param {ResponseData} responseData - Os dados de resposta a serem retornados na simulação.
   * @param {object} [options] - Opções para configurar a simulação da request.
   * @param {number} [options.successProbability=0.9] - A probabilidade de sucesso da request simulada (valor entre 0 e 1).
   * @param {number} [options.sleep=2000] - Tempo (em milissegundos) para aguardar antes de processar a request simulada.
   * @returns {Promise<ResponseData>} - Retorna uma promessa que resolve com os dados de resposta fornecidos em caso de sucesso, ou lança um erro em caso de falha.
   *
   * @throws {Error} - Lança um erro simulado com uma mensagem indicando a origem do erro.
   */
  async makeRequest<ResponseData>(
    responseData: ResponseData,
    options?: {
      successProbability?: number;
      sleep?: number;
    }
  ): Promise<ResponseData> {
    await this.sleep(options?.sleep ?? 2000);

    if (faker.datatype.boolean(options?.successProbability ?? 0.9)) {
      return responseData;
    }
    try {
      throw new Error();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      try {
        const mockError = e?.stack?.split('at ')?.[3]?.split(' ')?.[1];

        throw new Error(`${mockError} - Error`);
      } catch (e: any) {
        throw new Error('makeRequestMock - Error', e);
      }
    }
  }
}

export default new MockApi();
