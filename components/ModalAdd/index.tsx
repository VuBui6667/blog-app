import { AnyNsRecord } from 'dns'
import React, { SetStateAction, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import NotesAPI from '../../redux/sagas/api/NotesAPI'
import { closeModal } from '../../redux/actions/modalAdd/modalAdd'
import { RootState } from '../../redux/reducers'

function ModalAdd() {
    const toggleModal = useSelector((state:RootState) => state.modalAddReducer.openModal)
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    const [content, setContent] = useState()
    const [title, setTitle] = useState()

    const refTitle = useRef<HTMLDivElement>(null)
    const refContent = useRef<HTMLDivElement>(null)

    const handleContent = () => {
        setContent(refContent.current?.innerText as SetStateAction<undefined>)
    }

    const handleTitle = () => {
        setTitle(refTitle.current?.innerText as SetStateAction<undefined>)
    }

    const addNote = async () => {
        await NotesAPI.post({
            title: title,
            body: content,
        })
        handleCloseModal()
    }


    return (
        <div className="container-modal" onClick={() => handleCloseModal()}>
            <div className="modal-add" onClick={e => e.stopPropagation()}>
                <div className="header">
                    <div className="add-new" onClick={() => addNote()}>Add to Notion</div>
                </div>
                <div className="contain-note">
                    <div className="title-note" onBlur={() => handleTitle()} ref={refTitle} contentEditable placeholder='Untitled'></div>
                    <div className="content-note" ref={refContent} onBlur={() => handleContent()} contentEditable placeholder='Empty'></div>
                </div>
            </div>
        </div>
    )
}

export default ModalAdd