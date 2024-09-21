import {
  type IPersistenceViaCepAddress,
  type IViaCepAddress
} from 'data/modules/global';

class GetViaCepAddressByPostalCodeMapper {
  toDomain(persistenceAddress: IPersistenceViaCepAddress): IViaCepAddress {
    return {
      postalCode: persistenceAddress.cep,
      street: persistenceAddress.logradouro,
      complement: persistenceAddress.complemento,
      neighborhood: persistenceAddress.bairro,
      state: persistenceAddress.uf,
      city: persistenceAddress.localidade
    };
  }
}

export default new GetViaCepAddressByPostalCodeMapper();
