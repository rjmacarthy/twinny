import { useEffect, useRef, useState } from 'react'

import {
  VSCodeButton,
  VSCodeTextArea,
  VSCodePanelView,
  VSCodeProgressRing
} from '@vscode/webview-ui-toolkit/react'

import { Message } from './message'
import { Selection } from './selection'
import { BOT_NAME, USER_NAME } from './constants'

import styles from './index.module.css'
import { useWorkSpaceContext } from './hooks'
//import { useWorkSpaceContext } from './hooks'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const global = globalThis as any
export const Chat = () => {
  const [inputText, setInputText] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [loading, setLoading] = useState(false)
  const lastConversation = useWorkSpaceContext<Message[]>('lastConversation')
  const [messages, setMessages] = useState<Message[] | undefined>()
  const [completion, setCompletion] = useState<Message | null>()
  const divRef = useRef<HTMLDivElement>(null)

  const scrollBottom = () => {
    setTimeout(() => {
      if (divRef.current) {
        divRef.current.scrollTop = divRef.current.scrollHeight
      }
    }, 200)
  }

  const handleSendMessage = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault()

    if (inputText.trim()) {
      setInputText('')
      global.vscode.postMessage({
        type: 'chatMessage',
        data: messages?.length
          ? [
              ...messages,
              {
                role: 'user',
                content: inputText.trim(),
                type: ''
              }
            ]
          : [
              {
                role: 'user',
                content: inputText.trim(),
                type: ''
              }
            ]
      })

      setMessages((prev) => [
        ...(prev || []),
        { role: USER_NAME, content: inputText, type: '' }
      ])

      scrollBottom()
    }
  }

  useEffect(() => {
    window.addEventListener('message', (event) => {
      const message: PostMessage = event.data
      switch (message.type) {
        case 'onCompletion': {
          setIsGenerating(true)
          setLoading(false)
          setCompletion({
            role: BOT_NAME,
            content: message.value.completion,
            type: message.value.type
          })
          scrollBottom()
          break
        }
        case 'onLoading': {
          setLoading(true)
          break
        }
        case 'onEnd': {
          setMessages((prev) => {
            const update = [
              ...(prev || []),
              {
                role: BOT_NAME,
                content: message.value.completion,
                type: message.value.type
              }
            ]
            global.vscode.postMessage({
              type: 'setTwinnyWorkSpaceContext',
              key: 'lastConversation',
              data: update
            })
            return update
          })
          setCompletion(null)
          setIsGenerating(false)
        }
      }
    })
  }, [])

  useEffect(() => {
    if (lastConversation?.length) {
      return setMessages(lastConversation)
    }
    setMessages([])
  }, [lastConversation])

  return (
    <VSCodePanelView>
      <div className={styles.container}>
        <div className={styles.markdown} ref={divRef}>
          {messages?.map((message, index) => (
            <div key={`message-${index}`}>
              <Message
                completionType={message.type}
                sender={message.role}
                message={message.content}
              />
            </div>
          ))}
          {loading && (
            <div className={styles.loading}>
              <VSCodeProgressRing aria-label="Loading"></VSCodeProgressRing>
            </div>
          )}
          {!!completion && (
            <>
              <Message
                completionType={completion.type}
                sender={BOT_NAME}
                message={completion.content}
              />
            </>
          )}
        </div>
        <form onSubmit={handleSendMessage}>
          <Selection onSelect={scrollBottom} />
          <div className={styles.chatbox}>
            <VSCodeTextArea
              disabled={isGenerating}
              placeholder="Message twinny"
              rows={5}
              value={inputText}
              onChange={(e) => {
                const event =
                  e as unknown as React.ChangeEvent<HTMLTextAreaElement>
                setInputText(event.target.value)
              }}
            />
          </div>
          <div className={styles.send}>
            <VSCodeButton
              disabled={isGenerating}
              type="submit"
              appearance="primary"
            >
              Send message
            </VSCodeButton>
          </div>
        </form>
      </div>
    </VSCodePanelView>
  )
}
