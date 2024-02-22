import { VSCodeButton, VSCodeCheckbox, VSCodeDivider } from '@vscode/webview-ui-toolkit/react'
import { useTemplates, useWorkSpaceContext } from './hooks'
import {
  DEFAULT_ACTION_TEMPLATES,
  MESSAGE_KEY,
  MESSAGE_NAME
} from '../constants'
import { useEffect, useState } from 'react'
import { kebabToSentence } from './utils'

import styles from './index.module.css'
import { ClientMessage } from '../extension/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const global = globalThis as any
export const AdditionalOptions = () => {
  const { templates, saveTemplates } = useTemplates()
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([])
  const selectedTemplatesContext =
    useWorkSpaceContext<string[]>(MESSAGE_KEY.selectedTemplates) || []

  const handleTemplateClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const target = e.target as HTMLInputElement

    const template = target.value

    if (selectedTemplates.includes(template)) {
      if (selectedTemplates.length === 1) {
        saveTemplates([])
        setSelectedTemplates([])
        return
      }

      return setSelectedTemplates((prev) => {
        const newValue = prev.filter((item) => item !== template)
        saveTemplates(newValue)
        return newValue
      })
    }

    setSelectedTemplates((prev) => {
      const newValue = [...prev, template]
      saveTemplates(newValue)
      return newValue
    })
  }

  const handleResetTemplates = () => {
    saveTemplates(DEFAULT_ACTION_TEMPLATES)
    setSelectedTemplates(DEFAULT_ACTION_TEMPLATES)
  }

  const handleEmbedDocuments = () => {
    global.vscode.postMessage({
      type: MESSAGE_NAME.twinnyEmbedDocuments
    } as ClientMessage<string[]>)
  }

  useEffect(() => {
    if (selectedTemplatesContext !== undefined) {
      setSelectedTemplates(selectedTemplatesContext)
    } else {
      setSelectedTemplates(DEFAULT_ACTION_TEMPLATES)
    }
  }, [selectedTemplatesContext])

  return (
    <>
      <h3>Additional Options</h3>
      <VSCodeDivider />
      <h4>Template settings</h4>
      <p>Select the templates you want to use in the chat interface.</p>
      {templates &&
        templates.map((templateName: string) => (
          <div className={styles.templateCheckbox}>
            <label htmlFor={templateName}>
              <VSCodeCheckbox
                id={templateName}
                name={templateName}
                value={templateName}
                onClick={handleTemplateClick}
                checked={selectedTemplates.includes(templateName)}
              ></VSCodeCheckbox>
              <span key={templateName}>{kebabToSentence(templateName)}</span>
            </label>
          </div>
        ))}
      <VSCodeButton
        className={styles.resetTemplatesButton}
        onClick={handleResetTemplates}
      >
        Reset templates
      </VSCodeButton>
      <h4>Embedding options</h4>
      <p>Click the button below to embed all documents in this workspace.</p>
      <VSCodeButton
        onClick={handleEmbedDocuments}
        className={styles.embedDocumentsButton}
      >
        Embed Documents
      </VSCodeButton>
    </>
  )
}
