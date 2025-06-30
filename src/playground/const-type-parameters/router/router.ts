export type Route = {
  name: string;
  path: string;
  params: readonly string[];
};

function buildRouter<const T extends Route>(routes: T[]) {
  const getRoute = <
    RouteName extends T['name'],
    RouteParams extends Extract<T, {name: RouteName}>['params'],
  >(
    name: RouteName,
    params: {[key in RouteParams[number]]: string},
  ): string => {
    const route = routes.find(n => n.name && n.name === name)!.path;
    Object.entries<string>(params).forEach(([key, value]) => {
      route.replace(`${key}`, value);
    });

    return route;
  };

  return {getRoute};
}

const {getRoute} = buildRouter([
  {
    name: 'login',
    path: '/login',
    params: [],
  },
  {
    name: 'session',
    path: '/sessions/:authType',
    params: ['authType'],
  },
]);

// Al estar todo tipado el compilador fallara si no es uno de los valores esperados
const route = getRoute('session', {authType: 'authenticated'});
