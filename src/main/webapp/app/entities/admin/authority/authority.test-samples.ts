import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'cafa654b-4a86-4794-a715-54e8bc67f74c',
};

export const sampleWithPartialData: IAuthority = {
  name: '5e17f41e-7a6e-4241-9a5e-0d9fc32bc6d3',
};

export const sampleWithFullData: IAuthority = {
  name: 'ccf00949-1f6e-4d00-940c-427d19704e49',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
