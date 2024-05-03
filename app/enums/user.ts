export enum UserCareers {
  PRODUCER = 'producer',
  ARTIST = 'artist',
  MUSIC_LOVER = 'music-lover',
  RECORD_LABEL = 'record-label',
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export enum UserSocialHandles {
  X = 'x',
  TIKTOK = 'tiktok',
  INSTAGRAM = 'instagram',
}

export type SocialHandleType = {
  name: string
  link: string
}
