import { DependencyTypeNotFoundError } from './errors'

/*
 * Dependencies
 * */
export class Dependencies {

  private types: string[] // Dependencies type
  private versions: { [name: string]: string } // Package versions (automatic detection)
  private strict_dependencies: { [type: string]: { name: string, version: string } } // Container
  private nonstrict_dependencies: { [name: string]: string } // Container

  constructor(types: string[] = null) {
    this.restart()
    this.setTypes(types)
  }

  /*
   * Restart
   * */
  restart() {
    this.types = undefined
    this.versions = { }
    this.strict_dependencies = { }
    this.nonstrict_dependencies = { }
  }

  /*
   * Strict mode (the dependencies must have a mandatory type)
   * */
  strictMode(): boolean {
    return this.types instanceof Array
  }

  /*
   * Set types
   * */
  setTypes(types: string[] = null) {
    this.types = types
    return this
  }

  /*
   * Set package versions to automatic detection
   * */
  setVersions(versions: { [name: string]: string }) {
    this.versions = versions
    return this
  }

  /*
   * Know if a package is in the dependencies
   * */
  exists(name: string, version?: string, by_type?: string): boolean {
    if(typeof by_type == 'string' && this.strict_dependencies[by_type].name == name && (typeof version == 'string' && version.length ? this.strict_dependencies[by_type].version == version : true)) {
      return true
    }

    if(this.strictMode()) {
      for(let type in this.strict_dependencies) {
        if(this.strict_dependencies[type].name == name && (typeof version == 'string' && version.length ? this.strict_dependencies[type].version == version : true)) {
          return true
        }
      }
    }
    else {
      if(typeof this.nonstrict_dependencies[name] !== 'undefined') {
        return true
      }
    }

    return false
  }

  /*
   * Add a dependency
   * */
  add(name: string, version?: string, type?: string) {
    if(this.strictMode() && ((typeof type == 'string' && this.types.indexOf(type) === -1) || typeof type !== 'string')) {
      throw new DependencyTypeNotFoundError()
    }

    version = typeof version == 'string' ? version : (typeof this.getVersionFor(name) == 'undefined' ? 'latest' : this.getVersionFor(name))

    if(this.exists(name)) return;

    if(this.strictMode()) {
      this.strict_dependencies[type] = { name: name, version: version }
    }
    else {
      this.nonstrict_dependencies[name] = version
    }
  }

  /*
   * Get version for a package
   * */
  getVersionFor(package_name: string): string {
    for(let name in this.versions) {
      if(package_name === name) {
        return this.versions[name]
      }
    }
    return undefined
  }

}
