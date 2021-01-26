import Dexie from 'dexie'

// define the data type for saving to IndexedDB
export interface MemoRecord {
    datetime: string
    title: string
    text: string
}

// instance of Dexie, named DBname 'markdown-editor'
const database = new Dexie('markdown-editor')

// table
database.version(1).stores({ memos: '&datetime' })

// data name(table and index)
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

export const putMemo = async (title: string, text: string) : Promise<void> => {
    // save to  IndexedDB
    const datetime = new Date().toISOString()
    await memos.put({ datetime, title, text })
}