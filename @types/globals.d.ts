interface PostEvent {
  queryString: string
  parameter: { [index: string]: string }
  parameters: { [index: string]: [string] }
  contentLenth: number
  postData: {
    length: number
    type: 'text/plain' | 'text/csv' | 'text/javascript' | 'text/xml' // ざっと使いそうなもの
    contents: string
    name: string
  }
}
