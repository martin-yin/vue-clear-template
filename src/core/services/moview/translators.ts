import { IMovie } from '@/types'

/**
 * @export
 * @param {Array<IMovie>} movieList
 * @returns
 */
export function moveTranslator(movieList: Array<IMovie>) {
  movieList.map((item) => {
    item.images = 'https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd526685178804ad18972bd40736e5?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxMTY=,xp_5,yp_5'
  })
  return movieList
}
