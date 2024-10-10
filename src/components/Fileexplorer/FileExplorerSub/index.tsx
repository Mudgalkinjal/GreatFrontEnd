type FileItem = {
  id: number
  name: string
  children?: FileItem[]
}

type iProp = {
  data: FileItem[]
}

export default function FileExplorerSub({ data }: iProp) {
  function parseData(fileData: FileItem[], depth: number = 0) {
    let result = ''
    const indent = depth > 0 ? ' '.repeat(depth) : ''
    for (const elem of fileData) {
      if (elem.children) {
        result += `${indent}${elem.name}${indent}[-]\n`
        result += parseData(elem.children, depth + 1)
      } else {
        result += `${indent}${elem.name}\n`
      }
    }
    return result
  }
  const res = parseData(data, 0)

  return <pre>{res}</pre>
}
