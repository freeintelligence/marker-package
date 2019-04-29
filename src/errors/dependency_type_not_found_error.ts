export class DependencyTypeNotFoundError extends Error {
  constructor() {
    super('The type of dependency is invalid (strict mode).')
  }
}
