import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 29322,
  login: 'Y@bi83dr\\7Wjr0kd\\JUD5\\FLV\\7S9nCz\\v7u',
};

export const sampleWithPartialData: IUser = {
  id: 12683,
  login: 'LtnBM',
};

export const sampleWithFullData: IUser = {
  id: 19637,
  login: 'k',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
