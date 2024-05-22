import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import fs from 'node:fs'
import { normalize } from 'node:path'

type UploadPathType = 'content' | 'profile' | 'artwork' | 'display_cut'

export default class UploadService {
  static async upload(file: MultipartFile | null, path: UploadPathType = 'profile') {
    if (!file) return null
    const newName = `${cuid()}.${file.extname}`
    await file.move(app.makePath(path), {
      name: newName,
    })
    return `${path}/` + newName
  }

  static async deleteFile(path: string) {
    const normalizedPath = normalize(path)
    const filePath = app.makePath(normalizedPath)
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err: any) => {
      if (!err) {
        // File exists, so delete it
        fs.unlink(filePath, (error: any) => {
          if (error) {
            console.error('Error deleting file:', error)
          } else {
            console.log('File deleted successfully')
          }
        })
      } else {
        console.error('File does not exist or cannot be accessed')
      }
    })
  }
}
