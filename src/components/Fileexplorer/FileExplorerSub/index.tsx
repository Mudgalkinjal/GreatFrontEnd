import { useState } from 'react'

type FileItem = {
  id: number
  name: string
  children?: FileItem[]
}

type iProp = {
  data: FileItem[]
}

export default function FileExplorerSub({ data }: iProp) {
  function getClosedFolders(fileData: FileItem[]): number[] {
    const closedFolders: number[] = []
    function traverse(data: FileItem[]) {
      for (const item of data) {
        if (item.children) {
          closedFolders.push(item.id)
          traverse(item.children)
        }
      }
    }
    traverse(fileData)
    return closedFolders
  }

  const [closed, setClosed] = useState<number[]>(getClosedFolders(data))

  function toggleFolder(id: number) {
    if (closed.includes(id)) {
      setClosed(closed.filter((folderId) => folderId !== id))
    } else {
      setClosed([...closed, id])
    }
  }

  function parseData(fileData: FileItem[], depth: number = 0) {
    const result: JSX.Element[] = []
    const indent = depth > 0 ? ' '.repeat(depth * 2) : ''

    for (const elem of fileData) {
      const isFolderClosed = closed.includes(elem.id)
      if (elem.children) {
        result.push(
          <div key={elem.id} style={{ marginLeft: `${depth * 10}px` }}>
            <span
              style={{ cursor: 'pointer', userSelect: 'none' }}
              onClick={() => toggleFolder(elem.id)}
            >
              {indent}
              {isFolderClosed ? '+' : '−'} {elem.name}
            </span>
            {!isFolderClosed && (
              <div style={{ marginLeft: '10px' }}>
                {parseData(elem.children, depth + 1)}
              </div>
            )}
          </div>
        )
      } else {
        result.push(
          <div key={elem.id} style={{ marginLeft: `${depth * 10}px` }}>
            {indent} {elem.name}
          </div>
        )
      }
    }

    return result
  }

  return <div>{parseData(data, 0)}</div>
}
