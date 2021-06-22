export default function transformData(jsonArray) {
  // assuming that if the input is in an array
  // then the array is in this form:
  // [
  //   {"name": string, "id": number},
  //   ...
  // ]
  // 
  // To make this function more flexible
  // I would add in a 'schema' param which
  // would be an object in the form:
  // {
  //    key: key-in-array-representing-unique-property, (e.g. such as an ID number)
  //    value: key-in-array-representing-the-value-to-save-to-memory, (e.g. person's name)
  //    text: what-to-display-for-each-value-in-the-dropdown, (e.g. in our simple example, the name can also be used here)
  // }
  // there would be logic to map the values in the schema
  // to the required keys for the 3rd party dropdown lib
  if (Array.isArray(jsonArray)) {
    let transformedData = []
    jsonArray.map((arrayItem) => {
      let item = {}
      item.key = arrayItem.id
      item.value = arrayItem.name
      item.text = arrayItem.name
      transformedData.push(item)
      return item
    })
    return transformedData
  }
  return 'Input not an array'
}
