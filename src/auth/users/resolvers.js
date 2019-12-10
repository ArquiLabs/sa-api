console.log("Prueba de entrada en resolver.js");
import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
console.log("Valor de la variable URL  en resolver.js: " + URL);

const resolvers = {
	Query: {
		allUsers: (_, {}) =>
		generalRequest(`${URL}/`, 'GET'),
		userById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL}/${id}`, 'PUT', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
