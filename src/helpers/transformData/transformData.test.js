import transformData from './transformData'

const nonArray = {}

const data = [
  {"name": "Andy", "id": 1},
  {"name": "George", "id": 2},
]

const expectedTransformedData = [
  {key: 1, value: 'Andy', text: 'Andy'},
  {key: 2, value: 'George', text: 'George'},
]

describe('transformData()', () => {
  it('should return an error string if the data is not an array', () => {
    const output = transformData(nonArray)
    expect(output).toBe('Input not an array')
  })

  it('should return a transformed array of objects with new keys', () => {
    const output = transformData(data)
    expect(output).toEqual(expectedTransformedData)
  })
})
