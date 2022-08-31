import React, {useEffect, useState} from 'react'
import { BiSearchAlt, BiTimeFive, BiCog, BiPlus, BiRightArrow } from "react-icons/bi";
import { BsArrowBarLeft } from "react-icons/bs"
import { FaLocationArrow } from "react-icons/fa"
import Link from 'next/link';
import NotesAPI from '../../redux/sagas/api/NotesAPI';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import {toggleFalse} from '../../redux/actions/toggleSidebar/toggle'
import {openModal} from '../../redux/actions/modalAdd/modalAdd'
import { fetchNotesRequest } from '../../redux/actions/notes/getNotes';
import { MdOutlineDeleteForever } from "react-icons/md"
import { deleteNote } from '../../redux/actions/notes/deleteNotes';


function Sidebar(): JSX.Element {
    const toggle = useSelector((state:RootState) => state.toggleReducer.toggle)
    const toggleModal = useSelector((state:RootState) => state.modalAddReducer.openModal)
    const dispatch = useDispatch()
    const notes = useSelector((state: RootState) => state.notesReducer.getNotesReducer.notes)

    useEffect(() => {
        dispatch(fetchNotesRequest())
        console.log(notes);
    }, [toggleModal])
  return (
    <div className="sidebar" style={{display: toggle ? "block" : "none"}}>
        <div className="title-sidebar">
            Notion Clone
            <BsArrowBarLeft style={{marginLeft: "90px", marginTop: "5px"}} onClick={() => dispatch(toggleFalse())}/>
        </div>
        <div className="tools">
            <div className="tool">
                <BiSearchAlt style={{marginRight: "5px"}}/> Quick Find
            </div>
            <div className="tool">
                <BiTimeFive style={{marginRight: "5px"}}/> All Updates
            </div>
            <div className="tool">
                <BiCog style={{marginRight: "5px"}}/> Setting & Members
            </div>
        </div>
        <div className="container-pages">
            {
                notes.map((note : any, idx: React.Key) => 
                    <div className="page" key={idx}>
                        <FaLocationArrow style={{marginRight: "5px", fontSize: "10px"}}/>
                        <Link href={`/posts/${note.id}`}>
                            <a className="title-post" style={{width: "100%"}}>{note.title}</a>
                        </Link>
                        <div className="button-delete" onClick={() => dispatch(deleteNote(note.id))}>
                            <MdOutlineDeleteForever className="icon-delete"/>
                        </div>
                    </div>
                )
            }
        </div>
        <div className="footer-sidebar" onClick={() => dispatch(openModal())}>
            <BiPlus style={{marginRight: "5px"}}/>New Page
        </div>
    </div>
  )
}

export default Sidebar
