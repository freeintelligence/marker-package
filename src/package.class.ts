/*
 * Package class
 * */
export class Package {

  name: string
  version: string
  description: string
  main: string
  scripts: { [name: string]: string }
  author: string | { name: string, email: string }
  license: string
  keywords: string[]
  repository: { type: string, url: string }
  bugs: { url: string }
  homepage: string
  dependencies: any
  devDependencies: any

  constructor() {

  }

  toJSON(): object {
    const json = {}

    if(typeof this.name == 'string') json['name'] = this.name;
    if(typeof this.version == 'string') json['version'] = this.version;
    if(typeof this.description == 'string') json['description'] = this.description;
    if(typeof this.main == 'string') json['main'] = this.main;
    if(typeof this.scripts == 'object' && this.scripts !== null) json['scripts'] = this.scripts;
    if(typeof this.author == 'string' || (typeof this.author == 'object' && this.author !== null)) json['author'] = this.author;
    if(typeof this.license == 'string') json['license'] = this.license;
    if(this.keywords instanceof Array) json['keywords'] = this.keywords;
    if(typeof this.repository == 'object' && this.repository !== null) json['repository'] = this.repository;
    if(typeof this.bugs == 'object' && this.bugs !== null) json['bugs'] = this.bugs;
    if(typeof this.homepage == 'string') json['homepage'] = this.homepage;

    return json
  }

  toString(beauty: boolean = true): string {
    return beauty ? JSON.stringify(this.toJSON(), null, 2) : JSON.stringify(this.toJSON())
  }

}
