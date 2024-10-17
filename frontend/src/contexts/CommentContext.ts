import { FallbackData } from '@/components/CommentList'
import { BlogEntryProps } from '@/components/bskyembed/src/components/blogEntry'
import { LinkatBoardProps } from '@/components/bskyembed/src/components/linkatEntry'
import { ThreadViewPost } from '@atproto/api/dist/client/types/app/bsky/feed/defs'
import { Dispatch, SetStateAction, createContext } from 'react'

export type CommentData = ThreadViewPost | BlogEntryProps | LinkatBoardProps | FallbackData

export interface CommentContextValue {
  comments: CommentData[]
  setComments: Dispatch<SetStateAction<CommentData[]>>
}

export const CommentContext = createContext<CommentContextValue>({ comments: [], setComments: () => {} })
