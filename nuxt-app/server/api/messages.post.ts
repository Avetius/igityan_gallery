import { writeFile, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const storageDir = join(process.cwd(), 'server', 'storage')
  const storageFile = join(storageDir, 'messages.json')

  if (!existsSync(storageDir)) {
    await writeFile(storageFile, '[]', { encoding: 'utf-8' })
  }

  let messages = []
  try {
    const content = await readFile(storageFile, { encoding: 'utf-8' })
    messages = JSON.parse(content || '[]')
  } catch (e) {
    // ignore parse errors and start fresh
    messages = []
  }

  const entry = {
    id: Date.now(),
    name: body.name || '',
    email: body.email || '',
    subject: body.subject || '',
    message: body.message || '',
    createdAt: new Date().toISOString()
  }

  messages.push(entry)

  await writeFile(storageFile, JSON.stringify(messages, null, 2), { encoding: 'utf-8' })

  return { success: true, entry }
})
