import * as React from 'react'
import styled from 'styled-components'
import { useStateWithStorage } from '../hooks/use_state_with_storage'
import * as ReactMarkdown  from 'react-markdown'
import { putMemo } from '../indexeddb/memos'
import { Button } from '../components/button'
import { SaveModal } from '../components/save_modal'
import { Link } from 'react-router-dom'
import { Header } from '../components/header'

const { useState } = React

const Wrapper =  styled.div`
    bottom: 0; 
    left: 0;
    position: fixed;
    right: 0;
    top: 3rem;
`

const HeaderArea = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
`

const TextArea = styled.textarea`
    border-right: 1px solid silver;
    border-top: 1px solid silver;
    bottom: 0;
    font-size: 1rem;
    left: 0;
    padding: 0.5rem;
    position: absolute;
    top: 0;
    width: 50vw;
`

const Preview= styled.div`
    border-top: 1px solid silver;
    bottom:  0;
    overflow-y: scroll;
    padding: 1rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 50vw;
`

const StorageKey  = 'pages/editor:text'

export const Editor: React.FC  = () => {
    // const [text, setText] = useState<String>('')
    // const [text, setText] = useState<String>(localStorage.getItem(StorageKey) || '')
    const [text, setText] = useStateWithStorage('', StorageKey)

    // const saveMemo = (): void => {
    //     putMemo('TITLE', text)
    // }
    const [showModal, setShowModal] = useState(false)

    return(
        <>
        <HeaderArea>
            <Header title="Markdown Editor">
                <Button 
                // onClick={saveMemo}
                onClick={() => setShowModal(true)}
                >
                    Save
                </Button>
                <Link to="/history">
                    History
                </Link>
            </Header>
        </HeaderArea>
        <Wrapper>
            {/* <TextArea value="you can type something" /> */}
            <TextArea  
            // onChange={(event) => {
            //     // setText(event.target.value)
            //     const changeText = event.target.value
            //     localStorage.setItem(StorageKey, changeText)
            //     setText(changeText)
            // }}
            onChange={(event) => setText(event.target.value)}
            value={text}
            />
            {/* <Preview>Preview Area</Preview> */}
            <Preview>
                <ReactMarkdown source={text} />
            </Preview>
        </Wrapper>
        {showModal && (
            <SaveModal  
            onSave={(title: string): void => {
                putMemo(title, text)
                setShowModal(false)
            }}
            onCancel={() => setShowModal(false)}
            />
        )}
        </>
    )
}