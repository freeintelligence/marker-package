import { Dependencies } from './'
import { DependencyTypeNotFoundError } from './errors'

describe('Dependencies instance', () => {

  const dependencies = new Dependencies()

  test('The dependence is added', () => {
    dependencies.setTypes(['TYPE_ONE', 'TYPE_TWO'])
    dependencies.add('dependence1', '1.0.0', 'TYPE_ONE')

    expect(dependencies.getDependencies()).toEqual({'dependence1':'1.0.0'})
  })

  test('The type of dependency is invalid', () => {
    dependencies.setTypes(['TYPE_ONE', 'TYPE_TWO'])
    
    expect(() => dependencies.add('dependence1', '1.0.0')).toThrow(new DependencyTypeNotFoundError())
  })
})
